import { useEffect, useRef, useState } from "react";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { useLinkTo } from "@react-navigation/native";

import syncTokenApi from "../api/syncToken";
import storeManager from "../utility/storeManager";

const modelNotificationData = (request) => {
        console.log(request);
        let obj = {
                id: request.identifier,
                title: request.content.title,
                subtitle: request.content.subtitle,
                data: request.content.data,
        };
        if (obj.data.__displayInForeground) {
                delete obj.data.__displayInForeground;
        }
        return obj;
};

export default useNotifications = () => {
        const responseListener = useRef();
        const [data, setdata] = useState(null);
        const linkto = useLinkTo();

        // first time persmission and also adding a listner when the notification is recieved
        useEffect(() => {
                registerForPushNotifications();
                responseListener.current = Notifications.addNotificationResponseReceivedListener(handleNotification);
                return () => {
                        if (responseListener.current) {
                                Notifications.removeNotificationSubscription(responseListener.current);
                        }
                };
        }, []);

        // On Recieving Notification
        const handleNotification = ({ notification }) => {
                if (notification) {
                        let obj = modelNotificationData(notification.request);
                        if (data === null || data.id !== obj.id) {
                                setdata(obj);
                        }
                }
        };

        useEffect(() => {
                if (data && data.data.url) {
                        console.log(data.data.url);
                        try {
                                linkto(data.data.url);
                        } catch (error) {
                                console.log(error);
                        }
                }
        }, [data]);

        const registerForPushNotifications = async () => {
                try {
                        const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
                        if (!permission.granted) return;
                        const token = await Notifications.getExpoPushTokenAsync();
                        const devicetoken = await storeManager.getSecureData("pushToken");

                        if (devicetoken === null || devicetoken != token.data) {
                                console.log("saved");
                                storeManager.storeSecureData("pushToken", token.data);
                                //syncTokenApi.register(token);
                        }
                        console.log(token);
                } catch (error) {
                        console.log("Error getting a push token", error);
                }
        };
};

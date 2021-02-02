import { useEffect, useRef, useState } from "react";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

import syncTokenApi from "../api/syncToken";
import storeManager from "../utility/storeManager";

export default useNotifications = (notificationListener) => {
        const responseListener = useRef();
        const [data, setdata] = useState(null);
        const handleNotification = (notification) => {
                if (notification) {
                        let obj = {
                                id: notification.notification.request.identifier,
                                title: notification.notification.request.content.title,
                                subtitle: notification.notification.request.content.subtitle,
                                data: notification.notification.request.content.data,
                        };
                        if (obj.data.__displayInForeground) {
                                delete obj.data.__displayInForeground;
                        }
                        if (data.id !== obj.id) {
                                setdata(obj);
                        }
                }
        };

        useEffect(() => {
                registerForPushNotifications();
                responseListener.current = Notifications.addNotificationResponseReceivedListener(handleNotification);
                return () => {
                        if (responseListener.current) {
                                Notifications.removeNotificationSubscription(responseListener.current);
                        }
                };
        }, []);

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
        return { data };
};

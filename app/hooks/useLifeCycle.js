import { useRef, useEffect, useState } from "react";
import { AppState } from "react-native";

export default useLifeCycle = () => {
        const [appState, setappState] = useState(AppState.currentState);
        useEffect(() => {
                AppState.addEventListener("change", _handleAppStateChange);
                return () => {
                        AppState.removeEventListener("change", _handleAppStateChange);
                };
        }, []);
        const _handleAppStateChange = (nextAppState) => {
                if (appState.match(/inactive|background/) && nextAppState === "active") {
                        console.log("App has come to the foreground!");
                }
                setappState(nextAppState);
        };

        return appState;

        // const [location, setLocation] = useState();

        // const getLocation = async () => {
        //         try {
        //                 const { granted } = await Location.requestPermissionsAsync();
        //                 if (!granted)
        //                         return setLocation({
        //                                 latitude: 43.6532,
        //                                 longitude: 79.3832,
        //                         });
        //                 const {
        //                         coords: { latitude, longitude },
        //                 } = await Location.getLastKnownPositionAsync();
        //                 setLocation({ latitude, longitude });
        //         } catch (error) {
        //                 console.log(error);
        //         }
        // };

        // useEffect(() => {
        //         getLocation();
        // }, []);

        // return location;
        // //appState.current;
};

import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
        const [location, setLocation] = useState();

        const getLocation = async () => {
                try {
                        const { granted } = await Location.requestPermissionsAsync();
                        if (!granted)
                                return setLocation({
                                        latitude: 43.6532,
                                        longitude: 79.3832,
                                });
                        const {
                                coords: { latitude, longitude },
                        } = await Location.getLastKnownPositionAsync();
                        setLocation({ latitude, longitude });
                } catch (error) {
                        console.log(error);
                }
        };

        useEffect(() => {
                getLocation();
        }, []);

        return location;
};

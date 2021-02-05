import React, { useRef } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
import useLocation from "../../hooks/useLocation";

function Tab3(props) {
        const location = useLocation();
        const mapRef = useRef();

        if (location) {
                mapRef.current.animateToRegion(
                        {
                                latitude: parseFloat(location.latitude),
                                longitude: parseFloat(location.longitude),
                                latitudeDelta: 0.05,
                                longitudeDelta: 0.01,
                        },
                        1000
                );
        }
        return (
                <View style={styles.container}>
                        <MapView showsUserLocation loadingEnabled ref={mapRef} style={styles.mapcontainer}></MapView>
                </View>
        );
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
        },
        mapcontainer: {
                width: "100%",
                height: "100%",
        },
});

export default Tab3;

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import colors from "../config/colors";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineBanner(props) {
        const netInfo = useNetInfo();
        if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
                return (
                        <View style={styles.container}>
                                <Text>No Internet connection</Text>
                        </View>
                );
        } else {
                return null;
        }
}

const styles = StyleSheet.create({
        container: {
                top: Constants.statusBarHeight,
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                backgroundColor: colors.primary,
                height: 50,
                position: "absolute",
                zIndex: 1,
                opacity: 0.9,
        },
        textContainer: {},
});

export default OfflineBanner;

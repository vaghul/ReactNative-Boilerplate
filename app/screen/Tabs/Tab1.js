import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import useNotifications from "../../hooks/useNotifications";

function Tab1() {
        useNotifications();
        return (
                <View style={styles.container}>
                        <Text>Tab 1</Text>
                </View>
        );
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
        },
});

export default Tab1;

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

function Tab1() {
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

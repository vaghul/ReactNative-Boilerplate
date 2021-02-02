import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Tab3(props) {
        return (
                <View style={styles.container}>
                        <Text>Tab 3</Text>
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

export default Tab3;

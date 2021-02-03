import React from "react";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";

function ModalScreen({ navigation }) {
        return (
                <View style={styles.container}>
                        <Button title={"close"} onPress={() => navigation.goBack()} />
                        <StatusBar barStyle="light-content" />
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

export default ModalScreen;

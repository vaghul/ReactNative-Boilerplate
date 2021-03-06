import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import route from "../../config/route";

function Tab2({ navigation }) {
        return (
                <View style={styles.container}>
                        <Text>Tab 2</Text>
                        <Button title={"open modal"} onPress={() => navigation.navigate(route.MODAL)} />
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

export default Tab2;

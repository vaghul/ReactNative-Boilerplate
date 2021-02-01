import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../config/colors";

function AppButton({ title, color = "secondary", onPress }) {
        return (
                <TouchableOpacity style={[styles.container, { backgroundColor: colors[color] }]} onPress={onPress}>
                        <Text style={styles.content}>{title}</Text>
                </TouchableOpacity>
        );
}

const styles = StyleSheet.create({
        container: {
                marginHorizontal: 15,
                height: 50,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 10,
        },
        content: {
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
                textTransform: "uppercase",
        },
});

export default AppButton;

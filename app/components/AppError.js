import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function AppError({ content }) {
        if (!content) return null;
        return <Text style={styles.errorContainer}>{content}</Text>;
}

const styles = StyleSheet.create({
        errorContainer: {
                fontSize: 13,
                color: colors.danger,
        },
});

export default AppError;

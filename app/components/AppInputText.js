import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { useFormikContext } from "formik";
import AppError from "./AppError";

function AppInputText({ icon, name, placeholder, error, errorVisible, ...otherprops }) {
        const { setFieldValue, setFieldTouched, touched, errors, values } = useFormikContext();
        return (
                <View style={styles.container}>
                        <View style={styles.inputcontainer}>
                                <MaterialCommunityIcons name={icon} size={25} style={styles.icon} color={colors.mediumgrey} />
                                <TextInput
                                        placeholder={placeholder}
                                        placeholderTextColor={colors.mediumgrey}
                                        onChangeText={(text) => setFieldValue(name, text)}
                                        value={values[name]}
                                        onBlur={() => setFieldTouched(name)}
                                        {...otherprops}
                                        style={{ width: "100%" }}
                                />
                        </View>
                        {touched[name] && <AppError content={errors[name]} />}
                </View>
        );
}

const styles = StyleSheet.create({
        container: {
                marginHorizontal: 15,
                flexDirection: "column",
        },
        inputcontainer: {
                marginVertical: 10,
                backgroundColor: colors.lightgrey,
                alignItems: "center",
                borderRadius: 15,
                flexDirection: "row",
        },
        icon: {
                padding: 10,
        },
});

export default AppInputText;

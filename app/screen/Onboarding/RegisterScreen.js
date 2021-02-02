import React from "react";
import AppButton from "../../components/AppButtons";
import AppInputText from "../../components/AppInputText";
import Screen from "../../components/Screen";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

const validationScheme = yup.object().shape({
        name: yup.string().required().label("Name"),
        email: yup.string().required().email().label("Email"),
        password: yup.string().required().min(8).label("Password"),
});

function RegisterScreen(props) {
        return (
                <Screen style={styles.input}>
                        <Formik initialValues={{ name: "", email: "", password: "" }} onSubmit={(values) => console.log(values)} validationSchema={validationScheme}>
                                {({ handleSubmit }) => (
                                        <>
                                                <AppInputText autoCorrect={false} icon="account" placeholder="Name" name="name" />
                                                <AppInputText
                                                        autoCapitalize="none"
                                                        autoCorrect={false}
                                                        icon="email"
                                                        keyboardType="email-address"
                                                        placeholder="Email"
                                                        name="email"
                                                />
                                                <AppInputText autoCapitalize="none" autoCorrect={false} icon="lock" secureTextEntry placeholder="Password" name="password" />
                                                <AppButton title="Register" onPress={handleSubmit} />
                                        </>
                                )}
                        </Formik>
                </Screen>
        );
}

const styles = StyleSheet.create({
        input: {
                margin: 10,
                flex: 1,
        },
});
export default RegisterScreen;

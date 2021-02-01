import React from "react";
import { StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import AppButton from "../components/AppButtons";
import AppInputText from "../components/AppInputText";
import Screen from "../components/Screen";

const validationScheme = yup.object().shape({
        email: yup.string().required().email().label("Email"),
        password: yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
        const onUserLogin = () => {};
        return (
                <Screen style={styles.container}>
                        <Formik initialValues={{ email: "mosh@domain.com", password: "123456" }} onSubmit={onUserLogin} validationSchema={validationScheme}>
                                {({ handleSubmit }) => (
                                        <>
                                                {/* {ApiLogin.error && <AppError content={ApiLogin.data.error} />} */}
                                                <AppInputText
                                                        autoCapitalize="none"
                                                        autoCorrect={false}
                                                        icon="email"
                                                        keyboardType="email-address"
                                                        placeholder="Email"
                                                        name="email"
                                                />
                                                <AppInputText autoCapitalize="none" autoCorrect={false} icon="lock" secureTextEntry placeholder="Password" name="password" />
                                                <AppButton title="Login" onPress={handleSubmit} />
                                        </>
                                )}
                        </Formik>
                </Screen>
        );
}

const styles = StyleSheet.create({
        container: {
                margin: 10,
                flex: 1,
        },
});

export default LoginScreen;

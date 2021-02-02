import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import AppButton from "../../components/AppButtons";
import AppInputText from "../../components/AppInputText";
import Screen from "../../components/Screen";
import useApi from "../../hooks/useApi";
import storeManager from "../../utility/storeManager";
import AppError from "../../components/AppError";
import loginApi from "../../api/login";
import AuthContext from "../../context/AuthContext";

const validationScheme = yup.object().shape({
        email: yup.string().required().email().label("Email"),
        password: yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
        let ApiLogin = useApi(loginApi.userlogin);
        const { setuser } = useContext(AuthContext);
        const onUserLogin = async (userinfo) => {
                await ApiLogin.request(userinfo);
                if (ApiLogin.error === false) {
                        storeManager.storeSecureData("token", ApiLogin.data);
                        setuser(ApiLogin.data);
                        console.log(ApiLogin.data);
                }
        };
        return (
                <Screen style={styles.container}>
                        <Formik initialValues={{ email: "mosh@domain.com", password: "12345" }} onSubmit={onUserLogin} validationSchema={validationScheme}>
                                {({ handleSubmit }) => (
                                        <>
                                                {ApiLogin.error && <AppError content={ApiLogin.data.error} />}
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

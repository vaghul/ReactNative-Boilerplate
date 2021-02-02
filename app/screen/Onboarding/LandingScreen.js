import React from "react";
import { Image, ImageBackground, StyleSheet, View, Text } from "react-native";
import AppButton from "../../components/AppButtons";
import route from "../../config/route";

const imageBackgroundSource = require("../../assets/images/background.jpg");
const logoSource = require("../../assets/logo.png");
function LandingScreen({ navigation }) {
        const handleLogin = () => {
                navigation.navigate(route.LOGIN);
        };

        const handleRegister = () => {
                navigation.navigate(route.REGISTER);
        };

        return (
                <View style={styles.container}>
                        <ImageBackground source={imageBackgroundSource} style={styles.imagecontainer}>
                                <View style={styles.logocontainer}>
                                        <Image source={logoSource} style={styles.logoimagecontainer} />
                                        <Text style={styles.textcontainer}>React Native BoilerPlate</Text>
                                </View>
                                <View style={styles.buttoncontainer}>
                                        <AppButton title="Login" color="primary" onPress={handleLogin} />
                                        <AppButton title="Register" onPress={handleRegister} />
                                </View>
                        </ImageBackground>
                </View>
        );
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
        },
        imagecontainer: {
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-end",
                paddingBottom: 30,
        },
        logocontainer: {
                position: "absolute",
                alignItems: "center",
                top: 100,
        },
        logoimagecontainer: {
                width: 100,
                height: 100,
                resizeMode: "contain",
        },
        textcontainer: {
                marginVertical: 13,
                fontWeight: "bold",
                color: "black",
                fontSize: 20,
        },
        buttoncontainer: {
                width: "100%",
        },
});

export default LandingScreen;

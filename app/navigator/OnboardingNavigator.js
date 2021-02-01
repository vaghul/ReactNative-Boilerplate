import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import route from "./route";
import LandingScreen from "../screen/LandingScreen";
import LoginScreen from "../screen/LoginScreen";
import RegisterScreen from "../screen/RegisterScreen";

const Stack = createStackNavigator();

const OnboardingNavigator = () => (
        <Stack.Navigator>
                <Stack.Screen name={route.LANDING} component={LandingScreen} options={{ headerShown: false }} />
                <Stack.Screen name={route.LOGIN} component={LoginScreen} options={{ headerBackTitleVisible: false }} />
                <Stack.Screen name={route.REGISTER} component={RegisterScreen} options={{ headerBackTitleVisible: false }} />
        </Stack.Navigator>
);

export default OnboardingNavigator;

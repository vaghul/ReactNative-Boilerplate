import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import route from "../config/route";
import LandingScreen from "../screen/Onboarding/LandingScreen";
import LoginScreen from "../screen/Onboarding/LoginScreen";
import RegisterScreen from "../screen/Onboarding/RegisterScreen";

const Stack = createStackNavigator();

const OnboardingNavigator = () => (
        <Stack.Navigator>
                <Stack.Screen name={route.LANDING} component={LandingScreen} options={{ headerShown: false }} />
                <Stack.Screen name={route.LOGIN} component={LoginScreen} options={{ headerBackTitleVisible: false }} />
                <Stack.Screen name={route.REGISTER} component={RegisterScreen} options={{ headerBackTitleVisible: false }} />
        </Stack.Navigator>
);

export default OnboardingNavigator;

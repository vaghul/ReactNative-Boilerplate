import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import OnboardingNavigator from "./app/navigator/OnboardingNavigator";

export default function App() {
        return (
                <>
                        <NavigationContainer>
                                <OnboardingNavigator />
                                <StatusBar style="auto" />
                        </NavigationContainer>
                </>
        );
}

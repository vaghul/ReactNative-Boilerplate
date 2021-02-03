import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import route from "../config/route";
import ModalScreen from "../screen/ModalScreen";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();
const AppNavigator = () => {
        return (
                <Stack.Navigator screenOptions={{ headerShown: false, cardOverlayEnabled: true, ...TransitionPresets.ModalPresentationIOS }}>
                        <Stack.Screen name="Tab" component={TabNavigator} />
                        <Stack.Screen name={route.MODAL} component={ModalScreen} />
                </Stack.Navigator>
        );
};

export default AppNavigator;

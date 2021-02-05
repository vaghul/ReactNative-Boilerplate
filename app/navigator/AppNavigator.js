import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import route from "../config/route";
import ModalScreen from "../screen/ModalScreen";
import TabNavigator from "./TabNavigator";
import { Button } from "react-native";

const Stack = createStackNavigator();
const AppNavigator = () => {
        return (
                <Stack.Navigator
                        mode="modal"
                        screenOptions={{
                                headerShown: false,
                                cardOverlayEnabled: true,
                                ...TransitionPresets.ModalPresentationIOS,
                                headerStatusBarHeight: 5,
                                headerBackTitleVisible: false,
                        }}
                >
                        <Stack.Screen name={route.TAB} component={TabNavigator} />
                        <Stack.Screen
                                name={route.MODAL}
                                component={ModalScreen}
                                options={({ navigation }) => ({
                                        headerShown: true,
                                        headerLeftContainerStyle: {
                                                marginLeft: 10,
                                        },
                                        headerLeft: () => (
                                                <Button
                                                        title="close"
                                                        onPress={() => {
                                                                navigation.goBack();
                                                        }}
                                                />
                                        ),
                                })}
                        />
                </Stack.Navigator>
        );
};

export default AppNavigator;

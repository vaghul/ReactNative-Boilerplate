import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import route from "../config/route";
import HomeScreen from "../screen/HomeScreen";
const Stack = createStackNavigator();

const AppNavigator = () => (
        <Stack.Navigator>
                <Stack.Screen name={route.HOME} component={HomeScreen} />
        </Stack.Navigator>
);

export default AppNavigator;

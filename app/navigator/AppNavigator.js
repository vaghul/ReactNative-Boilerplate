import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import route from "../config/route";
import Tab1 from "../screen/Tabs/Tab1";
import Tab2 from "../screen/Tabs/Tab2";
import Tab3 from "../screen/Tabs/Tab3";
import Tab4 from "../screen/Tabs/Tab4";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
        <Tab.Navigator>
                <Tab.Screen name={route.TAB1} component={Tab1} />
                <Tab.Screen name={route.TAB2} component={Tab2} />
                <Tab.Screen name={route.TAB3} component={Tab3} />
                <Tab.Screen name={route.TAB4} component={Tab4} />
        </Tab.Navigator>
);

export default AppNavigator;

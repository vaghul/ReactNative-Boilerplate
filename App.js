import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, LinkingOptions } from "@react-navigation/native";

import OfflineBanner from "./app/components/OfflineBanner";
import OnboardingNavigator from "./app/navigator/OnboardingNavigator";
import AuthContext from "./app/context/AuthContext";
import AppNavigator from "./app/navigator/AppNavigator";
import storeManager from "./app/utility/storeManager";
import AppLoading from "expo-app-loading";
import * as Linking from "expo-linking";

//const prefix = Linking.makeUrl("/tab/:id", { id: "id" });
const prefix = Linking.makeUrl("/");
console.log(prefix);
const linking = {
        prefixes: [prefix],
        config: {
                screens: {
                        TAB: {
                                screens: {
                                        TAB4: {
                                                path: "tab4/:id",
                                                parse: {
                                                        id: (id) => `${id}`,
                                                },
                                        },
                                },
                        },
                },
        },
};

// const linking = {
//         prefixes: [prefix],
//         config: {
//           screens: {
//             HomeStack: {
//               path: "stack",
//               initialRouteName: "Home",
//               screens: {
//                 Home: "home",
//                 Profile: {
//                   path: "user/:id/:age",
//                   parse: {
//                     id: id => `there, ${id}`,
//                     age: Number,
//                   },
//                   stringify: {
//                     id: id => id.replace("there, ", ""),
//                   },
//                 },
//               },
//             },
//             Settings: "settings",
//           },
//         },
//       };
export default function App() {
        const [user, setuser] = useState();
        const [splashloaded, setsplashloaded] = useState(false);
        const loadAppInfo = async () => {
                const token = await storeManager.getSecureData("token");
                if (token) {
                        setuser(token);
                }
        };

        if (splashloaded === false) {
                return <AppLoading autoHideSplash startAsync={loadAppInfo} onFinish={() => setsplashloaded(true)} onError={(error) => console.log(error)} />;
        }
        return (
                <AuthContext.Provider value={{ user, setuser }}>
                        <NavigationContainer linking={linking}>
                                <OfflineBanner />
                                {user ? <AppNavigator /> : <OnboardingNavigator />}
                                <StatusBar style="auto" />
                        </NavigationContainer>
                </AuthContext.Provider>
        );
}

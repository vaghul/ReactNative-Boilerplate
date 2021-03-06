import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import OfflineBanner from "./app/components/OfflineBanner";
import OnboardingNavigator from "./app/navigator/OnboardingNavigator";
import AuthContext from "./app/context/AuthContext";
import AppNavigator from "./app/navigator/AppNavigator";
import storeManager from "./app/utility/storeManager";
import linkingSettings from "./app/utility/LinkManager";

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
                        <NavigationContainer linking={linkingSettings}>
                                <OfflineBanner />
                                {user ? <AppNavigator /> : <OnboardingNavigator />}
                                <StatusBar style="auto" />
                        </NavigationContainer>
                </AuthContext.Provider>
        );
}

import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import OfflineBanner from "./app/components/OfflineBanner";
import OnboardingNavigator from "./app/navigator/OnboardingNavigator";
import AuthContext from "./app/context/AuthContext";
import AppNavigator from "./app/navigator/AppNavigator";
import storeManager from "./app/utility/storeManager";
import AppLoading from "expo-app-loading";

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
                return <AppLoading startAsync={loadAppInfo} onFinish={() => setsplashloaded(true)} onError={(error) => console.log(error)} />;
        }
        return (
                <AuthContext.Provider value={{ user, setuser }}>
                        <NavigationContainer>
                                <OfflineBanner />
                                {user ? <AppNavigator /> : <OnboardingNavigator />}
                                <StatusBar style="auto" />
                        </NavigationContainer>
                </AuthContext.Provider>
        );
}

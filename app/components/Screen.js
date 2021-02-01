import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";

function Screen({ style, children, statusTheme = "dark-content" }) {
        return (
                <SafeAreaView style={[styles.screen, style]}>
                        <View style={style}>{children}</View>
                        <StatusBar barStyle={statusTheme} />
                </SafeAreaView>
        );
}

const styles = StyleSheet.create({
        screen: {
                marginTop: StatusBar.currentHeight,
                flex: 1,
        },
});

export default Screen;

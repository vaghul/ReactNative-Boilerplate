import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import AuthContext from "../../context/AuthContext";
import storeManager from "../../utility/storeManager";

function Tab4(props) {
        const { setuser } = useContext(AuthContext);
        return (
                <View style={styles.container}>
                        <Text>Tab 4</Text>
                        <Button
                                title="Logout"
                                onPress={() => {
                                        storeManager.deleteSecureData("token");
                                        setuser(null);
                                }}
                        />
                </View>
        );
}

const styles = StyleSheet.create({
        container: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
        },
});

export default Tab4;

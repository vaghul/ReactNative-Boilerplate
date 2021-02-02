import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

const storeData = async (key, value) => {
        try {
                const jsonValue = JSON.stringify(value);
                await AsyncStorage.setItem(key, jsonValue);
        } catch (e) {
                console.log(e);
        }
};

const getData = async (key) => {
        try {
                const jsonValue = await AsyncStorage.getItem(key);
                return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
                console.log(e);
        }
};

const deleteData = async (key) => {
        try {
                AsyncStorage.removeItem(key);
        } catch (e) {
                console.log(e);
        }
};

const storeSecureData = async (key, value) => {
        try {
                const jsonValue = JSON.stringify(value);
                await SecureStore.setItemAsync(key, jsonValue);
        } catch (e) {
                console.log(e);
        }
};

const getSecureData = async (key) => {
        try {
                const jsonValue = await SecureStore.getItemAsync(key);
                return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
                console.log(e);
        }
};

const deleteSecureData = async (key) => {
        try {
                SecureStore.deleteItemAsync(key);
        } catch (e) {
                console.log(e);
        }
};

export default {
        storeData,
        getData,
        storeSecureData,
        getSecureData,
        deleteSecureData,
};

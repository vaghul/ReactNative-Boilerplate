import Constants from "expo-constants";

const environment = {
        dev: {
                url: "http://192.168.2.16:9000/api/",
        },
        staging: {
                url: "http://192.168.2.16:9000/api/",
        },
        production: {
                url: "http://192.168.2.16:9000/api/",
        },
};

const getEnvironment = () => {
        if (__DEV__) {
                return environment.dev;
        } else if (Constants.manifest.releaseChannel === "staging") {
                return environment.staging;
        }
        return environment.production;
};

export default getEnvironment();

import * as Linking from "expo-linking";

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

export default linking;

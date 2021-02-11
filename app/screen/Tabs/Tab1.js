import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useState } from "react/cjs/react.development";

import ComponentScreen from "../../components/Screen";
let values = [
        {
                id: "1",
                title: "Title 1",
                description: "test 1",
        },
        {
                id: "2",
                title: "Title 2",
                description: "test 2",
        },
        {
                id: "3",
                title: "Title 3",
                description: "test 3",
        },
];

let values2 = [
        {
                id: "a1",
                title: "Title 1",
                description: "test 1",
        },
        {
                id: "a2",
                title: "Title 2",
                description: "test 2",
        },
        {
                id: "a3",
                title: "Title 3",
                description: "test 3",
        },
        {
                id: "a4",
                title: "Title 1",
                description: "test 1",
        },
        {
                id: "a5",
                title: "Title 2",
                description: "test 2",
        },
        {
                id: "a6",
                title: "Title 3",
                description: "test 3",
        },
];

const renderItem = ({ item }) => {
        if (item.id === "5") {
                return (
                        <FlatList
                                data={values2}
                                renderItem={horizontalItems}
                                keyExtractor={(item) => item.id}
                                //ItemSeparatorComponent={itemSeperator}
                                decelerationRate="fast"
                                horizontal
                        />
                );
        } else {
                return verticalItems(item);
        }
};

const verticalItems = (item) => (
        <View style={styles.item}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.description}</Text>
        </View>
);

const horizontalItems = ({ item }) => {
        return (
                <View style={[styles.Horizontalitem]}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.subtitle}>{item.description}</Text>
                </View>
        );
};

const renderEmptyList = ({ item }) => (
        <View style={styles.emptyitem}>
                <Text style={styles.title}>empty</Text>
        </View>
);

const itemSeperator = () => (
        <View
                style={{
                        width: "100%",
                        backgroundColor: "gray",
                        height: 1,
                }}
        />
);
const Tab1 = () => {
        const [resetList, setresetlist] = useState(false);
        const [refreshList, setrefreshlist] = useState(false);
        const LoadMoreValues = () => {
                let num = `${values.length + 1}`;
                if (num < 100) {
                        values.push({
                                id: num,
                                title: `Title ${num}`,
                                description: `test ${num}`,
                        });
                        setresetlist(true);
                }
        };

        const refreshHandler = () => {
                setrefreshlist(true);
                setTimeout(() => {
                        setrefreshlist(false);
                }, 2000);
        };
        return (
                <ComponentScreen style={styles.container}>
                        <FlatList
                                ListEmptyComponent={renderEmptyList}
                                data={values}
                                renderItem={renderItem}
                                keyExtractor={(item) => item.id}
                                onEndReached={LoadMoreValues}
                                extraData={resetList}
                                onRefresh={refreshHandler}
                                ItemSeparatorComponent={itemSeperator}
                                refreshing={refreshList}
                                decelerationRate="fast"
                        />
                </ComponentScreen>
        );
};

const styles = StyleSheet.create({
        container: {
                flex: 1,
                justifyContent: "center",
        },
        item: {
                paddingTop: 20,
                marginVertical: 8,
                marginHorizontal: 16,
                height: 100,
        },
        Horizontalitem: {
                justifyContent: "center",
                alignItems: "center",
                margin: 20,
                height: 100,
                backgroundColor: "red",
        },
        title: {
                fontSize: 32,
        },
        subtitle: {
                fontSize: 18,
        },
        emptyitem: {
                alignItems: "center",
        },
});

export default Tab1;

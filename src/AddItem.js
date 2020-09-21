import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, FlatList, Button, StyleSheet, Text, View } from 'react-native';

export default function AddItem({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>물품추가하기</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        padding : 30,
        paddingTop : 50
    },
    content: {
        flex: 20
    },
    item: {
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flex: 1
    },
    title: {
        fontSize: 32,
    },
});

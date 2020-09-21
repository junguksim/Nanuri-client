import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, FlatList, Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import showerBallImg from "../assets/showerball.jpg"
import manImg from "../assets/man.png"
import Item from "./Item"

const DummyData = [
    {
        itemIdx: 1,
        userName: "공릉동샤워볼맨",
        manImg,
        title: "샤워볼 개당 2천원에 나눔합니다~",
        picture: showerBallImg,
        currentPeople: 1,
        maxPeople: 6,
        itemPrice: 12000
    },
    {
        itemIdx: 2,
        userName: "공릉동샤워볼맨",
        manImg,
        title: "샤워볼 개당 2천원에 나눔합니다~",
        picture: showerBallImg,
        currentPeople: 1,
        maxPeople: 6,
        itemPrice: 12000
    },
    {
        itemIdx: 3,
        userName: "공릉동샤워볼맨",
        manImg,
        title: "샤워볼 개당 2천원에 나눔합니다~",
        picture: showerBallImg,
        currentPeople: 1,
        maxPeople: 6,
        itemPrice: 12000
    },
    {
        itemIdx: 4,
        userName: "공릉동샤워볼맨",
        manImg,
        title: "샤워볼 개당 2천원에 나눔합니다~",
        picture: showerBallImg,
        currentPeople: 1,
        maxPeople: 6,
        itemPrice: 12000
    },
]

export default function Nanum({ navigation }) {
    const renderItem = ({ item }) => (
        <Item userName={item.userName} title={item.title} picture={item.picture} currentPeople={item.currentPeople} maxPeople={item.maxPeople} itemPrice={item.itemPrice} />
    );
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>나눔</Text>
            </View>
            <View style={styles.content}>
                <FlatList
                    data={DummyData}
                    renderItem={renderItem}
                    keyExtractor={item => item.itemIdx.toString()}
                />
            </View>
        </SafeAreaView>
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

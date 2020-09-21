import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, FlatList, Button, StyleSheet, Text, View, Image } from 'react-native';
import showerBallImg from "../assets/showerball.jpg"
import manImg from "../assets/man.png"

export default function Item({ userName, title, picture, currentPeople, maxPeople, itemPrice }) {
    return (
        <View style={styles.item}>
            <View style={styles.header}>
                <Image source={manImg} style={{ 'marginRight': 10 }}></Image>
                <Text style={styles.userName}>{userName}</Text>
            </View>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.content}>
                <Image source={picture} styles={styles.picture}></Image>
                <View style={styles.info}>
                    <Text>{`인원 : ${currentPeople} / ${maxPeople}`}</Text>
                    <Text>{itemPrice}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#DCDCDC',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flex: 1
    },
    title: {
        flex: 1,
        fontSize: 19,
        alignSelf: "center"
    },
    header: {
        flex: 1,
        fontSize: 13,
        flexDirection: "row",
        paddingLeft: 5
    },
    content: {
        flex: 1,
        fontSize: 13,
        flexDirection: "row"
    },
    picture: {
        width : 100,
        height : 100,
        flex : 1
    },
    info: {
        flex: 1,
        alignItems : "center",
        alignSelf : "center"
    }
});
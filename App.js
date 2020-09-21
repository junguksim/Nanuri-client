import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as Location from "expo-location";
import * as Font from "expo-font"
import ak from "./config/appkey"
import axios from "axios"
import GroupBuying from "./src/GroupBuying"
import { FontAwesome, Ionicons } from '@expo/vector-icons'; 
import AddItem from "./src/AddItem"

Font.loadAsync({
  NanumSquareRoundL: require('./assets/fonts/NanumSquareRoundL.ttf'),
  NanumSquareRoundB: require('./assets/fonts/NanumSquareRoundB.ttf')
});
import Nanum from "./src/Nanum"
function GroupBuyingScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>공동구매</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Tab = createBottomTabNavigator();
export default class App extends React.Component {
  state = {
    addressName: null
  }
  getAddress = async (x, y) => {
    try {
      const {
        data
      } = await axios.get(
        `https://dapi.kakao.com/v2/local/geo/coord2address`,
        {
          params: {
            x, y
          },
          headers: {
            'Authorization': `KakaoAK ${ak.kakao}`
          }
        }
      )
      const addressName = data.documents[0].address.address_name
      console.log(addressName)
    } catch (error) {
      console.log(error)
      Alert.alert("get address error", "OMG")
    }
  }
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.getAddress(longitude, latitude)
    } catch (error) {
      Alert.alert("Can't find you!", "So sad..");
    }
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === '나눔') {
                iconName = focused ? 'exchange' : 'exchange';
                return <FontAwesome name={iconName} size={size} color={color} />;
              } else if (route.name === '공동구매') {
                iconName = focused ? 'group' : 'group';
                return <FontAwesome name={iconName} size={size} color={color} />;
              }
              else if (route.name === "물품등록") {
                iconName = focused ? 'ios-add-circle' : 'md-add';
                return <Ionicons name={iconName} size={size} color={color} />;
              }
            },
          })}
          tabBarOptions={{
            activeTintColor: '#7BED8D',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="나눔" component={Nanum} />
          <Tab.Screen name="공동구매" component={GroupBuying} />
          <Tab.Screen name="물품등록" component={AddItem} />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: Font.NanumSquareRoundB
  },
});

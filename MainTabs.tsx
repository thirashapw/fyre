import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  navigation: any;
};
import Profile from './src/Profile';
import Polls from './src/Polls';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import NewFriend from './src/NewFriend';
import Love from './src/Love';
import Gossip from './src/Gossips';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Tab = createMaterialBottomTabNavigator();
const MainTabs = (props: Props) => {

  const checkUserPermissions = async () => {
    console.log("Checking user...")
    const userFirc = await AsyncStorage.getItem('@userfirc');
    if(userFirc === null) {
      props.navigation.navigate("Login");
    }
  }

  useEffect(() => {
    checkUserPermissions();
  },[])

  return (
    <Tab.Navigator
      initialRouteName='Friends'
      
      activeColor="#D066DD"
      // shifting={true}

      inactiveColor="#243465" barStyle={{ height: 70, backgroundColor: 'white', padding: 0 }}>
      <Tab.Screen options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="newspaper" size={28} />
        ),
      }} name="Gossips" component={Gossip} />
      <Tab.Screen  options={{
      
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="heart" size={28} />
        ),
        
      }} name="Love" component={Love} />
      <Tab.Screen options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="baby-face" size={28} />
        ),
      }} name="Friends" component={NewFriend} />

      <Tab.Screen options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="poll" size={28} />
        ),
      }} name="Polls" component={Polls} />

      <Tab.Screen options={{
        tabBarLabel: 'Profile', tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" size={28} />
        ),
      }} name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 11,
    borderColor: '#DAD9D8',
    // borderStyle: "solid",
  },
  albertThomas: {
    fontFamily: 'Poppins-Bold',
    // fontWeight: 'bold',
    color: '#121212',
    fontSize: 26,
    marginTop: 15,
  },
  rect: {
    width: '70%',
    height: 49,
    marginTop: 15,
    alignItems: 'center',
    backgroundColor: 'rgba(147,221,238,0.55)',
    borderRadius: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  abcSchool: {
    fontFamily: 'Poppins-Bold',
    color: '#121212',
    fontSize: 17,
    // backgroundColor: 'red'
  },
  icon3: {
    color: 'rgba(125,205,103,1)',
    fontSize: 33,
    height: 0,
    width: 0,
    marginTop: -7,
  },
  rect1: {
    width: 287,
    height: 49,
    backgroundColor: 'rgba(147,221,238,0.55)',
    borderRadius: 40,
    marginTop: 21,
  },
  grade8: {
    fontFamily: 'Poppins-Regular',
    color: '#121212',
    fontSize: 17,
    marginTop: 14,
  },
  icon2: {
    color: 'rgba(205,187,103,1)',
    fontSize: 33,
    height: 0,
    width: 0,
    marginTop: -8,
  },
  rect2: {
    width: 323,
    height: 70,
    backgroundColor: 'rgba(255,255,255,1)',
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 10,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    borderRadius: 18,
    marginTop: 26,
    borderColor: 'cyan',
    borderWidth: 0.9,
  },
  swagPoints: {
    fontFamily: 'Poppins-Regular',
    color: 'rgba(148,147,147,1)',
    fontSize: 17,
    // marginTop: 22,
  },
  loremIpsum: {
    fontFamily: 'Poppins-Regular',
    color: '#121212',
    fontSize: 28,
    marginTop: -14,
  },
  points: {
    fontFamily: 'roboto-regular',
    color: 'rgba(148,147,147,1)',
    fontSize: 12,
  },
  icon: {
    color: 'rgba(226,243,72,1)',
    fontSize: 40,
    height: 0,
    width: 0,
    marginTop: -29,
  },
  button1: {
    width: 312,
    height: 50,
    backgroundColor: 'rgba(11,199,199,1)',
    borderRadius: 35,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 30,
    shadowOpacity: 0.28,
    shadowRadius: 10,
    marginTop: 49,
  },
  editProfile: {
    fontFamily: 'roboto-regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
  },
  cupertinoFooter2: {
    height: 49,
    width: 375,
    marginTop: 67,
  },
});

export default MainTabs;

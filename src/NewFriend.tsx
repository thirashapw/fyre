import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CupertinoFooter2 from "./components/CupertinoFooter2";
import Svg, { Ellipse } from "react-native-svg";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
type Props = {
  navigation: any;
};

const NewFriend = (props: Props) => {
  useEffect(() => {
    props.navigation.setOptions({ title: 'John' })
  },[])
  
  const showToast = (title, msg, type = 'error') => {
    Toast.show({
      type: type,
      text1: title,
      text2: msg
    });
  }


  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: 'center', marginBottom: 50, marginHorizontal: 10, marginTop: 20 }}>
        <Text style={styles.findANewFriend}>
          Find a new friend in your school
        </Text>
        <View style={[styles.ellipseStack, { backgroundColor: '#D68F37', borderRadius: 100, alignItems: 'center'}]}>
          <TouchableOpacity style={styles.button} onPress={() =>  props.navigation.navigate("SearchFriends", { title: 'Friends Nearby' })}>
            <MaterialCommunityIcons name="arrow-up" color={'white'} size={35} />
            <Text style={styles.start}>Start</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ellipseStackColumn}>

          <View style={styles.rectStack}>
            <View style={styles.rect}></View>
            <Image
              source={require("./assets/images/kindpng_3811093.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ellipse: {

    width: 126,
    height: 126,

  },
  button: {
    width: 100,
    height: 100,
    alignItems:'center',
    marginTop: 25
  },
  start: {
    fontFamily: "Poppins-Regular",
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    textAlign: 'center',
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 41,
    height: 0,
    width: 0,
    marginTop: -45,
    marginLeft: 30
  },
  ellipseStack: {
    width: 126,
    height: 126,
  },
  rect: {
    top: 4,
    left: 0,
    width: 343,
    height: 192,
    position: "absolute",
    backgroundColor: "rgba(219,145,53,1)",
    borderRadius: 21,
    opacity: 0.42
  },
  image: {
    top: 0,
    left: 80,
    width: 200,
    height: 200,
    position: "absolute"
  },
  rectStack: {
    width: 343,
    height: 200,
    marginTop: 46,
    marginLeft: 12
  },
  cupertinoFooter1: {
    height: 49,
    width: 375,
    backgroundColor: "rgba(15,15, 15,0)",
    marginTop: 52
  },
  ellipseStackColumn: {
    width: 375,
  },
  findANewFriend: {
    fontFamily: "Poppins-Regular",
    color: "#121212",
    fontSize: 54,
    letterSpacing: 0,
    flex: 1,
  }
});
export default NewFriend;

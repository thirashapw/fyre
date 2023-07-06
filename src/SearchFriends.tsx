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
import React, { useEffect, useState } from 'react';

import Toast from 'react-native-toast-message';
import EndPoint from './configs/EndPoint';
import AsyncStorage from '@react-native-async-storage/async-storage';




type Props = {
  navigation: any;
};

const SearchFriends = (props: Props) => {

  const [loading, setLoading] = useState(true);
  const [usersList, setUsersList] = useState([]);


  const showToast = (title, msg, type = 'error') => {
    Toast.show({
      type: type,
      text1: title,
      text2: msg
    });
  }

  useEffect(() => {
    setLoading(true);
    SearchFriends();
  }, [])


  const SearchFriends = async () => {
    const requestHeaders: HeadersInit_ = new Headers();
    requestHeaders.set('Content-Type', 'application/json');
    requestHeaders.set('Accept', 'application/json');
    setLoading(true);
    const userId = await AsyncStorage.getItem('@userfirc');
    await fetch(`${EndPoint}/searchFriends.php?uid=${userId}&state=school`, {
      method: 'GET',
      headers: requestHeaders,
      // body: JSON.stringify({
      //   "uid": userId,
      //   "state": "both"
      // })
    }).then((response) => response.json())
      .then(async (responseJson) => {
        console.log(responseJson)
        setUsersList(responseJson.details)
        setLoading(false);
      });
  }



  return loading ? (
    <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={{ borderRadius: 100, height: 50, width: 50 }}
        source={require("./assets/images/loading.jpg")}

      />
    </View>
  ) : (
    <ScrollView style={styles.container}>
      <View style={{ marginBottom: 50, marginHorizontal: 10 }}>

        <Text style={[styles.abcSchool, { textAlign: 'center', fontSize: 30, fontFamily: 'Poppins-Bold', marginTop: 10 }]}>
          Find your best near by <Text style={{ color: '#E188D0' }}>Lover!</Text>
        </Text>

        {
          usersList.map(userElement => (
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 15 }}
              onPress={() => props.navigation.navigate("Chat")}>
              <View>
                <Image
                  style={{ width: 50, height: 50, borderRadius: 100 }}
                  source={require("./assets/images/useround.png")}
                />
              </View>
              <View style={{ marginLeft: 15 }}>
                <Text>{userElement['fname']} {userElement['lname']}</Text>
                <Text>ABC School | Grade 10</Text>
              </View>
            </TouchableOpacity>
          ))
        }

        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
          <View>
            <Image
              style={{ width: 50, height: 50, borderRadius: 100 }}
              source={require("./assets/images/useround.png")}
            />
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text>Edward  Brian </Text>
            <Text>ABC School | Grade 10</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
          <View>
            <Image
              style={{ width: 50, height: 50, borderRadius: 100 }}
              source={require("./assets/images/useround.png")}

            />
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text>Daniel George </Text>
            <Text>ABC School | Grade 10</Text>
          </View>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
  },
  image: {
    width: '100%',
    height: 200,
    // borderRadius: 100,
    // borderWidth: 11,
    // borderColor: '#DAD9D8',
    // borderStyle: "solid",
    // backgroundColor: 'red'
  },
  albertThomas: {
    // fontFamily: 'Poppins-Bold',
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
    // fontFamily: 'Poppins-Bold',
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
    // fontFamily: 'Poppins-Regular',
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
    // fontFamily: 'Poppins-Regular',
    color: 'rgba(148,147,147,1)',
    fontSize: 17,
    // marginTop: 22,
  },
  loremIpsum: {
    // fontFamily: 'Poppins-Regular',
    color: '#121212',
    fontSize: 28,
    marginTop: -14,
  },
  points: {
    // fontFamily: 'roboto-regular',
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
    // fontFamily: 'Poppins-Bold',
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
  },
  cupertinoFooter2: {
    height: 49,
    width: 375,
    marginTop: 67,
  },
});

export default SearchFriends;

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
import EndPoint from './configs/EndPoint';
import Toast from 'react-native-toast-message';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  navigation: any;
};

const Profile = (props: Props) => {

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] : any = useState(null);

  const showToast = (title, msg, type = 'error') => {
    Toast.show({
      type: type,
      text1: title,
      text2: msg
    });
  }

  useEffect(() => {
    GetUserData();
  },[]);

  const Logout = async () => {
    await AsyncStorage.removeItem('@userfirc');
    props.navigation.navigate("Login");
  }

  const GetUserData = async () => {
    console.log("Getting data...")
    const requestHeaders: HeadersInit_ = new Headers();
    requestHeaders.set('Content-Type', 'application/json');
    requestHeaders.set('Accept', 'application/json');
    setLoading(true);
    const userFirc = await AsyncStorage.getItem('@userfirc');
    await fetch(`${EndPoint}/getuserdata.php?uid=${userFirc}`, {
      method: 'GET',
      headers: requestHeaders,
    }).then((response) => response.json())
      .then(async (responseJson) => {
        if (responseJson.uid != 0) {
          // console.log(responseJson.details)
          setUser(responseJson.details)
          setLoading(false);
        } else {
          showToast("Connection Issue!", responseJson.msg)
        }
        setLoading(false);
      });
  }

  return (
    <ScrollView style={styles.container}>
      <Spinner
        visible={loading}
      />
      <View style={{ alignItems: 'center', marginVertical: 50 }}>
        <Image
          source={require('./assets/images/user.png')}
          resizeMode="contain"
          style={styles.image}></Image>
        <Text style={styles.albertThomas}>{user != null ? user.fname + " " + user.lname : ""}</Text>
        <Text style={{ textAlign: 'center', width: '100%' }}>{user != null ? user.email : ""}</Text>

        <View
          style={{
            backgroundColor: '#C4ECF6',
            width: '70%',
            height: 60,
            borderRadius: 50,
            marginTop: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/images/icons/bank.png')}
            resizeMode="contain"
            style={{ height: 40, width: 40 }}></Image>
          <Text style={styles.abcSchool}>{user != null ? user.school : "No School"}</Text>
        </View>

        <View
          style={{
            backgroundColor: '#C4ECF6',
            width: '70%',
            height: 60,
            borderRadius: 50,
            marginTop: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('./assets/images/icons/pen.png')}
            resizeMode="contain"
            style={{ height: 25, width: 25, marginRight: 5 }}></Image>
          <Text style={styles.abcSchool}>Grade {user != null ? user.grade : ""}</Text>
        </View>
        <View
          style={[
            styles.rect2,
            {
              padding: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row'
            },
          ]}>
          <Image
            source={require('./assets/images/icons/star.png')}
            resizeMode="contain"
            style={{ height: 50, width: 50 }}></Image>
          <Text style={[styles.abcSchool, { fontFamily: 'Poppins-Regular', marginLeft: 10 }]}>Swag Points</Text>
          <Text style={[styles.abcSchool, { color: 'gray', fontFamily: 'Poppins-Regular', marginLeft: 15, marginRight: 15 }]}>|</Text>
          <View>
            <Text style={[styles.swagPoints, { fontFamily: 'Poppins-Bold', textAlign: 'center', color: 'black' }]}>{user != null ? user.swagpoints : "0"}</Text>
            <Text style={[styles.points, { textAlign: 'center' }]}>Points</Text>
          </View>
          {/* <EntypoIcon name="colours" style={styles.icon}></EntypoIcon> */}
        </View>
        <TouchableOpacity
          onPress={() =>  props.navigation.navigate("EditProfile")}
          style={[styles.button1, { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
          <Image
            source={require('./assets/images/icons/editprofile.png')}
            resizeMode="contain"
            style={{ height: 35, width: 35, marginRight: 10 }}></Image>
          <Text style={styles.editProfile}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Logout()}
          style={[styles.button1, { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#FB4F4F' }]}>
          <Image
            source={require('./assets/images/icons/lgout.png')}
            resizeMode="contain"
            style={{ height: 35, width: 35, marginRight: 10 }}></Image>
          <Text style={styles.editProfile}>Log Out</Text>
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
    borderColor: '#66C9DD',
    borderWidth: 0.8
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
    marginTop: 20,
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

export default Profile;

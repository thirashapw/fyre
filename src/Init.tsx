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
import Icon from 'react-native-vector-icons/AntDesign';
import EndPoint from './configs/EndPoint';
import Toast from 'react-native-toast-message';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Progress from 'react-native-progress';

type Props = {
  navigation: any;
};

const Init = (props: Props) => {

  const showToast = (title, msg, type = 'error') => {
    Toast.show({
      type: type,
      text1: title,
      text2: msg
    });
  }

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    CheckUser();
  },[])

  const CheckUser = async () => {

    const requestHeaders: HeadersInit_ = new Headers();
    requestHeaders.set('Content-Type', 'application/json');
    requestHeaders.set('Accept', 'application/json');

    const userFirc = await AsyncStorage.getItem('@userfirc');

    if (userFirc != null) {
      console.log(userFirc)
      await fetch(`${EndPoint}/getuserdata.php?uid=${userFirc}`, {
        method: 'GET',
        headers: requestHeaders,
      }).then((response) => response.json())
        .then(async (responseJson) => {
          if (responseJson.uid != 0) {
            console.log("fdfds",responseJson)
            setLoading(false);
            setTimeout(() => {
              props.navigation.navigate("MainTabs");
            }, 1500);
            
          } else {
            showToast("Session Expired", responseJson.msg)
            props.navigation.navigate("Login");
          }
          setLoading(false);
        });
    } else {
      props.navigation.navigate("Login");
    }
  }


  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/images/logonly.png')}
        resizeMode="contain"
        style={{ width: 100, height: 100 }}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  firstName: {
    top: 228,
    left: 1,
    position: 'absolute',
    fontFamily: 'helvetica-regular',
    color: '#121212',
  },
  image: {
    top: 0,
    width: '100%',
    height: 247,
    position: 'absolute',
    left: 0,
  },
  firstNameStack: {
    width: '100%',
    height: 247,
    marginTop: 42,
    marginLeft: 17,
  },
  placeholder: {
    color: '#121212',
    height: 47,
    backgroundColor: 'rgba(247,247,247,1)',
    borderRadius: 5,
    marginTop: 7,
    marginLeft: 18,
    marginRight: 15,
  },
  lastName: {
    color: '#121212',
    marginTop: 15,
    marginLeft: 18,
  },
  placeholder1: {
    color: '#121212',
    height: 47,
    backgroundColor: 'rgba(247,247,247,1)',
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 18,
    marginRight: 15,
  },
  emailAddress: {
    fontFamily: 'Poppins-Regular',
    color: '#121212',
    marginTop: 19,
    marginLeft: 18,
  },
  placeholder2: {
    color: '#121212',
    height: 47,
    backgroundColor: 'rgba(247,247,247,1)',
    borderRadius: 5,
    marginTop: 8,
    marginLeft: 18,
    marginRight: 15,
  },
  password: {
    fontFamily: 'Poppins-Regular',
    color: '#121212',
    marginTop: 16,
    marginLeft: 18,
  },
  placeholder3: {
    color: '#121212',
    height: 47,
    backgroundColor: 'rgba(247,247,247,1)',
    borderRadius: 5,
    marginTop: 9,
    marginLeft: 18,
    marginRight: 15,
  },
  confirmPassword: {
    color: '#121212',
    marginTop: 12,
    marginLeft: 18,
  },
  placeholder4: {
    color: '#121212',
    height: 47,
    backgroundColor: 'rgba(247,247,247,1)',
    borderRadius: 5,
    marginTop: 9,
    marginLeft: 18,
    marginRight: 15,
  },
  button: {
    width: '92%',
    height: 50,
    backgroundColor: 'rgba(11,199,199,1)',
    borderRadius: 12,
    // shadowColor: "rgba(0,0,0,1)",
    // shadowOffset: {
    //   width: 3,
    //   height: 3
    // },
    // elevation: 30,
    shadowOpacity: 0.28,
    shadowRadius: 10,
    flexDirection: 'row',
    marginTop: 14,
    marginLeft: 18,
  },
  getStarted: {
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
    marginTop: 11,
    width: '100%',
  },
  icon: {
    color: 'white',
    fontSize: 40,
    height: 43,
    width: 40,
    marginLeft: 182,
  },
  getStartedRow: {
    height: 43,
    flexDirection: 'row',
    flex: 1,
    marginRight: 9,
    marginLeft: 19,
    marginTop: 4,
  },
});

export default Init;

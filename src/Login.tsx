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

type Props = {
  navigation: any;
};

const Login = (props: Props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const showToast = (title, msg, type = 'error') => {
    Toast.show({
      type: type,
      text1: title,
      text2: msg
    });
  }
  

  const LoginUser = async () => {
    if (email.trim() != "" || password.trim() != "") {
      const requestHeaders: HeadersInit_ = new Headers();
      requestHeaders.set('Content-Type', 'application/json');
      requestHeaders.set('Accept', 'application/json');
      setLoading(true);
      await fetch(`${EndPoint}/login.php`, {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify({
          "email": email,
          "password": password,
        })
      }).then((response) => response.json())
        .then(async (responseJson) => {
          if (responseJson.uid != 0) {
            await AsyncStorage.setItem("@userfirc", JSON.stringify(responseJson.uid))
            // const userFirc = await AsyncStorage.getItem('@userfirc');
            // console.log(responseJson, "registered", userFirc)
            showToast("Login Successful!", "", 'success');
            props.navigation.navigate("MainTabs");
            setLoading(false);
          } else {
            showToast("Login Failed!", responseJson.msg)
          }
          setLoading(false);
        });
    }else{
      console.log("Please fill all the fields!");
      showToast("Login Failed!", "Please fill all the fields!")
      setLoading(false);
    }
  }


  return (
    <ScrollView style={styles.container}>
       <Spinner
          visible={loading}
          textContent={'Please wait...'}
          textStyle={{ color: 'white', width: 200, textAlign: 'center' }}
        />
      <View style={styles.firstNameStack}>
        <Image
          source={require('./assets/images/fyre.png')}
          resizeMode="contain"
          style={styles.image}></Image>
      </View>
      <Text style={styles.emailAddress}>Email Address</Text>
      <TextInput
        placeholder="Enter your email address"
        keyboardType="email-address"
        placeholderTextColor={'gray'} onChangeText={(text) => setEmail(text)}
        style={styles.placeholder2}></TextInput>
      <Text style={styles.password}>Password</Text>
      <TextInput
        placeholder="Enter new password"
        placeholderTextColor={'gray'} onChangeText={(text) => setPassword(text)}
        style={styles.placeholder3}></TextInput>
      <TouchableOpacity
      onPress={() => LoginUser()}
        style={styles.button}>
        <View style={styles.getStartedRow}>
          <Text style={styles.getStarted}>Login</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
        <Text style={{ textAlign: 'center', marginTop: 10, color: 'black' }}>Don't have an account?</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    backgroundColor: '#ffffff',
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

export default Login;

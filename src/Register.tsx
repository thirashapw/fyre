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
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EndPoint from './configs/EndPoint';
import Toast from 'react-native-toast-message';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  navigation: any;
};





const Register = (props: Props) => {

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const showToast = (title, msg, type = 'error') => {
    Toast.show({
      type: type,
      text1: title,
      text2: msg
    });
  }



  const RegisterUser = async () => {

    if (fName.trim() != "" || lName.trim() != "" || email.trim() != "" || password.trim() != "" || confirm.trim() != "") {
      if (password == confirm) {
        const requestHeaders: HeadersInit_ = new Headers();
        requestHeaders.set('Content-Type', 'application/json');
        requestHeaders.set('Accept', 'application/json');
        setLoading(true);
        await fetch(`${EndPoint}/register.php`, {
          method: 'POST',
          headers: requestHeaders,
          body: JSON.stringify({
            "fname": fName,
            "lname": lName,
            "email": email,
            "password": password,
            "confirm": confirm,
          })
        }).then((response) => response.json())
          .then(async (responseJson) => {
            if(responseJson.uid != 0){
              await AsyncStorage.setItem("@userfirc", JSON.stringify(responseJson.uid))
              // const userFirc = await AsyncStorage.getItem('@userfirc');
              // console.log(responseJson, "registered", userFirc)
              showToast("Registration Successful!", "", 'success');
              props.navigation.navigate("MainTabs");
              setLoading(false);
            }else{
              showToast("Registration Failed!", responseJson.msg)
            }
            setLoading(false);
          });
      } else {
        console.log(password, confirm)
        console.log("Password does not matched!");
        showToast("Registration Failed!", "Password does not matched!")
        setLoading(false);
      }

    } else {
      console.log("Please fill all the fields!");
      showToast("Registration Failed!", "Please fill all the fields!")
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
      <View style={{ marginLeft: 18, marginBottom: 10 }}>
        <View style={styles.firstNameStack}>
          <Text style={styles.firstName}>First Name</Text>
          <Image
            source={require('./assets/images/fyre.png')}
            resizeMode="contain"
            style={styles.image}></Image>
        </View>
        <TextInput
          placeholder="Enter your first name"
          placeholderTextColor={'gray'}
          style={styles.placeholder} onChangeText={(text) => setFName(text)}></TextInput>
        <Text style={styles.lastName}>Last Name</Text>
        <TextInput
          placeholder="Enter your last name"
          placeholderTextColor={'gray'}
          style={styles.placeholder1} onChangeText={(text) => setLName(text)}></TextInput>
        <Text style={styles.emailAddress}>Email Address</Text>
        <TextInput
          placeholder="Enter your email address"
          keyboardType="email-address"
          placeholderTextColor={'gray'}
          style={styles.placeholder2} onChangeText={(text) => setEmail(text)}></TextInput>
        <Text style={styles.password}>Password</Text>
        <TextInput
          placeholder="Enter new password"
          placeholderTextColor={'gray'}
          style={styles.placeholder3} onChangeText={(text) => setPassword(text)}></TextInput>
        <Text style={styles.confirmPassword}>Confirm Password</Text>
        <TextInput
          placeholder="Enter password again"
          placeholderTextColor={'gray'}
          style={styles.placeholder4} onChangeText={(text) => setConfirm(text)}></TextInput>
        <TouchableOpacity
          onPress={() => RegisterUser()}
          style={styles.button}>
          <View style={styles.getStartedRow}>
            <Text style={styles.getStarted}>Get Started</Text>
            {/* <Icon name="done" style={styles.icon}></Icon> */}
          </View>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    width: 341,
    height: 247,
    position: 'absolute',
    left: 0,
  },
  firstNameStack: {
    width: 341,
    height: 247,
    marginTop: 42,
  },
  placeholder: {
    fontFamily: 'Poppins-Regular',
    color: '#121212',
    height: 47,
    backgroundColor: 'rgba(247,247,247,1)',
    borderRadius: 5,
    marginTop: 7,
    marginRight: 15,
  },
  lastName: {
    fontFamily: 'Poppins-Regular',
    color: '#121212',
    marginTop: 15,

  },
  placeholder1: {
    fontFamily: 'Poppins-Regular',
    color: '#121212',
    height: 47,
    backgroundColor: 'rgba(247,247,247,1)',
    borderRadius: 5,
    marginTop: 10,

    marginRight: 15,
  },
  emailAddress: {
    fontFamily: 'Poppins-Regular',
    color: '#121212',
    marginTop: 19,

  },
  placeholder2: {
    fontFamily: 'Poppins-Regular',
    color: '#121212',
    height: 47,
    backgroundColor: 'rgba(247,247,247,1)',
    borderRadius: 5,
    marginTop: 8,

    marginRight: 15,
  },
  password: {
    fontFamily: 'Poppins-Regular',
    color: '#121212',
    marginTop: 16,

  },
  placeholder3: {
    fontFamily: 'Poppins-Regular',
    color: '#121212',
    height: 47,
    backgroundColor: 'rgba(247,247,247,1)',
    borderRadius: 5,
    marginTop: 9,

    marginRight: 15,
  },
  confirmPassword: {
    fontFamily: 'Poppins-Regular',
    color: '#121212',
    marginTop: 12,
  },
  placeholder4: {
    fontFamily: 'Poppins-Regular',
    color: '#121212',
    height: 47,
    backgroundColor: 'rgba(247,247,247,1)',
    borderRadius: 5,
    marginTop: 9,
    marginRight: 15,
  },
  button: {
    width: "96%",
    height: 50,
    backgroundColor: 'rgba(11,199,199,1)',
    borderRadius: 12,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 30,
    shadowOpacity: 0.28,
    shadowRadius: 10,
    flexDirection: 'row',
    marginTop: 14,
    marginBottom: 50
  },
  getStarted: {
    fontFamily: 'Poppins-Regular',
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
    marginTop: 11,
    marginLeft: 18
  },
  icon: {
    color: 'rgba(255,255,255,1)',
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
    marginTop: 4,
  },
});

export default Register;

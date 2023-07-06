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
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CupertinoFooter2 from './components/CupertinoFooter2';

import Toast from 'react-native-toast-message';


type Props = {
  navigation: any;
};

const Polls = (props: Props) => {


  const showToast = (title, msg, type = 'error') => {
    Toast.show({
      type: type,
      text1: title,
      text2: msg
    });
  }


  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: 'center', marginBottom: 50, marginHorizontal: 10 }}>
        <Image
          source={require('./assets/images/fyrepolls.png')}
          resizeMode="contain"
          style={styles.image}></Image>
        <Image
          source={require('./assets/images/smileemoji.png')}
          resizeMode="contain"
          style={[styles.image, { height: 150 }]}></Image>
        <Text style={[styles.abcSchool, { textAlign: 'center', fontSize: 22 }]}>
          Start Polls and Earn Swag Points Easily
        </Text>
        <View
          style={{
            backgroundColor: '#E1F8FE',
            width: '85%',
            height: 70,
            borderRadius: 10,
            marginTop: 20,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',

          }}>
          <View
            style={{
              height: 43,
              width: 43,
              backgroundColor: '#1CBDF3',
              borderRadius: 10,

              alignItems: 'center', display: 'flex', justifyContent: 'center'
            }}>
            <MaterialCommunityIcons name="gift" color={'white'} size={35} />
          </View>
          <Text style={[styles.abcSchool, { marginLeft: 10 }]}>Winner Gets 100 Swag Points</Text>
        </View>


        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 15 }}>
          <Text style={styles.abcSchool}>Check who's leading</Text>
          <Text style={[styles.abcSchool, { color: 'gray' }]}>Scores</Text>
        </View>
        <TouchableOpacity onPress={() => showToast("Server Error", "Sorry! user details are locked at the moment")} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 15, alignItems: 'center' }}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('./assets/images/personimg.jpg')}
              resizeMode="contain"
              style={{ height: 75, width: 75, borderRadius: 100, borderWidth: 1, marginRight: 10 }}></Image>
            <Text style={[styles.abcSchool]}>Albert Romans</Text>
          </View>
          <Text style={{ backgroundColor: '#E0F8FF', borderRadius: 15, color: '#33B9D8', width: 50, height: 25, textAlign: 'center' }}>2000</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showToast("Server Error", "Sorry! user details are locked at the moment")} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 15, alignItems: 'center' }}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('./assets/images/personimg.jpg')}
              resizeMode="contain"
              style={{ height: 75, width: 75, borderRadius: 100, borderWidth: 1, marginRight: 10 }}></Image>
            <Text style={[styles.abcSchool]}>Albert Romans</Text>
          </View>
          <Text style={{ backgroundColor: '#E0F8FF', borderRadius: 15, color: '#33B9D8', width: 50, height: 25, textAlign: 'center' }}>2000</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showToast("Server Error", "Sorry! user details are locked at the moment")} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 15, alignItems: 'center' }}>
          <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('./assets/images/personimg.jpg')}
              resizeMode="contain"
              style={{ height: 75, width: 75, borderRadius: 100, borderWidth: 1, marginRight: 10 }}></Image>
            <Text style={[styles.abcSchool]}>Albert Romans</Text>
          </View>
          <Text style={{ backgroundColor: '#E0F8FF', borderRadius: 15, color: '#33B9D8', width: 50, height: 25, textAlign: 'center' }}>2000</Text>
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

export default Polls;

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

const Gossip = (props: Props) => {

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
          source={require('./assets/images/gossip.png')}
          resizeMode="contain"
          style={[styles.image, { height: 150, marginTop: 30, marginBottom: 15 }]}></Image>
        <Text style={[styles.abcSchool, { textAlign: 'center', fontSize: 32,  }]}>
          Enter <Text style={{ color: '#4CCF30' }}>Grade 9's</Text> Gossip Lounge
        </Text>

        <TouchableOpacity
          onPress={() => showToast("Server Error", "Sorry! This option not available right now")}
          style={[styles.button1, { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#33D1F3' }]}>

          <Text style={styles.editProfile}>Start Gossiping Anonymously</Text>
        </TouchableOpacity>
        <Text style={[styles.abcSchool, { marginTop: 25 }]}>About the Gossip Lounge</Text>

        <View style={{ backgroundColor: '#EBFAFF', width: '100%', height: 150, padding: 10, borderRadius: 10, marginTop: 20 }}>
          <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 15 }}>🔘You can say anything in this chat anunymously</Text>
          <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 15, marginTop: 10 }}>🔘The person with the  highest <Text style={{ color: '#50D047' }}>Swag,</Text> can pin topics</Text>
        </View>

        <View style={{ display: 'flex', justifyContent: 'center', gap: 20, flexDirection: 'row' }}>

          <TouchableOpacity
            onPress={() => showToast("Server Error", "Sorry! Internal server error")}
            style={[styles.button1, { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#33D1F3', width: 170 }]}>

            <Text style={styles.editProfile}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => showToast("Server Error", "Sorry! Internal server error")}
            style={[styles.button1, { display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#33D1F3', width: 170 }]}>

            <Text style={styles.editProfile}>Learn More</Text>
          </TouchableOpacity>
        </View>

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
    borderRadius: 10,

    marginTop: 49,
  },
  editProfile: {
    fontFamily: 'Poppins-Bold',
    color: 'rgba(255,255,255,1)',
    fontSize: 16,
  },
  cupertinoFooter2: {
    height: 49,
    width: 375,
    marginTop: 67,
  },
});

export default Gossip;

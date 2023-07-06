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
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CupertinoFooter2 from './components/CupertinoFooter2';
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat'
import { Chat as Chater, MessageType } from '@flyerhq/react-native-chat-ui'

import Toast from 'react-native-toast-message';
import { SafeAreaProvider } from 'react-native-safe-area-context'



type Props = {
  navigation: any;
};

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.floor(Math.random() * 16)
    const v = c === 'x' ? r : (r % 4) + 8
    return v.toString(16)
  })
}

const Chat = (props: Props) => {

  const user = { id: '06c33e8b-e835-4736-80f4-63f44b66666c', firstName: 'Michael' }
  const [messages, setMessages] = useState<MessageType.Any[]>([
    {
      author: { id: '06c33e8b-e835-4736-80f4-63f44b66666d' },
      id: "msg8",
      status: 'delivered' ,
      createdAt: 1683827496,
      type: 'text',
      text: 'You are welcome',
    },
    {
      author: user,
      id: "msg7",
      createdAt: 1683827496,
      status: 'seen' ,
      type: 'text',
      text: 'Its working. Thanks man for helping with that'
    },
    {
      author: user,
      id: "msg6",
      status: 'seen' ,
      type: 'text',
      text: 'Perfect👌'
    },
    {
      author: { id: '06c33e8b-e835-4736-80f4-63f44b66666d' },
      id: "msg5",
      status: 'delivered' ,
      createdAt: 1683827496,
      type: 'text',
      text: 'Its easy to use profile updating window right bottom in the app. Lets give it a try',
    },
    {
      author: user,
      id: "msg4",
      status: 'seen' ,
      type: 'text',
      text: 'How can i change that name on Fyre?'
    },
    {
      author: user,
      id: "msg3",
      status: 'seen' ,
      type: 'text',
      text: 'Sure for Fyre Chat'
    },
    {
      author: { id: '06c33e8b-e835-4736-80f4-63f44b66666d' },
      id: "msg2",
      status: 'delivered' ,
      type: 'text',
      text: 'Follow the instructions there to install it. After it is done we'
    },
    {
      author: user,
      id: "msg1",
      status: 'delivered' ,
      type: 'text',
      text: 'Hello World'
    },
  ]);
  const showToast = (title, msg, type = 'error') => {
    Toast.show({
      type: type,
      text1: title,
      text2: msg
    });
  }

  const addMessage = (message: MessageType.Any) => {
    setMessages([message, ...messages])
  }

  const handleSendPress = (message: MessageType.PartialText) => {
    const textMessage: MessageType.Text = {
      author: user,
      createdAt: Date.now(),
      id: uuidv4(),
      text: message.text,
      type: 'text',
    }
    addMessage(textMessage)
  }


  return (

    <SafeAreaProvider>
      <Chater
        messages={messages}
        onSendPress={handleSendPress}
        user={user}
        
        showUserNames={true}
      />
    </SafeAreaProvider>

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

export default Chat;

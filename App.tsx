import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
// Routing imports
import Login from './src/Login';
import Register from './src/Register';
import Profile from './src/Profile';
import Polls from './src/Polls';
import NewFriend from './src/NewFriend';
import MainTabs from './MainTabs';
import Init from './src/Init';
import EditProfile from './src/EditProfile';
import Chat from './src/Chat';
import {
  Image,
  Text,
  View
} from 'react-native';
import SearchFriends from './src/SearchFriends';


const Stack = createNativeStackNavigator();
function App(): JSX.Element {

  function LogoTitle() {
    return (
      <>
        <Image
          style={{ width: 50, height: 50, borderRadius: 100 }}
          source={require("./src/assets/images/useround.png")}

        />
      
          <Text numberOfLines={1} style={{ color: 'black', marginLeft: 15, width: 100 }}>Michael David</Text>
     
      </>
    );
  }
  function SearchFriendsTitle() {
    return (
      <>
        {/* <Image
          style={{ width: 50, height: 50, borderRadius: 100 }}
          source={require("./src/assets/images/useround.png")}

        /> */}
      
          <Text numberOfLines={1} style={{ color: 'black', width: 100 }}>Nearby Friends</Text>
     
      </>
    );
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Init" component={Init} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
        <Stack.Screen options={{ headerShown: false }} name="MainTabs" component={MainTabs} />
        <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
        <Stack.Screen options={{ headerShown: false }} name="Polls" component={Polls} />
        <Stack.Screen options={{ headerShown: false }} name="NewFriend" component={NewFriend} />
        <Stack.Screen options={{ headerShown: false }} name="EditProfile" component={EditProfile} />
        <Stack.Screen options={{ headerTitle: (props) => <LogoTitle {...props} /> }} name="Chat" component={Chat} />
        <Stack.Screen options={{ headerTitle: (props) => <SearchFriendsTitle {...props} /> }} name="SearchFriends" component={SearchFriends} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}

export default App;

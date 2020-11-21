import React from 'react';
import {Image, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import screens
import Welcome from './Welcome';
import Register from './Register';
import ChatList from './ChatList';
import ChatDetail from './ChatDetail';
import HeaderChatDetail from '../components/HeaderChatDetail';
import ProfileFriend from './ProfileFriend';
import Setting from './Setting';

import Icon from 'react-native-vector-icons/FontAwesome';
import img from '../assets/images/mila.jpeg';

const Stack = createStackNavigator();

const imgBack = () => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Icon name="angel-left" size={10} color="white"/>
      <Image source={img} style={{width: 50, height: 50, borderRadius: 100}} />
    </View>
  );
};

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChatList"
          component={ChatList}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ChatDetail"
          component={ChatDetail}
          options={{
            title: '',
            // headerTitle:  props => <HeaderChatDetail {...props} />,
            headerStyle: {
              backgroundColor: '#004d40',
            },
            headerShown: false,
            // headerBackImage: () => (
            // <View style={{flexDirection: 'row', alignItems: 'center', borderWidth: 1, width: 90, justifyContent: 'space-between'}}>
            //   <Icon name="chevron-left" size={25} color="white" />

            // </View>
            // ),
            // headerBackTitle: <Image source={img} style={{width: 50, height: 50, borderRadius: 100}} />,
            // headerBackTitleVisible: true,
          }}
        />
        <Stack.Screen
          name="ProfileFriend"
          component={ProfileFriend}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: '#004d40',
            },
          }}
        />
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{
            title: 'Setelan',
            headerStyle: {
              backgroundColor: '#004d40',
            },
            headerBackTitleStyle: {
              color: 'white',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;

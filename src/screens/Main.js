import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import screens
import Welcome from './Welcome';
import Register from './Register';
import ChatList from './ChatList';
import ChatDetail from './ChatDetail';
import HeaderChatDetail from '../components/HeaderChatDetail';

const Stack = createStackNavigator();

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
            headerTitle: props => <HeaderChatDetail {...props} />,
            headerStyle: {
              backgroundColor: '#004d40',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;

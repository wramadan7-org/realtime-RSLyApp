import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import screens
import Welcome from './Welcome';
import Register from './Register';
import ChatList from './ChatList';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;

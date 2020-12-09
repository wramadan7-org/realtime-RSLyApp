import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

// import screens
import Welcome from './Welcome';
import Register from './Register';
import ChatList from './ChatList';
import ChatDetail from './ChatDetail';
// import HeaderChatDetail from '../components/HeaderChatDetail';
import ProfileFriend from './ProfileFriend';
import Setting from './Setting';
import Profile from './Profile';
import PhotoProfile from './PhotoProfile';
import PhotoProfileFriend from './PhotoProfileFriend';
import ChooseFriend from './ChooseFriend';
import Account from './Account';
import InfoChangeNumber from './InfoChangeNumber';

import Icon from 'react-native-vector-icons/FontAwesome';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

// const imgBack = () => {
//   return (
//     <View style={{flexDirection: 'row'}}>
//       <Icon name="angel-left" size={10} color="white"/>
//       <Image source={img} style={{width: 50, height: 50, borderRadius: 100}} />
//     </View>
//   );
// };

function Main({route}) {
  const loginState = useSelector((state) => state.login);
  const profileState = useSelector((state) => state.myProfile);
  // console.log('route main', route);
  const {data} = profileState;
  // console.log(loginState);
  const {isLogin, token} = loginState;
  // console.log('loginlgngnggn');

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      {!token ? (
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
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
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
              headerShown: false,
              // title: `${data.name ? data.name : data.phone}`,
              // headerStyle: {
              //   backgroundColor: '#004d40',
              // },
              // headerTitleStyle: {
              //   color: 'white',
              // },
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
              headerTitleStyle: {
                color: 'white',
              },
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              // headerShown: false,
              headerStyle: {
                backgroundColor: '#004d40',
              },
              headerTitleStyle: {
                color: 'white',
              },
            }}
          />
          <Stack.Screen
            name="PhotoProfile"
            component={PhotoProfile}
            options={{
              headerShown: false,
              // title: `${data.name ? data.name : data.phone}`,
              // headerStyle: {
              //   backgroundColor: 'black',
              // },
              // headerTitleStyle: {
              //   color: 'white',
              // },
            }}
          />
          <Stack.Screen
            name="PhotoProfileFriend"
            component={PhotoProfileFriend}
            options={{
              headerShown: false,
              // title: `${data.name ? data.name : data.phone}`,
              // headerStyle: {
              //   backgroundColor: 'black',
              // },
              // headerTitleStyle: {
              //   color: 'white',
              // },
            }}
          />
          <Stack.Screen
            name="ChooseFriend"
            component={ChooseFriend}
            options={{
              headerStyle: {
                backgroundColor: '#004d40',
                height: 70,
                elevation: 2,
              },
              headerTitleStyle: {
                color: 'white',
              },
              headerTitle: () => (
                <>
                  <Text style={styles.title}>Pilih kontak</Text>
                  <Text style={styles.subtitle}>155 kontak</Text>
                </>
              ),
              headerRight: () => (
                <>
                  <View style={styles.viewIcon}>
                    <TouchableOpacity style={styles.btnIcon}>
                      <Icon name="search" size={20} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnIcon}>
                      <Icon name="ellipsis-v" size={20} color="white" />
                    </TouchableOpacity>
                  </View>
                </>
              ),
            }}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{
              title: 'Account',
              headerTitleStyle: {
                color: 'white',
              },
              headerStyle: {
                backgroundColor: '#004d40',
              },
            }}
          />
          <Stack.Screen
            name="InfoChangeNumber"
            component={InfoChangeNumber}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
  },
  subtitle: {
    color: 'white',
    fontSize: 13,
  },
  viewIcon: {
    flexDirection: 'row',
    // borderWidth: 1,
    width: 100,
    // alignItems: 'center',
  },
  btnIcon: {
    flex: 1,
    // borderWidth: 1,
    alignItems: 'center',
  },
});

export default Main;

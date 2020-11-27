import React from 'react';
import {
   View, Text, Image, StyleSheet,
} from 'react-native';
import defaultProfile from '../assets/images/default.jpg';
import profileAction from '../redux/actions/profile';

import {APP_URL} from '@env';

import {useSelector, useDispatch} from 'react-redux';

import Header from '../components/HeaderPhoto';

function PhotoProfileFriend({route}) {

   const {token} = useSelector(state => state.login);
   const profileState = useSelector(state => state.profileFriend);
   const {isLoading, isError, data, alertMsg} = profileState;
   const dispatch = useDispatch();

   React.useEffect(() => {
      dispatch(profileAction.friendProfile(token, route.param));
   }, []);
   console.log('asdjkawbakwdbawkdbjaw', data.name);

   return (
      <>
         <Header friend={data.name} friendPhone={data.phone} />
         <View style={styles.parent}>
            <View style={styles.viewPhoto}>
               <Image style={styles.photo} source={data.profile ? {uri: `${APP_URL}${data.profile}`} : defaultProfile} />
            </View>
         </View>
      </>
   );
}

const styles = StyleSheet.create({
   parent: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
   },
   viewPhoto: {
      width: '100%',
      height: 400,
      alignItems: 'center',
      justifyContent: 'center',
   },
   photo: {
      width: '100%',
      height: 400,
      alignSelf: 'center',
      justifyContent: 'center',
      resizeMode: 'cover',
   },
});

export default PhotoProfileFriend;

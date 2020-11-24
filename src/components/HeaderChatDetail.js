import React, {useEffect} from 'react';
import {
   Text, View, TouchableOpacity, StyleSheet, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialIcons';

import img from '../assets/images/default.jpg';

import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import profileAction from '../redux/actions/profile';

import {APP_URL} from '@env';

const HeaderChatDetail = ({friend}) => {
   const dispatch = useDispatch();
   const navigation = useNavigation();
   const profileState = useSelector(state => state.profileFriend);
   const {token} = useSelector(state => state.login);
   const {isLoading, isError, success, data, alertMsg} = profileState;
   console.log('PARAMS HEADER', friend);

   useEffect(() => {
      console.log(dispatch(profileAction.friendProfile(token,friend)));
   }, [friend]);

   return (
      <>
         <View style={styles.parent}>
            {!isLoading && !isError && data && (
               <>
                  <View style={styles.left}>
                     <TouchableOpacity style={styles.btnBack} onPress={() => navigation.navigate('ChatList')}>
                        <Material name="arrow-back" size={25} color="white" />
                        <Image source={data.profile === null ? img : {uri: `${APP_URL}${data.profile}`}} style={styles.photoProfile} />
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.btnProfile} onPress={() => navigation.navigate('ProfileFriend', friend)}>
                        <Text style={styles.txtName}>{data.name}</Text>
                     </TouchableOpacity>
                  </View>

                  <View style={styles.viewIcon}>
                     <TouchableOpacity onPress={() => console.log('OHH')}>
                        <Material style={styles.icon} name="videocam" size={25} color="white" />
                     </TouchableOpacity>
                     <TouchableOpacity>
                        <Icon style={styles.icon} name="phone" size={25} color="white" />
                     </TouchableOpacity>
                     <TouchableOpacity>
                        <Icon style={styles.icon} name="ellipsis-v" size={20} color="white" />
                     </TouchableOpacity>
                  </View>
               </>
            )}
         </View>
      </>
   );
};

const styles = StyleSheet.create({
   parent: {
      flexDirection: 'row',
      // flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#004d40',
      height: 70,
   },
   left: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 2,
      marginRight: 40,
      // borderWidth: 1,
   },
   btnProfile: {
      // borderWidth: 1,
      flex: 1,
      height: 70,
      justifyContent: 'center',
   },
   txtName: {
      fontWeight: '900',
      fontSize: 19,
      color: 'white',
   },
   viewIcon: {
      // borderWidth: 1,
      flexDirection: 'row',
      marginRight: 10,
      // alignItems: 'flex-end',
      // width: 100,
      flex: 1,
      justifyContent: 'space-between',
      // flex: 1,
   },
   icon: {
      // borderWidth: 1,
      // alignSelf: 'flex-end',

   },
   btnBack: {
      alignItems: 'center',
      flexDirection: 'row',
      marginRight: 10,
   },
   photoProfile: {
      width: 50,
      height: 50,
      borderRadius: 100,
   },
});

export default HeaderChatDetail;

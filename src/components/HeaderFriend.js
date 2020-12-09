import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialIcons';

import img from '../assets/images/default.jpg';

import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import profileAction from '../redux/actions/profile';

import {APP_URL} from '@env';

const HeaderFriend = ({friend}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const profileState = useSelector((state) => state.profileFriend);
  const {token} = useSelector((state) => state.login);
  const {isLoading, isError, success, data, alertMsg} = profileState;
  console.log('PARAMS HEADER', friend);

  useEffect(() => {
    console.log(dispatch(profileAction.friendProfile(token, friend)));
  }, [friend]);

  return (
    <>
      <View style={styles.parent}>
        {!isLoading && !isError && data && (
          <>
            <View style={styles.left}>
              <TouchableOpacity
                style={styles.btnBack}
                onPress={() => navigation.navigate('ChatDetail')}>
                <Material name="arrow-back" size={25} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnProfile}>
                <Text style={styles.txtName}>
                  {data.name === null ? data.phone : data.name}
                </Text>
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
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
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
  btnBack: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 10,
  },
});

export default HeaderFriend;

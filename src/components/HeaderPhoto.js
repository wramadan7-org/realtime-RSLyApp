import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialIcons';

import img from '../assets/images/default.jpg';

import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import profileAction from '../redux/actions/profile';

import {APP_URL} from '@env';

const HeaderPhoto = ({friend, friendPhone, myName, myPhone}) => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.parent}>
        {myName ? (
          <View style={styles.left}>
            <TouchableOpacity
              style={styles.btnBack}
              onPress={() => navigation.navigate('Profile')}>
              <Material name="arrow-back" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnProfile}>
              <Text style={styles.txtName}>
                {myName === null ? myPhone : myName}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.left}>
            <TouchableOpacity
              style={styles.btnBack}
              onPress={() => navigation.navigate('ProfileFriend')}>
              <Material name="arrow-back" size={25} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnProfile}>
              <Text style={styles.txtName}>
                {friend === null ? friendPhone : friend}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {/* {myName && myPhone && (
          <>
            <View style={styles.left}>
              <TouchableOpacity
                style={styles.btnBack}
                onPress={() => navigation.navigate('ProfileFriend')}>
                <Material name="arrow-back" size={25} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnProfile}>
                <Text style={styles.txtName}>
                  {myName === null ? myPhone : myName}
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}

        {friend && friendPhone && (
          <>
            <View style={styles.left}>
              <TouchableOpacity
                style={styles.btnBack}
                onPress={() => navigation.navigate('ChatList')}>
                <Material name="arrow-back" size={25} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnProfile}>
                <Text style={styles.txtName}>
                  {friend === null ? friendPhone : friend}
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )} */}
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
    backgroundColor: 'black',
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

export default HeaderPhoto;

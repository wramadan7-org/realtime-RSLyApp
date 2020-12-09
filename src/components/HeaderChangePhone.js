import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialIcons';

import {useNavigation} from '@react-navigation/native';

const HeaderChangePhone = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.parent}>
      <View style={styles.left}>
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => navigation.navigate('Profile')}>
          <Material name="arrow-back" size={25} color="white" />
        </TouchableOpacity>

        <View style={styles.title}>
          <Text style={styles.txtName}>Ganti nomor</Text>
        </View>
      </View>
    </View>
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
    marginLeft: 20,
    // borderWidth: 1,
  },
  title: {
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
    marginRight: 20,
  },
});

export default HeaderChangePhone;

import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SettingList from '../screens/SettingList';

import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const [setting, setSetting] = useState(false);

  const navigation = useNavigation();

  return (
    <View style={styles.parent}>
      <View style={styles.viewTop}>
        <View style={styles.viewAppName}>
          <Text style={styles.txtAppName}>RSLy App</Text>
        </View>

        <View style={styles.viewGroupIcon}>
          <View style={styles.groupIcon}>
            <TouchableOpacity>
              <Icon name="search" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
              <Icon name="ellipsis-v" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.viewBottom}>
        <View style={styles.viewIconCamera}>
          <Icon name="camera" size={25} color="grey" />
        </View>

        <View style={styles.viewBtn}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('ChatList')}>
            <Text style={styles.txtBtn}>CHAT</Text>
            <View style={styles.notif}>
              <Text>1</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>STATUS</Text>
            <View style={styles.notifStatus} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.txtBtn}>PANGGILAN</Text>
            <View style={styles.notif}>
              <Text>1</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {setSetting === true && (
        // <View style={{alignSelf: 'flex-end'}}>
        <SettingList />
        // </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    height: 130,
    backgroundColor: '#004d40',
    elevation: 5,
    padding: 10,
  },
  viewTop: {
    flexDirection: 'row',
    // borderWidth: 1,
    height: 50,
    alignItems: 'center',
  },
  viewAppName: {
    // borderWidth: 1,
    flex: 4,
  },
  txtAppName: {
    color: 'white',
    fontSize: 25,
    fontWeight: '900',
  },
  viewGroupIcon: {
    flex: 1,
  },
  groupIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewBottom: {
    // borderWidth: 1,
    marginVertical: 10,
    height: 40,
    // justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  viewIconCamera: {
    width: 30,
  },
  viewBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  btn: {
    flexDirection: 'row',
    width: 110,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  txtBtn: {
    marginRight: 5,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  notif: {
    height: 20,
    width: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 100,
  },
  notifStatus: {
    height: 10,
    width: 10,
    backgroundColor: 'white',
    borderRadius: 100,
  },
});

export default Header;

import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SettingList = () => {
  return (
    <>
      <View style={styles.parent}>
        <TouchableOpacity style={styles.btnSetting}>
          <Text>Grup baru</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSetting}>
          <Text>Siaran baru</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSetting}>
          <Text>RamSLyApp Web</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSetting}>
          <Text>Pesan berbintang</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSetting}>
          <Text>Setelan</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  parent: {
    elevation: 1,
    alignSelf: 'flex-end',
    margin: 10,
    height: 200,
    width: 200,
    position: 'absolute',
    backgroundColor: 'white',
  },
  btnSetting: {
    flex: 1,
    padding: 5,
  },
});

export default SettingList;

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import component
import HeaderChangeNumber from '../components/HeaderChangePhone';

export default function InfoChangeNumber() {
  return (
    <View>
      <HeaderChangeNumber />
      <Text />
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
});

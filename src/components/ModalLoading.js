import React from 'react';
import {Text, Modal, StyleSheet, ActivityIndicator, View} from 'react-native';

const ModalLoading = () => {
  return (
    //  <View style={styles.centerView}>
    <Modal transparent={true}>
      <View style={styles.centerView}>
        <View style={styles.viewIndicator}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      </View>
    </Modal>
    //  </View>
  );
};

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    width: 200,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 200,
    height: 200,
    backgroundColor: 'white',
  },
});

export default ModalLoading;

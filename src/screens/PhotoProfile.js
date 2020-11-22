import React from 'react';
import {
   View, Text, Image, StyleSheet,
} from 'react-native';
import img from '../assets/images/mila.jpeg';

function PhotoProfile() {
   return (
      <View style={styles.parent}>
         <View style={styles.viewPhoto}>
            <Image style={styles.photo} source={img} />
         </View>
      </View>
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

export default PhotoProfile;

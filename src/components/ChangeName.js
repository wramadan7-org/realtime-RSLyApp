import React from 'react';
import {
   View, Text, StyleSheet,
   TouchableOpacity, TextInput,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialIcons';

function ChangeName() {
   return (

         <View style={StyleSheet.parent}>
            <View style={styles.viewName}>
               <Text style={styles.txtTitleName}>
                  Masukkan nama Anda
               </Text>
            </View>

            <View style={styles.grupTxtInput}>
               <View style={styles.viewTxtInput}>
                  <TextInput style={styles.txtInput} placeholder="RAMZZZ" />
                  <Text style={styles.character}>
                     19
                  </Text>
               </View>

               <View style={styles.viewIcon}>
                  <Material name="mood" size={20} color="grey" />
               </View>
            </View>

            <View style={styles.grupBtn}>
               <TouchableOpacity style={styles.btn}>
                  <Text style={styles.txtBtn}>
                     BATAL
                  </Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.btn}>
                  <Text style={styles.txtBtn}>
                     SIMPAN
                  </Text>
               </TouchableOpacity>
            </View>
         </View>
   );
}

const styles = StyleSheet.create({
   parent: {
      padding: 10,
      // flex: 1,
   },
   viewName: {
      height: 50,
   },
   txtTitleName: {
      fontWeight: 'bold',
      fontSize: 16,
      color: 'black',
   },
   grupTxtInput: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   viewTxtInput: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 6,
      justifyContent: 'space-between',
      borderBottomWidth: 2,
      borderBottomColor: '#004d40',
   },
   txtInput: {
    fontSize: 15,
    fontWeight: '900',
    color: 'black',
   },
   character: {
      fontSize: 15,
      color: 'grey',
      marginRight: 20,
   },
   viewIcon: {
      flex: 1,
      alignItems: 'center',
   },
   grupBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      // borderWidth: 1,
      width: 150,
      justifyContent: 'space-between',
      alignSelf: 'flex-end',
      height: 50,
      marginVertical: 25,
      // marginRight: 35,
   },
   btn: {
      flex: 1,
   },
   txtBtn: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#004d40',
   },
});

export default  ChangeName;

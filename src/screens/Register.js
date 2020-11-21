import React, { Component } from 'react';
import {
   Text, View, TouchableOpacity,
   ScrollView, TextInput, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Register extends Component {
   render() {
      return (
         // parent
         <View style={styles.parent}>

            <View style={styles.wrapper}>
               <View style={styles.viewHeader}>
                  <Text style={styles.txtHeader}>
                     Masukkan nomor telepon Anda
                  </Text>
                  <TouchableOpacity style={styles.btnEllipsis}>
                     <Icon name="ellipsis-v" size={20} color="grey" />
                  </TouchableOpacity>
               </View>

               <View style={styles.viewTxtDesc}>
                  <Text style={styles.txtDesc}>
                     RamSLyApp akan mengirim SMS untuk memverifikasi nomor telepon Anda.{' '}
                     <Text style={styles.txtLink}>
                        Berapa nomor saya?
                     </Text>
                  </Text>
               </View>

               <View style={styles.inputGrup}>
                  <TouchableOpacity style={styles.selectCountry}>
                     <Text style={styles.txtCountry}>
                        Indonesia
                     </Text>
                     <Icon name="sort-down" size={20} color="#004d40" style={styles.iconCountry} />
                  </TouchableOpacity>
               </View>

               <View style={styles.inputGrup}>
                  <View style={styles.viewInitialPhone}>
                     <Text style={styles.txtPlush}>+</Text>
                     <TextInput style={styles.txtInitialPhone} value="62" maxLength={3}  />
                  </View>
                  <TextInput style={styles.inputPhone} placeholder="nomor telepon" />
               </View>

               <View style={styles.viewInfo}>
                  <Text style={styles.txtInfo}>
                     Biaya SMS operator telepone mungkin berlaku
                  </Text>
               </View>

            </View>

            {/* footer */}
            <View style={styles.footer}>
               <TouchableOpacity style={styles.btnFooter} onPress={() => this.props.navigation.navigate('ChatList')}>
                  <Text style={styles.txtBtn}>LANJUT</Text>
               </TouchableOpacity>
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   parent: {
      flex: 1,
      padding: 10,
   },
   wrapper: {
      flex: 1,
   },
   viewHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
   },
   txtHeader: {
      flex: 12,
      justifyContent: 'center',
      textAlign: 'center',
      color: 'green',
      fontSize: 18,
      fontWeight: '900',
   },
   btnEllipsis: {
      alignItems: 'center',
   },
   viewTxtDesc: {
      height: 60,
      justifyContent: 'center',
   },
   txtDesc: {
      fontSize: 15,
      lineHeight: 25,
      textAlign: 'center',
   },
   txtLink: {
      color: 'blue',
   },
   inputGrup: {
      // borderWidth: 1,
      height: 50,
      width: 300,
      alignSelf: 'center',
      marginVertical: 10,
      flexDirection: 'row',
   },
   selectCountry: {
      flexDirection: 'row',
      borderBottomColor: '#004d40',
      borderBottomWidth: 1,
      height: 30,
      width: 300,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
   },
   txtCountry: {
      flex: 10,
      textAlign: 'center',
      fontSize: 17,
      // borderWidth: 1,
   },
   iconCountry: {
      flex: 1,
   },
   viewInitialPhone: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#004d40',
      width: 60,
      alignItems: 'center',
      justifyContent: 'space-around',
   },
   txtPlush: {
      color: 'grey',
      fontSize: 20,
   },
   txtInitialPhone: {
      fontSize: 20,
   },
   inputPhone: {
      marginLeft: 10,
      borderBottomWidth: 2,
      borderBottomColor: '#004d40',
      flex: 1,
      fontSize: 19,
   },
   viewInfo: {
      marginVertical: 10,
      alignItems: 'center',
   },
   txtInfo: {
      color: 'grey',
      fontSize: 15,
      fontWeight: '900',
   },

   // footer
   footer: {
      alignItems: 'center',
      height: 50,
   },
   btnFooter: {
      backgroundColor: 'limegreen',
      width: 100,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
   },
   txtBtn: {
      color: 'white',
      fontSize: 15,
   },
});

export default Register;

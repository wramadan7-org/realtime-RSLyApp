import React, { Component } from 'react';
import {
   Text, View, StyleSheet,
   TouchableOpacity, ScrollView,
   Image, Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialIcons';
import img from '../assets/images/mila.jpeg';


class ProfileFriend extends Component {

   constructor(props) {
      super(props);
      this.state = {
         switchMute: false,
      };
   }

   render() {
      console.log(this.props.route.params);
      return (
         <View style={styles.parent}>
            <ScrollView>
               <TouchableOpacity style={styles.viewPhotoProfile} onPress={() => this.props.navigation.navigate('PhotoProfile')}>
                  <Image style={styles.photoProfile} source={img} />
               </TouchableOpacity>

               {/* media */}
               <View style={styles.content}>
                  <TouchableOpacity style={styles.MediaFile}>
                     <Text style={styles.txtTitle}>
                        Media, tautan, dan dokumen
                     </Text>
                     <View style={styles.viewTotalFile}>
                        <Text style={styles.txtTotal}>
                           17
                        </Text>
                        <Icon name="angle-right" size={25} color="grey" />
                     </View>
                  </TouchableOpacity>

                  <ScrollView style={styles.scrollListFile} horizontal>
                     <View style={styles.viewListFile}>
                        <TouchableOpacity style={styles.listFile}>
                           <Image style={styles.file} source={img} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.listFile}>
                           <Image style={styles.file} source={img} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.listFile}>
                           <Image style={styles.file} source={img} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.listFile}>
                           <Image style={styles.file} source={img} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.listFile}>
                           <Image style={styles.file} source={img} />
                        </TouchableOpacity>
                     </View>
                     <TouchableOpacity style={styles.allFile}>
                        <Icon name="angle-right" size={45} color="grey" />
                     </TouchableOpacity>
                  </ScrollView>
               </View>

               <View style={styles.content}>
                  <TouchableOpacity style={styles.btnOptions}>
                     <Text style={styles.desc}>
                        Bisukan notifikasi
                     </Text>
                     <Switch
                        // warna pillnya, jika false maka abuabu, jika betul maka liemgreen
                        trackColor={{false: '#767577', true: 'liemgreen'}}
                        // warna lingkaran jika true maka hijau, jika tidak maka putih
                        thumbColor={this.state.switchMute ? 'green' : '#f4f3f4'}
                        onValueChange={(value) => this.setState({switchMute: value})}
                        value={this.state.switchMute}
                        style={styles.switch}
                     />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.btnOptions}>
                     <Text style={styles.desc}>
                        Notifikasi khusus
                     </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.btnOptions}>
                     <Text style={styles.desc}>
                        Tampilkan media
                     </Text>
                  </TouchableOpacity>
               </View>

               <View style={styles.content}>
                  <TouchableOpacity style={styles.btnEncript}>
                     <View style={styles.viewDesc}>
                        <Text style={styles.desc}>
                           Enkripsi
                        </Text>
                        <Text style={styles.subDesc}>
                           Pesan dan panggilan terenkripsi
                           secara end-to-end. Ketuk untuk memverifikasi,
                        </Text>
                     </View>
                     <Material style={styles.icon} name="lock" size={30} color="#004d40" />
                  </TouchableOpacity>
               </View>

               <View style={styles.content}>
                  <Text style={styles.titleGreen}>
                     Nomor telepone
                  </Text>
                  <TouchableOpacity style={styles.btnNumber}>
                     <View style={styles.viewDesc}>
                        <Text style={styles.desc}>
                           +62 822-570-229-981
                        </Text>
                        <Text style={styles.subDesc}>
                           Ponsel
                        </Text>
                     </View>

                     <TouchableOpacity>
                        <Material style={styles.icon} name="chat" size={30} color="#004d40" />
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <Icon style={styles.icon} name="phone" size={30} color="#004d40" />
                     </TouchableOpacity>

                     <TouchableOpacity>
                        <Material style={styles.icon} name="videocam" size={30} color="#004d40" />
                     </TouchableOpacity>
                  </TouchableOpacity>
               </View>

               <View style={styles.content}>
                  <View style={styles.titleGroupt}>
                     <Text style={styles.titleGreen}>
                        Grup yang sama
                     </Text>
                     <Text style={styles.txtTotal}>
                        2
                     </Text>
                  </View>

                  <TouchableOpacity style={styles.btnGrup}>
                     <TouchableOpacity style={styles.btnProfileGrup}>
                        <Image style={styles.photoGrup} source={img} />
                     </TouchableOpacity>

                     <View style={styles.viewDescGrup}>
                        <Text style={styles.desc}>
                           ALUMNI XII RPL
                        </Text>
                        <Text style={styles.namePerson}>
                           Ahmad, Alda, Apip, Bagus, Bin, Bob, Boy
                        </Text>
                     </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.btnGrup}>
                     <TouchableOpacity style={styles.btnProfileGrup}>
                        <Image style={styles.photoGrup} source={img} />
                     </TouchableOpacity>

                     <View style={styles.viewDescGrup}>
                        <Text style={styles.desc}>
                           XII RPL INFO
                        </Text>
                        <Text style={styles.namePerson}>
                           Ahmad, Alda, Apip, Bagus, Bin, Bob, Boy Apip, Bagus, Bin, Bob, Boy
                        </Text>
                     </View>
                  </TouchableOpacity>
               </View>

               <View style={styles.content}>
                  <TouchableOpacity style={styles.btnRed}>
                     <View style={styles.viewIconRed}>
                        <Material name="block" size={30} color="red"  />
                     </View>

                     <View style={styles.viewRed}>
                        <Text style={styles.txtRed}>
                           Blokir
                        </Text>
                     </View>
                  </TouchableOpacity>
               </View>

               <View style={styles.content}>
                  <TouchableOpacity style={styles.btnRed}>
                     <View style={styles.viewIconRed}>
                        <Material name="thumb-down-alt" size={30} color="red"  />
                     </View>

                     <View style={styles.viewRed}>
                        <Text style={styles.txtRed}>
                           Laporkan kontak
                        </Text>
                     </View>
                  </TouchableOpacity>
               </View>
            </ScrollView>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   parent: {
      flex: 1,
   },
   viewPhotoProfile: {
      borderWidth: 1,
      height: 200,
      // flex: 1,
   },
   photoProfile: {
      flex: 1,
      alignSelf: 'center',
   },
   content: {
      // flex: 1,
      // borderWidth: 1,
      elevation: 2,
      backgroundColor: 'white',
      paddingHorizontal: 10,
      marginVertical: 10,
   },
   MediaFile: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 5,
      // borderWidth: 1,
      height: 40,
   },
   txtTitle: {
      fontWeight: '900',
      fontSize: 17,
      fontFamily: 'times new roman',
      color: '#004d40',
   },
   viewTotalFile: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // borderWidth: 1,
      width: 40,
   },
   txtTotal: {
      color: 'grey',
      fontSize: 17,
      fontWeight: '900',
   },
   scrollListFile: {
      height: 80,
      marginBottom: 10,
      // width: 90,
   },
   viewListFile: {
      // borderWidth: 1,
      flex: 1,
      flexDirection: 'row',
   },
   allFile: {
      width: 90,
      justifyContent: 'center',
      alignItems: 'center',
      // borderWidth:  1,
   },
   listFile: {
      // justifyContent: 'flex-start',
      // alignItems: 'center',
      marginRight: 5,
   },
   file: {
      // alignSelf: 'center',
      // justifyContent: 'center',
      height: 80,
      width: 90,
   },
   btnOptions: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 50,
      borderBottomWidth: 1,
      borderBottomColor: 'lightgrey',
   },
   desc: {
      fontWeight: '900',
      fontSize: 17,
   },
   btnEncript: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: 10,
   },
   viewDesc: {
      flex: 1,
   },
   subDesc: {
      color: 'grey',
      fontSize: 15,
   },
   icon: {
      // borderWidth: 1,
      width: 50,
   },
   titleGreen: {
      marginVertical: 10,
      color: '#004d40',
      fontSize: 17,
   },
   viewIcon: {
      flexDirection: 'row',
   },
   btnNumber: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // height: 80,
      marginVertical: 10,
   },
   titleGroupt: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   btnGrup: {
      flexDirection: 'row',
      marginVertical: 10,
   },
   btnProfileGrup: {
      width: 70,
      // borderWidth: 1,
      alignItems: 'center',
   },
   photoGrup: {
      borderRadius: 100,
      width: 50,
      height: 50,
   },
   viewDescGrup: {
      // flex: 1,
      // borderWidth: 1,
      height: 30,
   },
   namePerson: {
      color: 'grey',
      fontSize: 15,
      height: 23,
   },
   btnRed: {
      flexDirection: 'row',
      // borderWidth: 1,
      height: 45,
   },
   viewIconRed: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 70,
   },
   viewRed: {
      flex: 1,
      // borderWidth: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
   },
   txtRed: {
      color: 'red',
      fontSize: 18,
      fontWeight: '900',
   },
});

export default ProfileFriend;

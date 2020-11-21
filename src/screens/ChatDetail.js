import React, { Component } from 'react';
import {
   Text, View, TouchableOpacity,
   TextInput, ScrollView, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialIcons';

// import header
import Header from '../components/HeaderChatDetail';

class ChatDetail extends Component {
   render() {
      return (
         <>
            <Header />
            <View style={styles.parent}>
               <ScrollView>
                  <View style={styles.receiver}>
                     <Text style={styles.txtReceiver}>
                        Pcc mbekdawdawawdadawdawdawdddadwdawdwadawdawdawdawwwwwwwwwwdwaaaaaaaaaaaaaaaaa
                     </Text>
                  </View>

                  <View style={styles.sender}>
                     <Text style={styles.txtSender}>
                        Omahdawwwwwwwwwwwwwwwwdwaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                     </Text>
                  </View>

                  <View style={styles.receiver}>
                     <Text style={styles.txtReceiver}>
                        Hoalahlahlahlahah
                     </Text>
                  </View>

                  <View style={styles.sender}>
                     <Text style={styles.txtSender}>
                        Omahdawwwwwwwwwwwwwwww
                     </Text>
                  </View>

                  <View style={styles.sender}>
                     <Text style={styles.txtSender}>
                        Omahdawwwwwwwwwww
                        dwa ad daw daw adw daw adwawdawdawd
                     </Text>
                  </View>

               </ScrollView>
            </View>
            <View style={styles.footer}>
               <View style={styles.inputGroup}>
                  <TouchableOpacity style={styles.viewIcon} onPress={() => this.props.navigation.navigate('ProfileFriend')}>
                     <Material style={styles.icon} name="mood" size={28} color="grey" />
                  </TouchableOpacity>

                  <View style={styles.viewInput}>
                     <TextInput style={styles.txtInput} multiline={true} placeholder="Ketik pesan" />
                  </View>

                  <TouchableOpacity style={styles.viewIcon} onPress={() => this.props.navigation.navigate('Setting')} >
                     <Icon style={styles.icon} name="paperclip" size={25} color="grey" />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.viewIcon}>
                     <Icon style={styles.icon} name="camera" size={24} color="grey" />
                  </TouchableOpacity>
               </View>

               <View style={styles.viewBtnVoice}>
                  <TouchableOpacity style={styles.btnVoice}>
                     <Icon name="microphone" size={20} color="white" />
                  </TouchableOpacity>
               </View>
            </View>
         </>
      );
   }
}

const styles = StyleSheet.create({
   parent: {
      padding: 5,
      flex: 14,
   },
   listChat: {
      flex: 1,
   },
   receiver: {
      // borderWidth: 1,
      // backgroundColor: 'white',
      marginVertical: 5,
      flexDirection: 'row',
   },
   sender: {
      marginVertical: 5,
      flexDirection: 'row',
      alignSelf: 'flex-end',
   },
   txtReceiver: {
      elevation: 2,
      backgroundColor: 'white',
      marginRight: 70,
      borderRadius: 10,
      padding: 5,
   },
   txtSender: {
      elevation: 2,
      backgroundColor: '#b2ff59',
      borderRadius: 10,
      marginLeft: 70,
      padding: 5,
      alignSelf: 'flex-end',
   },
   footer: {
      flex: 2,
      flexDirection: 'row',
      // borderWidth: 1,
      // backgroundColor: 'rgba(52, 52, 52, 0.8)',
      alignItems: 'center',
      height: 70,
      paddingHorizontal: 5,
      marginVertical: 10,
   },
   inputGroup: {
      flexDirection: 'row',
      backgroundColor: 'white',
      height: 50,
      borderRadius: 100,
      flex: 6,
      elevation: 2,
   },
   viewIcon: {
      // borderWidth: 1,
      width: 50,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },
   icon: {},
   viewInput: {
      // backgroundColor: 'red',
      flex: 5,
   },
   txtInput: {
      fontFamily: 'times new roman',
      fontSize: 15,
   },
   viewBtnVoice: {
      flex: 1,
   },
   btnVoice: {
      backgroundColor: '#004d40',
      // flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: 50,
      marginLeft: 2,
      elevation: 1,

      borderRadius: 100,
   },
});

export default ChatDetail;

import React, { Component } from 'react';
import {
   Text, View, TouchableOpacity,
   TextInput, ScrollView, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class ChatDetail extends Component {
   render() {
      return (
         <>
            <View style={styles.parent}>
               <ScrollView>
                  <View style={styles.receiver}>
                     <Text style={styles.txtReceiver}>
                        Pcc mbekdawdawawdadawdawdawdddadwdawdwadawdawdawdawwwwwwwwwwdwaaaaaaaaaaaaaaaaa
                     </Text>
                     <View style={styles.spacingReceiver} />
                  </View>

                  <View style={styles.sender}>
                     <View style={styles.spacingSeeder} />
                     <Text style={styles.txtSender}>
                        Omahdawwwwwwwwwwwwwwwwdwaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                     </Text>
                  </View>

                  <View style={styles.sender}>
                     <View style={styles.spacingSeeder} />
                     <Text style={styles.txtSender}>
                        Omahdawwwwwwwwwwwwwwwwdwaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                     </Text>
                  </View>

                  <View style={styles.sender}>
                     <View style={styles.spacingSeeder} />
                     <Text style={styles.txtSender}>
                        Omahdawwwwwwwwwwwwwwwwdwaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                     </Text>
                  </View>

                  <View style={styles.sender}>
                     <View style={styles.spacingSeeder} />
                     <Text style={styles.txtSender}>
                        Omahdawwwwwwwwwwwwwwwwdwaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                     </Text>
                  </View>

                  <View style={styles.sender}>
                     <View style={styles.spacingSeeder} />
                     <Text style={styles.txtSender}>
                        Omahdawwwwwwwwwwwwwwwwdwaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                     </Text>
                  </View>

                  <View style={styles.sender}>
                     <View style={styles.spacingSeeder} />
                     <Text style={styles.txtSender}>
                        Omahdawwwwwwwwwwwwwwwwdwaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                     </Text>
                  </View>

                  <View style={styles.sender}>
                     <View style={styles.spacingSeeder} />
                     <Text style={styles.txtSender}>
                        Omahdawwwwwwwwwwwwwwwwdwaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                     </Text>
                  </View>

                  <View style={styles.sender}>
                     <View style={styles.spacingSeeder} />
                     <Text style={styles.txtSender}>
                        Omahdawwwwwwwwwwwwwwwwdwaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                     </Text>
                  </View>

                  <View style={styles.sender}>
                     <View style={styles.spacingSeeder} />
                     <Text style={styles.txtSender}>
                        Omahdawwwwwwwwwwwwwwwwdwaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                     </Text>
                  </View>

                  <View style={styles.sender}>
                     <View style={styles.spacingSeeder} />
                     <Text style={styles.txtSender}>
                        Omahdawwwwwwwwwwwwwwwwdwaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                     </Text>
                  </View>

                  <View style={styles.sender}>
                     <View style={styles.spacingSeeder} />
                     <Text style={styles.txtSender}>
                        Omahdawwwwwwwwwwwwwwwwdwaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                     </Text>
                  </View>

                  <View style={styles.sender}>
                     <View style={styles.spacingSeeder} />
                     <Text style={styles.txtSender}>
                        Omahdawwwwwwwwwwwwwwwwdwaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                     </Text>
                  </View>

                  <View style={styles.sender}>
                     <View style={styles.spacingSeeder} />
                     <Text style={styles.txtSender}>
                        Omahdawwwwwwwwwwwwwwwwdwaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                     </Text>
                  </View>

                  <View style={styles.sender}>
                     <View style={styles.spacingSeeder} />
                     <Text style={styles.txtSender}>
                        Omahdawwwwwwwwwwwwwwwwdwaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                     </Text>
                  </View>

                  <View style={styles.receiver}>
                     <Text style={styles.txtReceiver}>
                        Pcc mbekdawdawawdadawdawdawdddadwdawdwadawdawdawdawwwwwwwwwwdwaaaaaaaaaaaaaaaaa
                     </Text>
                     <View style={styles.spacingReceiver} />
                  </View>


                  <View style={styles.receiver}>
                     <Text style={styles.txtReceiver}>
                        Pcc mbekdawdawawdadawdawdawdddadwdawdwadawdawdawdawwwwwwwwwwdwaaaaaaaaaaaaaaaaa
                     </Text>
                     <View style={styles.spacingReceiver} />
                  </View>

               </ScrollView>
            </View>
            <View style={styles.footer}>
               <View style={styles.inputGroup}>
                  <View style={styles.viewIcon}>
                     <Icon style={styles.icon} name="paperclip" size={28} color="grey" />
                  </View>

                  <View style={styles.viewInput}>
                     <TextInput style={styles.txtInput} placeholder="Ketik pesan" />
                  </View>

                  <View style={styles.viewIcon}>
                     <Icon style={styles.icon} name="paperclip" size={25} color="grey" />
                  </View>

                  <View style={styles.viewIcon}>
                     <Icon style={styles.icon} name="camera" size={24} color="grey" />
                  </View>
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
   },
   txtReceiver: {
      // borderWidth: 1,
      elevation: 2,
      backgroundColor: 'white',
      flex: 6,
      borderRadius: 10,
   },
   txtSender: {
      elevation: 2,
      backgroundColor: '#b2ff59',
      flex: 8,
      // borderWidth: 1,
      textAlign: 'right',
      borderRadius: 10,
   },
   spacingReceiver: {
      // backgroundColor: 'red',
      flex: 1,
      // borderWidth: 1,
   },
   spacingSeeder: {
      // backgroundColor: 'red',
      flex: 2,
      width: 20,
      // borderWidth: 1,
   },
   footer: {
      flex: 2,
      flexDirection: 'row',
      // borderWidth: 1,
      // backgroundColor: 'rgba(52, 52, 52, 0.8)',
      alignItems: 'center',
      height: 70,
   },
   inputGroup: {
      flexDirection: 'row',
      backgroundColor: 'white',
      height: 50,
      borderRadius: 100,
      flex: 7,
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

      borderRadius: 100,
   },
});

export default ChatDetail;

import React, { useState, useEffect } from 'react';
import {
   Text, View, TouchableOpacity,
   TextInput, ScrollView, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialIcons';

// import header
import Header from '../components/HeaderChatDetail';

import chatAction from '../redux/actions/chat';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const ChatDetail = ({route}) => {
   const dispatch = useDispatch();
   const {token} = useSelector(state => state.login);
   const detailChatState = useSelector(state => state.detailChat);
   const sendState = useSelector(state => state.sendChat);
   const {isLoading, isError, data, alertMsg} = detailChatState;
   const {success} = sendState;
   const idParams = route.params;
   const navigation = useNavigation();

   const [isMessage, setMessage] = useState('');

   useEffect(() => {
      console.log('params',idParams);
      dispatch(chatAction.chatDetail(token, idParams));
      console.log(dispatch(chatAction.chatDetail(token, idParams)));
   }, [sendState]);

   const sendMessage = (e) => {
      e.preventDefault();
      const data = {
         message: isMessage,
      };

      if (success === true) {
         setMessage('');
      }
      console.log(dispatch(chatAction.sendChat(token, idParams, data)));
   };

   // console.log('params',route.params);
   return (
      <>
         <Header friend={idParams} />
         <View style={styles.parent}>
            <ScrollView>
            {!isLoading && !isError && data && data.map(o => (
            // console.log('message ooo',o.message)
            <>
               {o.receiver === idParams  || o.sender === idParams && (
                  <View style={styles.receiver}>
                     <Text style={styles.txtReceiver}>
                        {o.message}
                     </Text>
                  </View>
               )}

               {o.receiver !== idParams  || o.sender !== idParams && (
                  <View style={styles.sender}>
                     <Text style={styles.txtSender}>
                        {o.message}
                     </Text>
                  </View>
               )}
            </>
               ))}
               </ScrollView>
         </View>
         <View style={styles.footer}>
            <View style={styles.inputGroup}>
               <TouchableOpacity style={styles.viewIcon}>
                  <Material style={styles.icon} name="mood" size={28} color="grey" />
               </TouchableOpacity>

               <View style={styles.viewInput}>
               {/* onKeyPress={() => console.log('key')} */}
                  <TextInput value={isMessage} style={styles.txtInput} multiline={true} placeholder="Ketik pesan" onChangeText={message => setMessage(message)} />
               </View>

               <TouchableOpacity style={styles.viewIcon}>
                  <Icon style={styles.icon} name="paperclip" size={25} color="grey" />
               </TouchableOpacity>

               <TouchableOpacity style={styles.viewIcon}>
                  <Icon style={styles.icon} name="camera" size={24} color="grey" />
               </TouchableOpacity>
            </View>

            <View style={styles.viewBtnVoice}>
               <TouchableOpacity style={styles.btnVoice} onPress={sendMessage}>
                  <Icon name="microphone" size={20} color="white" />
               </TouchableOpacity>
            </View>
         </View>
      </>
   );
};

const styles = StyleSheet.create({
   parent: {
      padding: 5,
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
      // flex: 1,
      // borderWidth:1,
      flexDirection: 'row',
      // borderWidth: 1,
      // backgroundColor: 'rgba(52, 52, 52, 0.8)',
      alignItems: 'center',
      // height: 70,
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

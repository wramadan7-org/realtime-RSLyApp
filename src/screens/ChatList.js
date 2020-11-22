import React from 'react';
import {
   View, Text, StyleSheet,
   FlatList, Image, TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from '../assets/images/logos/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialIcons';

// import component
import Header from '../components/Header';

const DATA = [
   {
      id: 1,
      image: Logo,
      name: 'Wahyu Ramadan',
      message: 'Sido ngopi pora?',
      status: false,
      time: '12.03',
   },

   {
      id: 2,
      image: Logo,
      name: 'Wahyu Aldyansah',
      message: 'Sampean nnd mas?',
      status: true,
      time: '12.03',
   },

   {
      id: 3,
      image: Logo,
      name: 'SAAAYANGKU',
      message: 'Aku nugas sek ya yang',
      status: false,
      time: '12.03',
   },

   {
      id: 4,
      image: Logo,
      name: 'SAAAYANGKU',
      message: 'Aku nugas sek ya yang',
      status: false,
      time: '12.03',
   },

   {
      id: 5,
      image: Logo,
      name: 'SAAAYANGKU',
      message: 'Aku nugas sek ya yang',
      status: false,
      time: '12.03',
   },

   {
      id: 6,
      image: Logo,
      name: 'SAAAYANGKU',
      message: 'Aku nugas sek ya yang',
      status: false,
      time: '12.03',
   },

   {
      id: 7,
      image: Logo,
      name: 'SAAAYANGKU',
      message: 'Aku nugas sek ya yang',
      status: false,
      time: '12.03',
   },

   {
      id: 8,
      image: Logo,
      name: 'SAAAYANGKU',
      message: 'Aku nugas sek ya yang',
      status: false,
      time: '12.03',
   },
];

const Item = ({image, name, message, status, time}) => {
   const navigation = useNavigation();
   return (
      <>
         <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ChatDetail')}>

            <View style={styles.viewImage}>
               <Image source={image} style={styles.profile} />
            </View>

            <View style={styles.groupList}>
               <View style={styles.viewMessage}>
                  <View style={styles.viewName}>
                     <Text style={styles.txtName}>{name}</Text>
                  </View>

                  <View style={styles.viewTexting}>
                     <Icon name="check" size={20} color="grey"  />
                     <Text style={styles.txtMessage}>{message}</Text>
                  </View>
               </View>

               <View>
                  <Text>{status}</Text>
               </View>

               <View>
                  <Text>{time}</Text>
               </View>
            </View>
         </TouchableOpacity>

      </>
   );
};

const ChatList = () => {

   const navigation = useNavigation();

   const renderItem = ({item}) => (
      <Item
         image={item.image}
         name={item.name}
         message={item.message}
         status={item.status}
         time={item.time}
      />
   );

      return (
         <>
            <Header />
            <View style={styles.parent}>
               <FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  style={styles.flat}
               />
               <View style={styles.viewBtn}>
                  <TouchableOpacity style={styles.btnChat} onPress={() => navigation.navigate('ChooseFriend')}>
                     <Material name="chat" size={20} color="white" />
                  </TouchableOpacity>
               </View>
            </View>
         </>
   );
};

const styles = StyleSheet.create({
   parent: {
      padding: 10,
      flex: 1,
      borderWidth: 1,
   },
   item: {
      flexDirection: 'row',
      height: 100,
      // borderWidth: 1,
   },
   viewImage: {
      alignItems: 'center',
      // borderWidth: 1,
      justifyContent: 'center',
      width: 65,
      height: 70,
      alignSelf: 'center',
   },
   profile: {
      width: 65,
      height: 60,
      borderRadius: 100,
      // borderWidth: 1,
   },
   groupList: {
      flex: 1,
      flexDirection: 'row',
      borderBottomWidth: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
   },
   viewMessage: {
      // borderWidth: 1,
      flex: 1,
      marginLeft: 5,
      height: 80,
      justifyContent: 'center',
   },
   viewName: {
      // borderWidth: 1,
      height: 25,
   },
   txtName: {
      fontWeight: 'bold',
      fontSize: 16,
      fontFamily: 'times new roman',
   },
   viewTexting: {
      marginTop: 5,
      flexDirection: 'row',
      // borderWidth: 1,
      height: 25,
      alignItems: 'center',
   },
   txtMessage: {
      marginLeft: 5,
      color: 'grey',
      fontSize: 17,
   },
   flat: {
      flex: 1,
   },
   viewBtn: {
      // borderWidth: 1,
      // flex: 1,,
      width: 70,
      height: '100%',
      justifyContent: 'flex-end',
      alignSelf: 'flex-end',
      flexWrap: 'wrap',
      position: 'absolute',
   },
   btnChat: {
      position: 'absolute',
      justifyContent: 'center',
      width: 60,
      height: 60,
      borderRadius: 100,
      backgroundColor: 'limegreen',
      alignItems: 'center',
      elevation: 2,
   },
});

export default ChatList;

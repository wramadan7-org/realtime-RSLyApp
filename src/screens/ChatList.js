import React from 'react';
import {
   View, Text, StyleSheet,
   FlatList, Image,
} from 'react-native';
import Logo from '../assets/images/logos/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';

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

const Item = ({image, name, message, status, time}) => (
   <View style={styles.item}>

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
   </View>
);

const ChatList = () => {

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
            keyExtractor={item => item.id}
         />
      </View>
      </>
   );
};

const styles = StyleSheet.create({
   parent: {
      padding: 10,
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
});

export default ChatList;

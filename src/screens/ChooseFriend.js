import React from 'react';
import {
   View, Text, StyleSheet, ScrollView,
   TouchableOpacity, FlatList, Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialIcons';
import Logo from '../assets/images/mila.jpeg';

const DATA = [
   {
      id: 1,
      image: Logo,
      name: 'Wahyu Ramadan',
      message: 'Sido ngopi pora?',
      send: false,
      status: 'Sibuk',
      time: '12.03',
   },

   {
      id: 2,
      image: Logo,
      name: 'Wahyu Aldyansah',
      message: 'Sampean nnd mas?',
      send: true,
      status: 'Sibuk',
      time: '12.03',
   },

   {
      id: 3,
      image: Logo,
      name: 'SAAAYANGKU',
      message: 'Aku nugas sek ya yang',
      send: false,
      status: 'Sibuk',
      time: '12.03',
   },

   {
      id: 4,
      image: Logo,
      name: 'SAAAYANGKU',
      message: 'Aku nugas sek ya yang',
      send: false,
      status: 'Sibuk',
      time: '12.03',
   },

   {
      id: 5,
      image: Logo,
      name: 'SAAAYANGKU',
      message: 'Aku nugas sek ya yang',
      send: false,
      status: 'Sibuk',
      time: '12.03',
   },

   {
      id: 6,
      image: Logo,
      name: 'SAAAYANGKU',
      message: 'Aku nugas sek ya yang',
      send: false,
      status: 'Sibuk',
      time: '12.03',
   },

   {
      id: 7,
      image: Logo,
      name: 'SAAAYANGKU',
      message: 'Aku nugas sek ya yang',
      send: false,
      status: 'Sibuk',
      time: '12.03',
   },

   {
      id: 8,
      image: Logo,
      name: 'SAAAYANGKU',
      message: 'Aku nugas sek ya yang',
      send: false,
      status: 'Sibuk',
      time: '12.03',
   },
];

const Item = ({image, name, message, send, time, status}) => {
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
                     <Text style={styles.status}>{status}</Text>
                  </View>
               </View>
            </View>
         </TouchableOpacity>

      </>
   );
};

function ChooseFriend() {

   const renderItem = ({item}) => (
      <Item
         image={item.image}
         name={item.name}
         message={item.message}
         send={item.send}
         time={item.time}
         status={item.status}
      />
   );

   return (
      <>
         <View style={styles.parent}>
            <ScrollView>
               <TouchableOpacity style={styles.btnChoise} >
                  <View style={styles.viewBtnImage}>
                     <View style={styles.backgroundIcon}>
                        <Material name="group" size={20} color="white" />
                     </View>
                  </View>

                  <Text style={styles.title}>
                     Group baru
                  </Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.btnChoise} >
                  <View style={styles.viewBtnImage}>
                     <View style={styles.backgroundIcon}>
                        <Icon name="user-plus" size={20} color="white" />
                     </View>
                  </View>

                  <View style={styles.grupTxtBtn}>
                     <Text style={styles.title}>
                        Kontak baru
                     </Text>

                     <TouchableOpacity>
                        <Icon style={styles.iconCode} name="qrcode" size={25} color="#004d40" />
                     </TouchableOpacity>
                  </View>
               </TouchableOpacity>

               <FlatList
                  data={DATA}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
               />
            </ScrollView>
         </View>
      </>
   );
}

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
      width: 50,
      height: 50,
      borderRadius: 100,
      // borderWidth: 1,
   },
   groupList: {
      flex: 1,
      flexDirection: 'row',
      // borderBottomWidth: 1,
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
   status: {
      marginLeft: 5,
      color: 'grey',
      fontSize: 17,
   },
   btnChoise: {
      flexDirection: 'row',
      alignItems: 'center',
   },
   viewBtnImage: {
      justifyContent: 'center',
      width: 65,
      height: 70,
      borderWidth: 1,
      alignItems: 'center',
   },
   backgroundIcon: {
      width: 50,
      height: 50,
      borderRadius: 100,
      backgroundColor: 'limegreen',
      alignItems: 'center',
      justifyContent: 'center',
   },
   title: {
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'times new roman',
   },
   grupTxtBtn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: 1,
   },
   iconCode: {
      marginRight: 20,
   },
});

export default ChooseFriend;

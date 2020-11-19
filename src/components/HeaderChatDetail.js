import React, { Component } from 'react';
import {
   Text, View, TouchableOpacity, StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class HeaderChatDetail extends Component {
   render() {
      return (
         <>
            <View style={styles.parent}>
               <View style={styles.viewName}>
                  <Text style={styles.txtName}>Wahyu Ramadan</Text>
               </View>

               <View style={styles.viewIcon}>
                  <Icon style={styles.icon} name="stop" size={20} color="white" />
                  <Icon style={styles.icon} name="phone" size={23} color="white" />
                  <Icon style={styles.icon} name="ellipsis-v" size={20} color="white" />
               </View>
            </View>
         </>
      );
   }
}

const styles = StyleSheet.create({
   parent: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
   },
   viewName: {
      // flex: 8,
      borderWidth: 1,
   },
   txtName: {
      fontWeight: 'bold',
      fontSize: 15,
      color: 'white',
   },
   viewIcon: {
      borderWidth: 1,
      flexDirection: 'row',
      marginRight: 10,
      alignItems: 'flex-end',
      width: 100,
      justifyContent: 'space-between',
      // flex: 1,
   },
   icon: {
      borderWidth: 1,
      // alignSelf: 'flex-end',

   },
});

export default HeaderChatDetail;

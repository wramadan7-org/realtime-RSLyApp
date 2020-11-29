import React from 'react';
import {
   View,
   Text,
   TouchableOpacity,
   StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';

import logoutAction from '../redux/actions/logout';

export default function Account() {

   const accountState = useSelector(state => state.login);
   const {token} = accountState;

   const dispatch = useDispatch();

   const logout = () => {
      dispatch(logoutAction.logout());
   };

   return (
      <View style={styles.parent}>
         <TouchableOpacity style={styles.viewGrupRow} onPress={logout}>
            <View style={styles.viewIcon}>
               <Icon name="trash" size={26} color="#004d40" />
            </View>

            <View style={styles.viewDesc}>
               <Text style={styles.txtDesc}>
                  Hapus akun
               </Text>
            </View>
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   parent: {
      flex: 1,
      padding: 10,
   },
   viewGrupRow: {
      flexDirection: 'row',
   },
   viewIcon: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 60,
      height: 60,
      // borderWidth: 1,
   },
   icon: {},
   viewDesc: {
      flex: 1,
      justifyContent: 'center',
      // borderWidth: 1,
   },
   txtDesc: {
      fontSize: 17,
      fontWeight: '900',
   },
});

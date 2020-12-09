import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialIcons';

import profileAction from '../redux/actions/profile';

import {useNavigation} from '@react-navigation/native';

function ChangeName({name, phone, profile}) {
  const {token} = useSelector((state) => state.login);
  const profileState = useSelector((state) => state.myProfile);
  const updateNameState = useSelector((state) => state.updateProfile);

  const [isName, setName] = useState(name);
  const [isPhone, setPhone] = useState(phone);
  const [isProfile, setProfile] = useState(profile);
  const [alertMsg, setAlertMsg] = useState();
  console.log(isProfile);

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const data = {
      name: isName,
    };
    await dispatch(profileAction.updateProfile(token, data));
  };

  return (
    <View style={StyleSheet.parent}>
      <View style={styles.viewName}>
        <Text style={styles.txtTitleName}>Masukkan nama Anda</Text>
      </View>

      <View style={styles.grupTxtInput}>
        <View style={styles.viewTxtInput}>
          <TextInput
            style={styles.txtInput}
            placeholder="Name"
            value={isName}
            onChangeText={(stateName) => setName(stateName)}
          />
          <Text style={styles.character}>19</Text>
        </View>

        <View style={styles.viewIcon}>
          <Material name="mood" size={20} color="grey" />
        </View>
      </View>

      <View style={styles.grupBtn}>
        {/* <TouchableOpacity style={styles.btn}>
          <Text style={styles.txtBtn}>BATAL</Text>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.txtBtn}>SIMPAN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    padding: 10,
    // flex: 1,
  },
  viewName: {
    height: 50,
  },
  txtTitleName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  grupTxtInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewTxtInput: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 6,
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#004d40',
  },
  txtInput: {
    fontSize: 15,
    fontWeight: '900',
    color: 'black',
  },
  character: {
    fontSize: 15,
    color: 'grey',
    marginRight: 20,
  },
  viewIcon: {
    flex: 1,
    alignItems: 'center',
  },
  grupBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    width: 150,
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    height: 50,
    marginVertical: 25,
    // marginRight: 35,
  },
  btn: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 20,
  },
  txtBtn: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#004d40',
  },
});

export default ChangeName;

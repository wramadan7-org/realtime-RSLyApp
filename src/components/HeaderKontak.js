import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialIcons';

import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import searchAction from '../redux/actions/search';

// import Component
import ModalLoading from './ModalLoading';

const HeaderKontak = () => {
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.login);
  const searchState = useSelector((state) => state.search);
  const [btnSearch, setBtnSearch] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const navigation = useNavigation();

  const resultSearch = () => {
    console.log(searchValue.length);
    if (searchValue.length > 0) {
      dispatch(searchAction.search(token, searchValue));
      setSearchValue('');
      setBtnSearch(false);
    }
    dispatch(searchAction.clearSearch());
    setBtnSearch(false);
  };

  return (
    <>
      <View style={styles.parent}>
        <View style={styles.left}>
          <TouchableOpacity
            style={styles.btnBack}
            onPress={() => navigation.navigate('ChatList')}>
            <Material name="arrow-back" size={25} color="white" />
          </TouchableOpacity>
          {btnSearch ? (
            <TextInput
              style={styles.searchBar}
              placeholder="Search"
              onChangeText={(key) => setSearchValue(key)}
              onSubmitEditing={resultSearch}
            />
          ) : (
            <View style={styles.btnProfile}>
              <Text style={styles.txtName}>Pilih kontak</Text>
              <Text style={styles.subKontak}>155 kontak</Text>
            </View>
          )}
        </View>

        <View style={styles.viewIcon}>
          <TouchableOpacity onPress={() => setBtnSearch(true)}>
            <Icon style={styles.icon} name="search" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              style={styles.icon}
              name="ellipsis-v"
              size={20}
              color="white"
            />
          </TouchableOpacity>
        </View>
        {/* </>
        )} */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#004d40',
    height: 70,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2,
    marginRight: 40,
    marginLeft: 20,
    // borderWidth: 1,
  },
  btnProfile: {
    // borderWidth: 1,
    flex: 1,
    height: 70,
    justifyContent: 'center',
  },
  txtName: {
    fontWeight: '900',
    fontSize: 19,
    color: 'white',
  },
  viewIcon: {
    //  borderWidth: 1,
    flexDirection: 'row',
    marginRight: 10,
    width: 80,
    //  flex: 1,
    justifyContent: 'space-between',
  },
  btnBack: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 20,
  },
  photoProfile: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  subKontak: {
    fontWeight: '900',
    fontSize: 13,
    color: 'white',
  },
  searchBar: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default HeaderKontak;

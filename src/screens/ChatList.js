import React, {useEffect, useCallback, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from '../assets/images/logos/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialIcons';

// realtime
import io from 'socket.io-client';
import {APP_URL} from '@env';
import moment from 'moment';
import chatAction from '../redux/actions/chat';

import profileAction from '../redux/actions/profile';
// import component
import Header from '../components/Header';
import ModalLoading from '../components/ModalLoading';
import SearchScreen from './Search';

import img from '../assets/images/default.jpg';

const Item = ({
  image,
  receiver,
  message,
  status,
  time,
  sender,
  penerima,
  pengirim,
  id,
}) => {
  const navigation = useNavigation();
  return (
    <>
      {id === receiver ? (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('ChatDetail', sender)}>
          <View style={styles.viewImage}>
            <Image
              source={
                pengirim.profile === null
                  ? img
                  : {uri: `${APP_URL}${pengirim.profile}`}
              }
              style={styles.profile}
            />
          </View>

          <View style={styles.groupList}>
            <View style={styles.viewMessage}>
              <View style={styles.viewName}>
                <Text style={styles.txtName}>
                  {' '}
                  {pengirim.name !== null ? pengirim.name : pengirim.phone}
                </Text>
                {/* <Text style={styles.txtName}>recevier: {receiver}</Text> */}
                {/* <Image source={img} style={styles.profile} /> */}
              </View>

              <View style={styles.viewTexting}>
                <Icon name="check" size={20} color="grey" />
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
      ) : (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('ChatDetail', receiver)}>
          <View style={styles.viewImage}>
            <Image
              source={
                penerima.profile === null
                  ? img
                  : {uri: `${APP_URL}${penerima.profile}`}
              }
              style={styles.profile}
            />
          </View>

          <View style={styles.groupList}>
            <View style={styles.viewMessage}>
              <View style={styles.viewName}>
                {/* <Text style={styles.txtName}>{sender}</Text> */}

                <Text style={styles.txtName}>
                  {penerima.name !== null ? penerima.name : penerima.phone}
                </Text>
                {/* <Text style={styles.txtName}>Sender {sender}</Text> */}
              </View>

              <View style={styles.viewTexting}>
                <Icon name="check" size={20} color="grey" />
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
      )}
    </>
  );
};

const ChatList = () => {
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.login);
  const listState = useSelector((state) => state.listChat);
  const profileState = useSelector((state) => state.myProfile);
  const detailChatState = useSelector((state) => state.detailChat);
  const search = useSelector((state) => state.search);
  const {isLoading, isError, data, alertMsg} = listState;

  const [isFetching, setFetching] = useState(false);

  // console.log('profileku', profileState.data.id);

  useEffect(() => {
    const socket = io(APP_URL);
    dispatch(profileAction.myProfile(token));
    dispatch(chatAction.listChat(token));
    // console.log('oooooooh', profileState.data.id);
    // console.log(
    //   'sokkkkkk',
    socket.on(profileState.data.id, ({sender, message}) => {
      dispatch(chatAction.listChat(token));
      dispatch(chatAction.chatDetail(token, sender));
    });
    // );
    return () => {
      socket.close();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailChatState.data]);

  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <Item
      image={item.image}
      receiver={item.receiver}
      sender={item.sender}
      message={item.message}
      status={item.status}
      time={moment(item.createdAt).format('LT')}
      penerima={item.penerima}
      pengirim={item.pengirim}
      id={profileState.data.id}
    />
  );

  const onRefresh = async () => {
    console.log('refresh');
    setFetching(true);
    await dispatch(chatAction.listChat(token));
    setFetching(false);
  };

  console.log('dataaaaa', data);

  return (
    <>
      <Header />
      <View style={styles.parent}>
        {data ? (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id.toString()}
            extraData={data}
            refreshControl={
              <RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
            }
            style={styles.flat}
          />
        ) : (
          <View />
        )}
        <View style={styles.viewBtn}>
          <TouchableOpacity
            style={styles.btnChat}
            onPress={() => navigation.navigate('ChooseFriend')}>
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

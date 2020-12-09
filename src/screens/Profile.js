import React, {useRef, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {APP_URL} from '@env';
import Material from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImagePicker from 'react-native-image-picker';
import profileAction from '../redux/actions/profile';
import {useSelector, useDispatch} from 'react-redux';

import defaultProfile from '../assets/images/default.jpg';

// IMPORT SCREEN
import ChangeName from '../components/ChangeName';
import ModalLoading from '../components/ModalLoading';

const Profile = ({navigation}) => {
  const profileState = useSelector((state) => state.myProfile);
  const authState = useSelector((state) => state.login);
  const updateProfileState = useSelector((state) => state.updateProfile);

  const {token} = authState;
  const {isLoading, data} = profileState;
  const dispatch = useDispatch();
  const bottom = useRef();

  const [photo, setPhoto] = useState(data.photo);

  function chooseImage() {
    let options = {
      title: 'Select Avatar',
      cameraType: 'front',
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        // eslint-disable-next-line no-alert
        alert(response.customButton);
      } else {
        const source = {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        };
        setPhoto(source.uri);
        const dataFm = new FormData();
        dataFm.append('profile', source);
        dispatch(profileAction.updatePhotoProfile(token, dataFm));
      }
    });
  }

  useEffect(() => {
    if (updateProfileState) {
      dispatch(profileAction.myProfile(token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateProfileState]);

  return (
    <View style={styles.parent}>
      <ScrollView>
        {updateProfileState.isLoading && <ModalLoading />}
        {isLoading && <ModalLoading />}
        <TouchableOpacity
          style={styles.viewPhoto}
          onPress={() => navigation.navigate('PhotoProfile')}>
          <Image
            style={styles.photo}
            source={
              photo !== null
                ? {uri: `${APP_URL}${data.profile}`}
                : defaultProfile
            }
          />
          <View style={styles.viewBtnPhoto}>
            <TouchableOpacity
              style={styles.btnChangePhoto}
              onPress={chooseImage}>
              <Icon name="camera" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        <View style={styles.choose}>
          <TouchableOpacity
            style={styles.btnOpsi}
            onPress={() => bottom.current.open()}>
            <View style={styles.grupDesc}>
              <View style={styles.viewicon}>
                <Icon name="user" size={30} color="#004d40" />
              </View>

              <View style={styles.txtGrup}>
                <View style={styles.viewOpsi}>
                  <View style={styles.titleDesc}>
                    <Text style={styles.title}>Name</Text>

                    <Text style={styles.txtProfile}>{data.name}</Text>
                  </View>

                  <View style={styles.viewIconDesc}>
                    <Material name="create" size={25} color="grey" />
                  </View>
                </View>

                <View style={styles.subtitle}>
                  <Text style={styles.txtSubtitle}>
                    Ini bukan nama panegguna atau PIN Anda. Nama ini akan
                    terlihat oleh kontak RamSLyApp Anda.
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnOpsi}>
            <View style={styles.grupDesc}>
              <View style={styles.viewicon}>
                <Material name="info" size={30} color="#004d40" />
              </View>

              <View style={styles.txtGrup}>
                <View style={styles.viewOpsi}>
                  <View style={styles.titleDesc}>
                    <Text style={styles.title}>Info</Text>

                    <Text style={styles.txtProfile}>TRUST NO ONE</Text>
                  </View>

                  <View style={styles.viewIconDesc}>
                    <Material name="create" size={25} color="grey" />
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnOpsi}
            onPress={() => navigation.navigate('InfoChangeNumber')}>
            <View style={styles.grupDesc}>
              <View style={styles.viewicon}>
                <Icon name="phone" size={30} color="#004d40" />
              </View>

              <View style={styles.txtGrup}>
                <View style={styles.viewOpsi}>
                  <View style={styles.titleDesc}>
                    <Text style={styles.title}>Telepon</Text>

                    <View style={styles.viewPhone}>
                      <Text style={styles.txtProfile}>+62 {''}</Text>
                      <Text style={styles.txtProfile}>
                        {data.phone.slice(1, data.phone.length)}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* BOTTOM SHEET  */}
        <RBSheet
          ref={bottom}
          closeOnDragDown={true}
          closeOnPressMask={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <View style={styles.contentSheet}>
            <ChangeName name={data.name} />
          </View>
        </RBSheet>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    padding: 10,
  },
  viewPhoto: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: 200,
    marginVertical: 30,
  },
  photo: {
    borderRadius: 100,
    width: 200,
    height: 200,
  },
  viewBtnPhoto: {
    position: 'absolute',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',

    width: 50,
    height: 200,
  },
  btnChangePhoto: {
    borderRadius: 100,
    backgroundColor: '#004d40',
    width: 60,
    height: 60,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    position: 'absolute',
  },
  choose: {
    flex: 1,
  },
  btnOpsi: {
    flex: 1,
  },
  grupDesc: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  txtGrup: {
    flex: 1,
    borderBottomWidth: 0.5,
  },
  viewicon: {
    width: 50,

    justifyContent: 'center',
    alignItems: 'center',
  },
  viewOpsi: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    height: 80,
    alignItems: 'center',
  },
  titleDesc: {
    height: 50,
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    color: '#424242',
  },
  txtProfile: {
    fontSize: 17,
    fontWeight: '900',
    color: 'black',
  },
  subtitle: {},
  txtSubtitle: {
    fontSize: 15,
    color: '#424242',

    marginBottom: 10,
  },
  contentSheet: {
    padding: 10,
  },
  viewPhone: {
    flexDirection: 'row',
  },
});

export default Profile;

import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {APP_URL} from '@env';
import Material from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

import profileAction from '../redux/actions/profile';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import defaultProfile from '../assets/images/default.jpg';

const Setting = () => {
  const profileState = useSelector((state) => state.myProfile);
  const profileUpdate = useSelector((state) => state.updateProfile);
  const authState = useSelector((state) => state.login);
  const {token} = authState;
  const {isLoading, isError, data, alertMsg} = profileState;
  const dispatch = useDispatch();
  useEffect(() => {
    if (profileUpdate) {
      dispatch(profileAction.myProfile(token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigation = useNavigation();

  return (
    <View style={styles.parent}>
      <ScrollView>
        {!isLoading && !isError && data && (
          <>
            <TouchableOpacity
              style={styles.viewProfile}
              onPress={() => navigation.navigate('Profile')}>
              <View style={styles.viewPhotoProfile}>
                <Image
                  style={styles.photoProfile}
                  source={
                    data.profile === null
                      ? defaultProfile
                      : {uri: `${APP_URL}${data.profile}`}
                  }
                />
              </View>

              <View style={styles.viewDescProfile}>
                <Text style={styles.txtName}>
                  {data.name ? data.name : data.phone}
                </Text>
                <Text style={styles.txtStatus}>
                  {data.info ? data.info : 'I am using whatsapp'}
                </Text>
              </View>

              <TouchableOpacity style={styles.btnBarcode}>
                <Icon name="qrcode" size={30} color="#004d40" />
              </TouchableOpacity>
            </TouchableOpacity>

            <View style={styles.opsi}>
              <TouchableOpacity
                style={styles.btnOpsi}
                onPress={() => navigation.navigate('Account')}>
                <View style={styles.viewIcon}>
                  <Icon
                    style={styles.icon}
                    name="key"
                    size={30}
                    color="#004d40"
                  />
                </View>

                <View style={styles.viewDescOpsi}>
                  <Text style={styles.title}>Akun</Text>
                  <Text style={styles.subtitle}>
                    Provasi, keamanan, ganti nomor
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnOpsi}>
                <View style={styles.viewIcon}>
                  <Material
                    style={styles.icon}
                    name="chat"
                    size={30}
                    color="#004d40"
                  />
                </View>

                <View style={styles.viewDescOpsi}>
                  <Text style={styles.title}>Chat</Text>
                  <Text style={styles.subtitle}>
                    Tema, wallpaper, riwayat chat
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnOpsi}>
                <View style={styles.viewIcon}>
                  <Material
                    style={styles.icon}
                    name="notifications"
                    size={30}
                    color="#004d40"
                  />
                </View>

                <View style={styles.viewDescOpsi}>
                  <Text style={styles.title}>Notifikasi</Text>
                  <Text style={styles.subtitle}>
                    Pesan, grup & nada dering panggilan
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnOpsi}>
                <View style={styles.viewIcon}>
                  <Icon
                    style={styles.icon}
                    name="circle"
                    size={30}
                    color="#004d40"
                  />
                </View>

                <View style={styles.viewDescOpsi}>
                  <Text style={styles.title}>Data dan penyesuaian</Text>
                  <Text style={styles.subtitle}>
                    Penggunaan jaringan, unduh otomatis
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnOpsi}>
                <View style={styles.viewIcon}>
                  <Material
                    style={styles.icon}
                    name="help"
                    size={30}
                    color="#004d40"
                  />
                </View>

                <View style={styles.viewDescOpsi}>
                  <Text style={styles.title}>Bantuan</Text>
                  <Text style={styles.subtitle}>
                    Pusat Bantuan, hubungi kami, kebijakan privasi
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnOpsi}>
                <View style={styles.viewIcon}>
                  <Material
                    style={styles.icon}
                    name="group"
                    size={30}
                    color="#004d40"
                  />
                </View>

                <View style={styles.viewDescOpsiInvite}>
                  <Text style={styles.title}>Undang teman</Text>
                </View>
              </TouchableOpacity>

              <View style={styles.viewFooter}>
                <Text style={styles.from}>from</Text>

                <Text style={styles.facebook}>FACEBOOK</Text>
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    padding: 10,
  },
  scrollView: {},
  viewProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: 70,
    borderBottomWidth: 0.5,
    height: 90,
  },
  viewPhotoProfile: {
    width: 70,
    height: 60,
    // borderWidth: 1,
    justifyContent: 'center',
  },
  photoProfile: {
    borderRadius: 100,
    width: 60,
    height: 60,
  },
  viewDescProfile: {
    flex: 1,
  },
  txtName: {
    fontWeight: '900',
    fontSize: 20,
    color: 'black',
  },
  txtStatus: {
    fontSize: 15,
    color: '#424242',
  },
  opsi: {
    flex: 1,
  },
  btnOpsi: {
    height: 70,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  viewIcon: {
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
  },
  viewDescOpsi: {
    // borderWidth: 1,
    flex: 1,
    height: 70,
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: 17,
    fontWeight: '900',
  },
  subtitle: {
    color: '#424242',
    fontSize: 15,
    fontWeight: '900',
  },
  viewDescOpsiInvite: {
    borderTopWidth: 0.5,
    borderTopColor: 'grey',
    flex: 1,
    height: 70,
    justifyContent: 'center',
  },
  viewFooter: {
    // borderWidth: 1,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  from: {
    color: 'grey',
    fontSize: 15,
  },
  facebook: {
    color: 'black',
    letterSpacing: 2,
    fontSize: 16,
    fontWeight: '900',
  },
});

export default Setting;

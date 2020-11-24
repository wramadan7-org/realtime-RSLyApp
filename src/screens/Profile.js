import React, {useRef, useEffect, useState} from 'react';
import {
   View, Text, StyleSheet,
   TouchableOpacity, TextInput,
   Image, ScrollView,
} from 'react-native';
import { APP_URL } from '@env';
import Material from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import img from '../assets/images/mila.jpeg';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImagePicker from 'react-native-image-picker';
import profileAction from '../redux/actions/profile';
import { useSelector, useDispatch } from 'react-redux';

// IMPORT SCREEN
import ChangeName from '../components/ChangeName';

export default function Profile({navigation}) {

   const profileState = useSelector(state => state.myProfile);
   const authState = useSelector(state => state.login);
   const {token} = authState;
   const {isLoading, isError, data, alertMsg} = profileState;
   const dispatch = useDispatch();

   const [photoProfile, setPhotoProfile] = useState('');
   const [isName, setName] = useState(data.name);

   useEffect(() => {
      dispatch(profileAction.myProfile(token));
      console.log(dispatch(profileAction.myProfile(token)));
   },[2]);
   console.log(isName);
   const bottom = useRef();
   return (
      <View style={styles.parent}>
         <ScrollView>
            {!isLoading && !isError && data && (
               <>
                  <TouchableOpacity style={styles.viewPhoto} onPress={() => navigation.navigate('PhotoProfile') }>
                     <Image style={styles.photo} source={{uri: `${APP_URL}${data.profile}`}} />
                     <View style={styles.viewBtnPhoto}>
                        <TouchableOpacity style={styles.btnChangePhoto}>
                           <Icon name="camera" size={20} color="white"/>
                        </TouchableOpacity>
                     </View>
                  </TouchableOpacity>

                  {/* BOTTOM SHEET  */}
                  <RBSheet
                     ref={bottom}
                     closeOnDragDown={true}
                     closeOnPressMask={false}
                     customStyles={{
                        wrapper: {
                           backgroundColor: 'transparent',
                        },
                        draggableIcon: {
                           backgroundColor: '#000',
                        },
                     }}
                  >
                     <View style={styles.contentSheet}>
                        <ChangeName
                           name={data.name}
                           phone={data.phone}
                           profile={data.profile}
                        />
                     </View>
                  </RBSheet>

                  <View style={styles.choose}>
                     <TouchableOpacity style={styles.btnOpsi} onPress={() => bottom.current.open()}>
                        <View style={styles.grupDesc}>
                           <View style={styles.viewicon}>
                              <Icon name="user" size={30} color="#004d40"/>
                           </View>

                           <View style={styles.txtGrup}>
                              <View style={styles.viewOpsi}>
                                 <View style={styles.titleDesc}>
                                    <Text style={styles.title}>
                                       Name
                                    </Text>

                                    <Text style={styles.txtProfile}>
                                       {data.name}
                                    </Text>
                                 </View>

                                 <View style={styles.viewIconDesc}>
                                    <Material name="create" size={25} color="grey"/>
                                 </View>
                              </View>

                              <View style={styles.subtitle}>
                                 <Text style={styles.txtSubtitle}>
                                    Ini bukan nama panegguna atau PIN Anda.
                                    Nama ini akan terlihat oleh kontak RamSLyApp Anda.
                                 </Text>
                              </View>
                           </View>
                        </View>

                     </TouchableOpacity>


                     <TouchableOpacity style={styles.btnOpsi}>
                        <View style={styles.grupDesc}>
                              <View style={styles.viewicon}>
                                 <Material name="info" size={30} color="#004d40"/>
                              </View>

                              <View style={styles.txtGrup}>
                                 <View style={styles.viewOpsi}>
                                    <View style={styles.titleDesc}>
                                       <Text style={styles.title}>
                                          Info
                                       </Text>

                                       <Text style={styles.txtProfile}>
                                          TRUST NO ONE
                                       </Text>
                                    </View>

                                    <View style={styles.viewIconDesc}>
                                       <Material name="create" size={25} color="grey"/>
                                    </View>
                                 </View>
                              </View>
                           </View>
                     </TouchableOpacity>


                     <TouchableOpacity style={styles.btnOpsi}>
                        <View style={styles.grupDesc}>
                              <View style={styles.viewicon}>
                                 <Icon name="phone" size={30} color="#004d40"/>
                              </View>

                              <View style={styles.txtGrup}>
                                 <View style={styles.viewOpsi}>
                                    <View style={styles.titleDesc}>
                                       <Text style={styles.title}>
                                          Telepon
                                       </Text>

                                       <Text style={styles.txtProfile}>
                                          +62 822-5702-2981
                                       </Text>
                                    </View>
                                 </View>
                              </View>
                           </View>
                     </TouchableOpacity>
                  </View>
               </>
            )}
         </ScrollView>
      </View>
   );
}

const styles = StyleSheet.create({
   parent: {
      flex: 1,
      padding: 10,
   },
   viewPhoto: {
      // borderWidth: 1,
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
      // borderWidth: 6,
      position: 'absolute',
      alignSelf: 'flex-end',
      justifyContent: 'flex-end',
      // marginTop: 20,
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
      // borderWidth: 1,
   },
   choose: {
      // borderWidth: 1,
      flex: 1,
   },
   btnOpsi: {
      // borderWidth: 2,
      // height: 100,
   },
   grupDesc: {
      flexDirection: 'row',
      height: 150,
      alignItems: 'center',
   },
   txtGrup: {
      flex: 1,
      borderBottomWidth: 0.5,
   },
   viewicon: {
      width: 50,
      // borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   viewOpsi: {
      flexDirection: 'row',
      // borderWidth: 1,
      justifyContent: 'space-between',
      height: 80,
      alignItems: 'center',
      // borderBottomWidth: 1,
      // flex: 1,
   },
   titleDesc: {
      // borderWidth: 1,
      // flex: 1,
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
      // borderBottomWidth: 0.5,
      // width: '100%',
   },
   subtitle: {
      marginVertical: 10,
      // borderBottomWidth: 0.5,
   },
   txtSubtitle: {
      fontSize: 15,
      color: '#424242',
      // borderBottomWidth: 0.5,
      marginBottom: 10,
   },
   contentSheet: {
      padding: 10,
   },
});

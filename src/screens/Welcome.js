import React from 'react';
import {
  Text, View,
  TouchableOpacity, StyleSheet, Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//impor logo
import Logo from '../assets/images/logos/logo.png';

function Welcome({navigation}) {
  return (
    <View style={styles.parent}>

      <View style={styles.wrap}>

        <View style={styles.viewHeader}>
          <Text style={styles.txtHeader}>
            Selamat datang di RamslyApp
          </Text>
        </View>

        <View>

          <View style={styles.viewLogo}>
            <Image source={Logo} style={styles.logo} />
          </View>

          <View style={styles.viewAgreemen}>
            <Text style={styles.txtAgreemen}>
              Baca{' '}
              <Text style={styles.txtLink}>
                Kebijakan Privasi{' '}
              </Text>
              kami. Ketuk "Setuju dan lanjutkan" untuk menerima{' '}
              <Text style={styles.txtLink}>
                Ketentuan Layanan.
              </Text>
            </Text>
          </View>

          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Register')}>
              <Text style={styles.txtBtn}>
                SETUJU DAN LANJUTKAN
              </Text>
          </TouchableOpacity>

        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.viewFooter}>
          <Text style={styles.from}>
            from
          </Text>
          <Text style={styles.facebook}>
            FACEBOOK
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    padding: 10,
  },
  wrap: {
    flex: 1,
  },
  footer: {
   //  flex: 1,
  },
  viewFooter: {
    alignItems: 'center',
  },
  from: {
    color: 'grey',
  },
  facebook: {
    color: 'limegreen',
    fontSize: 15,
    letterSpacing: 2,
  },
  viewHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginVertical: 30,
  },
  txtHeader: {
    color: 'green',
    fontSize: 25,
    fontWeight: '900',
    fontFamily: 'arial',
  },
  viewLogo: {
    height: 300,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 30,
    // borderRadius: 100,
  },
  logo: {
    width: 200,
    height: 200,
  },
  viewAgreemen: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    height: 50,
    marginVertical: 10,
  },
  txtAgreemen: {
    fontSize: 14,
    fontFamily: 'times new roman',
    lineHeight: 25,
  },
  txtLink: {
    color: 'blue',
  },
  btn: {
    backgroundColor: 'limegreen',
    height: 50,
    width: 250,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtn: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },

});

export default Welcome;

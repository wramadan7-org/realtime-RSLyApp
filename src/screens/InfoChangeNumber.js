import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// import component
import HeaderChangeNumber from '../components/HeaderChangePhone';

export default function InfoChangeNumber({navigation}) {
  return (
    <View style={styles.parent}>
      <HeaderChangeNumber />
      <View style={styles.content}>
        <View style={styles.viewImg}>
          <View style={styles.img} />
        </View>

        <Text style={styles.txtTop}>
          Mengganti nomor teleopon akan memindahkan info akun, grup, dan setelan
          Anda.
        </Text>

        <Text style={styles.txtBot}>
          Sebelum melanjutkan, mohon pastikan bahwa telepon Anda dapat menerima
          SMS atau panggilan di nomor baru.
        </Text>

        <Text style={styles.txtBot}>
          Jika telepon maupun nomor Anda baru, terlebih dahulu ganti nomor Anda
          pada telepon yang lama.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('ChangeNumber')}>
        <Text style={styles.txtBtn}>LANJUT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  viewImg: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  img: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: 'blue',
  },
  txtTop: {
    fontSize: 17,
    fontWeight: '900',
    color: 'black',
    marginVertical: 10,
  },
  txtBot: {
    color: 'grey',
    fontSize: 16,
    marginVertical: 10,
  },
  btn: {
    backgroundColor: 'limegreen',
    width: 90,
    height: 40,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    elevation: 3,
  },
  txtBtn: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  },
});

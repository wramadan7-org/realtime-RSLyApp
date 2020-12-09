import React from 'react';
import {Formik} from 'formik';
import * as yup from 'yup';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

// import component
import HeaderChangeNumber from '../components/HeaderChangePhone';

function ChangeNumber({navigation}) {
  const schemaYup = yup.object().shape({
    countryCode: yup
      .string()
      .min(2, 'Kode negara minimal 2 karakter')
      .required('Masukkan kode negara'),
    newCountryCode: yup
      .string()
      .min(2, 'Kode negara minimal 2 karakter')
      .required('Masukkan kode negara'),
    oldPhone: yup
      .string()
      .min(11, 'Minimal 11 karakter')
      .required('Masukkan nomor telepon Anda.'),
    newPhone: yup
      .string()
      .min(11, 'Minimal 11 karakter')
      .required('Masukkan nomor telepon Anda.'),
  });

  return (
    <View style={styles.parent}>
      <HeaderChangeNumber />
      <View style={styles.content}>
        <Formik
          initialValues={{
            countryCode: '62',
            newCountryCode: '62',
            oldPhone: '',
            newPhone: '',
          }}
          validationSchema={schemaYup}
          onSubmit={(values) => console.log(values)}>
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <>
              <View style={styles.childContent}>
                <View style={styles.grup}>
                  <Text>
                    Masukkan nomor telepon lama Anda dengan kode negara
                  </Text>
                  <View style={styles.parentGrup}>
                    <View style={styles.viewCountryNumber}>
                      <Text style={styles.txtPlus}>+</Text>
                      <TextInput
                        keyboardType="numeric"
                        style={styles.inputNumber}
                        //  placeholder="62"
                        maxLength={3}
                        onChangeText={handleChange('countryCode')}
                        onBlur={handleBlur('countryCode')}
                        value={values.countryCode}
                      />
                    </View>

                    <View style={styles.viewNumberPhone}>
                      <TextInput
                        style={styles.inputNumber}
                        keyboardType="numeric"
                        placeholder="nomor teleopn"
                        maxLength={12}
                        onChangeText={handleChange('oldPhone')}
                        onBlur={handleBlur('oldPhone')}
                      />
                    </View>
                  </View>
                </View>
                {touched.countryCode && errors.countryCode && (
                  <Text style={styles.error}>{errors.countryCode}</Text>
                )}
                {touched.oldPhone && errors.oldPhone && (
                  <Text style={styles.error}>{errors.oldPhone}</Text>
                )}

                <View style={styles.grup}>
                  <Text>
                    Masukkan nomor telepon baru Anda dengan kode negara
                  </Text>
                  <View style={styles.parentGrup}>
                    <View style={styles.viewCountryNumber}>
                      <Text style={styles.txtPlus}>+</Text>
                      <TextInput
                        keyboardType="numeric"
                        style={styles.inputNumber}
                        //  placeholder="62"
                        maxLength={3}
                        onChangeText={handleChange('newCountryCode')}
                        onBlur={handleBlur('newCountryCode')}
                        value={values.newCountryCode}
                      />
                    </View>

                    <View style={styles.viewNumberPhone}>
                      <TextInput
                        style={styles.inputNumber}
                        keyboardType="numeric"
                        placeholder="nomor teleopn"
                        maxLength={12}
                        onChangeText={handleChange('newPhone')}
                        onBlur={handleBlur('newPhone')}
                      />
                    </View>
                  </View>
                  {touched.newCountryCode && errors.newCountryCode && (
                    <Text style={styles.error}>{errors.newCountryCode}</Text>
                  )}
                  {touched.newPhone && errors.newPhone && (
                    <Text style={styles.error}>{errors.newPhone}</Text>
                  )}
                </View>
              </View>

              <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                <Text style={styles.txtBtn}>LANJUT</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
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
  childContent: {
    flex: 1,
  },
  parentGrup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  grup: {
    //  flex: 1,
    marginVertical: 20,
  },
  viewCountryNumber: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 60,
    marginVertical: 10,
    marginRight: 10,
  },
  txtPlus: {
    color: 'grey',
  },
  inputNumber: {
    fontSize: 15,
  },
  viewNumberPhone: {
    flex: 1,
    borderBottomWidth: 1,
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
  error: {
    fontSize: 12,
    color: 'red',
  },
});

export default ChangeNumber;

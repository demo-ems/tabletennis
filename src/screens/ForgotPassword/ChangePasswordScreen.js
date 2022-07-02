import React from 'react';
import { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ChangePassAction } from '../../../redux/Actions/ChangePassAction';

import BtnBack from '../../components/CustomButton/BackButton';
import Button from '../../components/CustomButton/Button';
import TextInput from '../../components/CustomTextInput/CustomTextInput';

const ChangePasswordScreen = ({navigation}) => {

  const dispatch = useDispatch();

const [oldpass, setOldpass] = useState('');
const [newpass, setNewpass] = useState('');
const [cnfpass, setCnfpass] = useState('');
const [token, setToken] = useState('');


  const LoginSuccessRes = useSelector(state => state?.loginReducer?.LOGINRES);
  const Changepasssuccessres = useSelector(state => state?.ChangePassReducer?.CHANGEPASSRES);
  console.log('LoginSuccessRes....', LoginSuccessRes);

  useEffect(() => {
    setToken(LoginSuccessRes?.data?.token);
  }, [LoginSuccessRes]);

  useEffect(() => {
    if (Changepasssuccessres) {
      if (Changepasssuccessres?.status === 1) {
        // setIsLoading(false);
        navigation.navigate('Login');
        // dispatch({ type: 'forgotpassword', payload: '' });
      } else if (Changepasssuccessres?.status !== 1) {
        // setIsLoading(false);
      }
    }
  }, [Changepasssuccessres]);

  const ChangePasswordApicall = () => {
    if (oldpass === '') {
      Alert.alert('Please enter your oldpassword');
    } else if (newpass === '') {
      Alert.alert('Please enter a new password');
    } else if (cnfpass === '') {
      Alert.alert('Please enter a confirm password ');
    } else {
      // setIsLoading(true);
      const sendData = {
        old_password: oldpass,
        password: newpass,
        confirm_password: cnfpass,
        token:token
      };
      console.log('sendData', sendData);
      dispatch(ChangePassAction(sendData));
    }
  };

  return (
    <View style={styles.container}>
      <BtnBack
        onPress={() => {
          console.warn('Back Button Pressed!');
        }}
      />
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.txtPanel}>
            <Text style={styles.simpleTxt}>Change Password</Text>
            <Text style={styles.simpleTxt1}>Your password must be at least 6 characters and should include a combination of numbers, letters and special characters (!$@%)</Text>
            <Text style={styles.inputTitleStyle}>Old Password *</Text>
            <TextInput onChangeText={text => setOldpass(text)} style={{padding:5}} placeholder=" old password..."  />
            <Text style={styles.inputTitleStyle}>New Password *</Text>
            <TextInput onChangeText={text => setNewpass(text)} style={{padding:5}} placeholder=" new password..."  />
            <Text style={styles.inputTitleStyle}>Confirm Password *</Text>
            <TextInput onChangeText={text => setCnfpass(text)} style={{padding:5}} placeholder=" confirm password..."  />
          </View>
          <View style={styles.OTPBtn}>
            <Button
              label="Change Password"
              onPress={() => {
                ChangePasswordApicall()
                // navigation.navigate('Login');
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: '100%',
    padding: 16,
  },
  mainContainer: {
    alignItems: 'center',
    paddingTop: 50,
  },
  simpleTxt: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C2C9D1',
    textAlign: 'center',
    // marginBottom: 20,
  },
  txtPanel: {
    padding: 10,
  },
  OTPBtn: {
    marginTop: 10,
  },
  backgroundImg: {
    height: 100,
    width: 100,
    borderRadius: 16,
  },
  txtOTP: {
    height: 50,
    width: 50,
    margin: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  blockOTP: {
    flexDirection: 'row',
  },
  simpleTxt1:{
    padding: 10,
    fontSize: 15,
    color: '#C2C9D1',
    textAlign: 'center',
  },
  inputTitleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 2,
    color: '#C2C9D1',
    marginLeft:5,
  },
});

export default ChangePasswordScreen;

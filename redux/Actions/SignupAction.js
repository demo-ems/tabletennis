import React from 'react';
import {API} from '../../src/Utils/BaseUrl';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//----- Register Api
export const SignupAction = params => {
  console.log('params...', params);

  return async dispatch => {
    if (params) {
      console.log('undercondition..', params);
      fetch(`${API.BASE}/api/auth/register`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.status === 1) {
            Alert.alert(responseJson.message);
            dispatch({type: 'Register', payload: responseJson});
          } else if (responseJson.status != 1) {
            Alert.alert(responseJson.message);
            dispatch({type: 'Register', payload: responseJson});
          }
          AsyncStorage.setItem('token',responseJson?.data?.token )
          console.log('response object:', responseJson);
        })
        .catch(error => {
          console.error(error);
        });
    }
  };
};

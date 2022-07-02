import { API } from '../../src/Utils/BaseUrl';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

//----- Login Api
export const LoginAction = (params) => {
    console.log('params...',params);

    return async dispatch => {
        if(params){
            console.log('undercondition..', params);
            fetch(`${API.BASE}/api/auth/login`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body:JSON.stringify(params),
              })
              .then((response) => response.json())
              .then((responseJson) => {
                if (responseJson.status === 1) {
                    // Alert.alert(responseJson.message)
                    dispatch({ type: 'Login', payload: responseJson });
                } else if (responseJson.status != 1) {
                    Alert.alert(responseJson.message)
                    dispatch({ type: 'Login', payload: responseJson });
                }
                AsyncStorage.setItem('token',responseJson?.data?.token )
                  console.log('response object:',responseJson?.data?.token)
              })
              .catch((error) => {
                console.error(error);
              });
          }
    };
};
import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import BackgroundImage from '../../../assets/images/Waldner-cup-002.png';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import Button from '../../components/CustomButton/Button';
import hideImage from '../../../assets/images/hide.png';
import visibleImage from '../../../assets/images/shows.png';
import {LoginAction} from '../../../redux/Actions/LoginAction';
import {useDispatch, useSelector} from 'react-redux';

const Loginscreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [password1, setPassword1] = useState();
  const [show, setShow] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const {height, width} = useWindowDimensions();

  const LoginSuccessRes = useSelector(state => state?.loginReducer?.LOGINRES);
  // console.log('LoginSuccessRes', LoginSuccessRes);
  const type = LoginSuccessRes?.data?.user_type;

  useEffect(() => {
    if (LoginSuccessRes) {
      if (LoginSuccessRes?.status === 1 && type === 'player') {
        setIsLoading(false);
        navigation.navigate('PlayerTabs', {type: type});
      } else if (LoginSuccessRes?.status === 1 && type === 'coach') {
        setIsLoading(false);
        navigation.navigate('CoachTabs', {type: type});
      } else if (LoginSuccessRes?.status === 1 && type === 'user') {
        setIsLoading(false);
        navigation.navigate('UserTabs', {type: type});
      } else if (LoginSuccessRes?.status !== 1) {
        setIsLoading(false);
      }
    }
  }, [LoginSuccessRes]);

  const onLoginPressed = () => {
    // navigation.navigate('PlayerTabs');
    LoginApiCall();
  };
  const onForgotPressed = () => {
    navigation.navigate('ForgetPassword');
  };

  const LoginApiCall = () => {
    if (email === '') {
      Alert.alert('Please enter email');
    } else if (password1 === '') {
      Alert.alert('Please enter password');
    } else {
      setIsLoading(true);
      const sendData = {
        email: email,
        password: password1,
      };
      console.log('sendData', sendData);
      dispatch(LoginAction(sendData));
    }
  };

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      <View style={[styles.root, {height: height * 1}]}>
        <View style={styles.imgContainer}>
          <Image
            source={BackgroundImage}
            style={[
              styles.backgroundImg,
              {height: height * 0.5, width: width * 1},
            ]}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Text style={styles.inputTitleStyle1}>Email *</Text>
          <CustomTextInput
            onChangeText={text => setEmail(text)}
            placeholder=" Phone number, email or username"
            value={username}
            setValue={text => setUsername(text)}
          />
          <Text style={{color: '#b22222'}}>
            {username && username.map(word => {})}
          </Text>
          <View style={{bottom: 15}}>
            <Text style={styles.inputTitleStyle}>Password *</Text>
            <CustomTextInput
              onChangeText={text => setPassword1(text)}
              placeholder=" Password"
              value={password}
              setValue={setPassword}
              secureTextEntry={show}
              style={{padding: 5}}
            />
            {!show ? (
              <TouchableOpacity
                onPress={() => {
                  setShow(true);
                }}
                style={{
                  position: 'absolute',
                  marginTop: 48,
                  marginLeft: '85%',
                }}>
                <Image
                  source={hideImage}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'contain',
                    tintColor: '#C2C9D1',
                  }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setShow(false);
                }}
                style={{
                  position: 'absolute',
                  marginTop: 48,
                  marginLeft: '85%',
                }}>
                <Image
                  source={visibleImage}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'contain',
                    tintColor: '#C2C9D1',
                  }}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={styles.loginButton}>
          <Button
            label="Forgot Password?"
            type="TERTIARY"
            onPress={onForgotPressed}
          />
          {isLoading ? (
            <View style={styles.signUpBtnStyle}>
              <ActivityIndicator color="white" />
            </View>
          ) : (
            <View>
              <Button label="Login" onPress={onLoginPressed} />
            </View>
          )}

          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              navigation.navigate('Signup1');
            }}>
            <Text style={styles.txtSignup}>
              Don't have an account? <Text style={styles.signUp}>Sign up.</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#000',
    alignItems: 'center',
    padding: 10,
    // height: '100%',
  },
  backgroundImg: {
    maxWidth: 370,
    maxHeight: 300,
    opacity: 50,
    bottom: 10,
  },
  loginButton: {
    // marginVertical: 16,
    bottom: 40,
  },
  txtSignup: {
    color: '#C2C9D1',
    alignItems: 'center',
    fontSize: 12,
  },
  box: {
    alignItems: 'center',
    marginVertical: 20,
  },
  signUp: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputTitleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 5,
  },
  inputTitleStyle1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 5,
  },
});

export default Loginscreen;

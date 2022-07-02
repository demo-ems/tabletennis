import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Alert,
  Platform,
} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import DropDownPicker from 'react-native-dropdown-picker';
import backImg from '../../../assets/images/back.png';
import TextInput from '../../components/CustomTextInput/CustomTextInput';
// import DropDownList from '../../components/DropDownList/DropDownList';
import Button from '../../components/CustomButton/Button';
import DateTimePicker, {
  DateTimePickerAndroid,
} from '@react-native-community/datetimepicker';
import d from '../../../assets/images/hide.png';
import visibleImage from '../../../assets/images/shows.png';
import {SafeAreaView} from 'react-native-safe-area-context';

const radioButtonsData = [
  {
    id: '1',
    label: 'Male',
    value: 'male',
  },
  {
    id: '2',
    label: 'Female',
    value: 'female',
  },
  {
    id: '3',
    label: 'Others',
    value: 'others',
  },
];

const SignUpScreen1 = ({navigation}) => {
  const screenHeight = Dimensions.get('window').height;

  const [value, setValue] = useState('');
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [shows, setShows] = useState(false);
  const [text, setText] = useState(' YY/MM/DD');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [cnfpassword, setCnfpassword] = useState('');
  const [openRole, openRoleModal] = useState(false);
  const [role, setRole] = useState(null);
  const [errormessage, setErrormessage] = useState('');
  const [email, setEmail] = useState('');
  const [roleItems, setRoleItems] = useState([
    {label: 'Coach', value: 'coach'},
    {label: 'Player', value: 'player'},
    {label: 'User', value: 'user'},
  ]);

  function onPressRadioButton(radioButtonsArray) {
    let gender = radioButtonsArray.map(val => {
      if (val.selected === true) {
        setValue(val.value);
      }
    });
    setRadioButtons(radioButtonsArray);
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShows(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getFullYear() +
      '-' +
      '0' +
      (tempDate.getMonth() + 1) +
      '-' +
      tempDate.getDate();
    setText(fDate);
    console.log(fDate);
  };

  const showMode = currentMode => {
    setShows(true);
    setMode(currentMode);
  };
  const validate = text => {
    console.log(text);
    setEmail(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setErrormessage('Email is Not Correct');
      setEmail(text);
      return false;
    } else {
      setEmail(text);
      setErrormessage('Email is Correct');
    }
  };
  const emailValidation  = (text) => {
    validate(text);
    setMail(text);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.headercontent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backImg} style={styles.imgBtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.SignUpsty}>
          <Text style={styles.toolbarTxt}>Sign up</Text>
        </View>
      </View>
      <ScrollView
        style={{marginTop: 5}}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.signupForm}>
          <Text style={styles.inputTitleStyle}>Full Name *</Text>
          <TextInput
            onChangeText={text => setFullName(text)}
            style={{padding: 5, color: '#fff'}}
            placeholder=" Enter your Fullname..."
          />
          <Text style={styles.inputTitleStyle}>Username *</Text>
          <TextInput
            onChangeText={text => setUsername(text)}
            style={{padding: 5, color: '#fff'}}
            placeholder=" Enter your Username"
          />
          <Text style={styles.inputTitleStyle}>Please select your Role *</Text>
          <View
            style={{
              zIndex: 1,
              marginTop: 6,
              marginBottom: 15,
              paddingLeft: 3,
              paddingRight: 5,
            }}>
            <DropDownPicker
              placeholder="Role"
              open={openRole}
              value={role}
              dropDownDirection="TOP"
              items={roleItems}
              setOpen={openRoleModal}
              setValue={setRole}
              setItems={setRoleItems}
              containerStyle={{height: 40, flex: 1}}
              style={{
                backgroundColor: '#000',
                borderColor: '#C0C0C0',
                borderRadius: 6,
              }}
              listItemContainerStyle={{
                borderBottomWidth: 1,
                borderBottomColor: '#D3D3D3',
                padding: 5,
              }}
              placeholderStyle={{
                color: 'grey',
                fontSize: 15,
              }}
              arrowIconStyle={{
                backgroundColor: '#C2C9D1',
              }}
              selectedItemLabelStyle={{
                color: 'grey',
                fontSize: 15,
              }}
              textStyle={{
                color: openRole ? '#000' : '#fff',
                fontSize: 15,
              }}
              zIndex={5}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
          <Text style={styles.inputTitleStyle}>Email *</Text>
            <Text
              style={{
                color:
                  errormessage === 'Email is Not Correct' ? 'red' : 'green',
                marginLeft: 10,
                paddingTop: 5
              }}>
              {errormessage}
            </Text>
          </View>
          <TextInput
            onChangeText={emailValidation}
            style={{padding: 5, color: '#fff'}}
            placeholder=" Enter your Email"
          />
          <Text style={styles.inputTitleStyle}>Password *</Text>
          <View>
            <TextInput
              onChangeText={text => setPassword(text)}
              style={{padding: 5, fontSize: 15}}
              placeholder=" Password"
              secureTextEntry={show}
            />
            {!show ? (
              <TouchableOpacity
                onPress={() => {
                  setShow(true);
                }}
                style={{
                  position: 'absolute',
                  marginTop: 22,
                  marginLeft: '87%',
                }}>
                <Image
                  source={d}
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
                  marginTop: 22,
                  marginLeft: '87%',
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
          <Text style={styles.inputTitleStyle}>Confirm Password *</Text>
          <View>
            <TextInput
              onChangeText={text => setCnfpassword(text)}
              style={{padding: 5, fontSize: 15}}
              placeholder=" Confirm Password"
              secureTextEntry={show1}
            />
            {!show1 ? (
              <TouchableOpacity
                onPress={() => {
                  setShow1(true);
                }}
                style={{
                  position: 'absolute',
                  marginTop: 22,
                  marginLeft: '87%',
                }}>
                <Image
                  source={d}
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
                  setShow1(false);
                }}
                style={{
                  position: 'absolute',
                  marginTop: 22,
                  marginLeft: '87%',
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
          <View style={styles.container1}>
            <Text style={styles.inputTitleStyle}>Date of Birth *</Text>
            <TouchableOpacity onPress={() => showMode('date')}>
              <View style={styles.dateinput}>
                <Text
                  style={text === ' YY/MM/DD' ? styles.txtDOB : styles.txtDOB1}>
                  {text}
                </Text>
              </View>
            </TouchableOpacity>
            <View style={styles.datepickersty}>
              {shows && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                  style={{alignItems: 'center'}}
                />
              )}
            </View>
          </View>
          <Text style={styles.simpleTxt}>Gender *</Text>
          <View style={{flexDirection: 'row'}}>
            <RadioGroup
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
              containerStyle={{height: 40, marginBottom: 10, marginLeft: 10}}
            />
          </View>
          <Text style={styles.inputTitleStyle}>PhoneNumber *</Text>
          <TextInput
            onChangeText={text => setPhone(text)}
            style={{padding: 5}}
            keyboardType="numeric"
            maxLength={10}
            placeholder=" Phone Number"
          />
        </View>
      </ScrollView>
      <Button
        label="Next >>>"
        onPress={() => {
          if (fullName === '' || fullName.length < 4) {
            Alert.alert('Please enter fullname at least 4 character');
          } else if (username === '' || username.length < 4) {
            Alert.alert('Please enter username at least 4 character');
          } else if (role === null) {
            Alert.alert('Please select role');
          } else if (mail === '') {
            Alert.alert('Please enter email');
          } else if (password === '') {
            Alert.alert('Please enter password');
          } else if (cnfpassword === '') {
            Alert.alert('Please enter Confirm password');
          } else if (password != cnfpassword) {
            Alert.alert('password does not match');
          } else if (text === ' YY/MM/DD') {
            Alert.alert('Please enter dob');
          } else if (value === '') {
            Alert.alert('Please enter gender');
          } else if (phone === '') {
            Alert.alert('Please enter phone number');
          } else if (phone != '' && phone.length < 8) {
            Alert.alert('Please enter valid mobile no');
          } else if (role === 'user') {
            navigation.navigate('Signup3', {
              role: role,
              fullName: fullName,
              username: username,
              mail: mail,
              password: password,
              cnfpassword: cnfpassword,
              text: text,
              phone: phone,
              value: value,
            });
          } else {
            navigation.navigate('Signup2', {
              role: role,
              fullName: fullName,
              username: username,
              mail: mail,
              password: password,
              cnfpassword: cnfpassword,
              text: text,
              phone: phone,
              value: value,
            });
          }
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#000',
    flex: 1,
  },
  container: {
    height: 40,
    backgroundColor: 'black',
    flexDirection: 'row',
    padding: 5,
  },
  headercontent: {
    justifyContent: 'flex-start',
  },
  SignUpsty: {
    marginLeft: 125,
  },
  toolbarTxt: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  signupForm: {
    padding: 15,
  },
  simpleTxt: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  sexSelector: {
    flexDirection: 'row',
    // paddingLeft: 10,
    paddingLeft: 0,
    margin: 10,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
    alignItems: 'center',
  },
  textRights: {
    color: 'white',
  },
  inputTitleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 2,
    color: '#fff',
    marginLeft: 5,
  },
  container1: {
    flex: 1,
    marginLeft: 5,
  },
  dateinput: {
    height: 50,
    fontSize: 15,
    marginVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#C0C0C0',
    padding: 12,
    width: Platform.OS === 'ios' ? 350 : 324,
  },
  inputTitleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 2,
    color: '#fff',
    marginLeft: 5,
  },
  txtDOB: {
    fontSize: 15,
    color: 'grey',
  },
  txtDOB1: {
    fontSize: 15,
    color: 'white',
  },
  datepickersty: {
    backgroundColor: 'white',
    // marginRight:270,
    width: 100,
  },
  imgBtn: {
    height: 30,
    width: 30,
  },
});

export default SignUpScreen1;

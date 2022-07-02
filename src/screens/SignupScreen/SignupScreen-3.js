import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import TextInput from '../../components/CustomTextInput/CustomTextInput';
import Button from '../../components/CustomButton/Button';
import {SignupAction} from '../../../redux/Actions/SignupAction';
import {useDispatch, useSelector} from 'react-redux';
import backImg from '../../../assets/images/back.png';

const SignUpScreen3 = ({navigation, ...props}) => {
  const dispatch = useDispatch();

  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cnfpassword, setCnfpassword] = useState('');
  const [text, setText] = useState('');
  const [gender, setGender] = useState('');
  const [hand, setHand] = useState('');
  const [phone, setPhone] = useState('');
  const [playingstyle, setPlayingstyle] = useState('');
  const [favoriteserve, setFavoriteserve] = useState('');
  const [height, setHeight] = useState('');
  const [tournament, setTournament] = useState('');
  const [location, setLocation] = useState('');
  const [streetaddress1, setStreetaddress1] = useState('');
  const [streetaddress2, setStreetaddress2] = useState('');
  const [nationality, setNationality] = useState('');
  const [nationalityuser, setNationalityuser] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [team, setTeam] = useState('');
  const [club, setClub] = useState('');
  const [awards, setAwards] = useState('');
  const [achievements, setAchievements] = useState('');
  const [career, setCareer] = useState('');
  const [grip, setGrip] = useState('');
  const [startdate, setStartdate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('');

  const Signupsuccessres = useSelector(
    state => state?.SignUpReducer?.SIGNUPRES,
  );
  console.log('Signupsuccessres.... ', Signupsuccessres);
  const type1 = Signupsuccessres?.data?.user_type;

  useEffect(() => {
    if (Signupsuccessres) {
      if (Signupsuccessres?.status === 1 && type1 === 'player') {
        setIsLoading(false);
        navigation.navigate('PlayerTabs', {type1: type1});
      } else if (Signupsuccessres?.status === 1 && type1 === 'coach') {
        setIsLoading(false);
        navigation.navigate('CoachTabs', {type1: type1});
      } else if (Signupsuccessres?.status === 1 && type1 === 'user') {
        setIsLoading(false);
        navigation.navigate('UserTabs', {type1: type1});
      } else if (Signupsuccessres?.status !== 1) {
        setIsLoading(false);
      }
    }
  }, [Signupsuccessres]);

  const apicalling = () => {
    if (role === 'coach') {
      signUpCoachApiCall();
    } else if (role === 'player') {
      signUpPlayerApiCall();
    } else {
      signUpuserApiCall();
    }
  };

  useEffect(() => {
    if (props.route.params && props.route.params.role) {
      setType(props.route.params.role);
    }
  }, [props]);

  useEffect(() => {
    if (props.route && props.route.params) {
      setFullName(props.route.params.fullName);
      setUsername(props.route.params.username);
      setRole(props.route.params.role);
      setEmail(props.route.params.mail);
      setPassword(props.route.params.password);
      setCnfpassword(props.route.params.cnfpassword);
      setText(props.route.params?.text);
      setGender(props.route.params.value);
      setPhone(props.route.params.phone);
      setHeight(props.route.params.height);
      setGrip(props.route.params.grip);
      setHand(props.route.params.hand);
      setTournament(props.route.params.tournament);
      setPlayingstyle(props.route.params.playingstyle);
      setCareer(props.route.params.career);
      setAchievements(props.route.params.achievements);
      setNationality(props.route.params.nationality);
      setTeam(props.route.params.team);
      setClub(props.route.params.club);
      setFavoriteserve(props.route.params.favoriteserve);
      setAwards(props.route.params.awards);
    }
  }, [props.route.params]);

  const signUpCoachApiCall = () => {
    if (fullName === '') {
      Alert.alert('Please enter fullname');
    } else if (username === '') {
      Alert.alert('Please enter username');
    } else if (role === '') {
      Alert.alert('Please select your role');
    } else if (email === '') {
      Alert.alert('Please enter email');
    } else if (password === '') {
      Alert.alert('Please enter password');
    } else if (cnfpassword === '') {
      Alert.alert('Please enter Confirm password');
    } else if (password != cnfpassword) {
      Alert.alert('password does not match');
    } else if (text === '') {
      Alert.alert('Please enter dob');
    } else if (gender === '') {
      Alert.alert('Please enter gender');
    } else if (phone != '' && phone.length < 8) {
      Alert.alert('Please enter valid mobile no');
    } else if (height === '') {
      Alert.alert('Please enter height');
    } else if (grip === '') {
      Alert.alert('Please enter grip');
    } else if (hand === '') {
      Alert.alert('Please enter hand');
    } else if (playingstyle === '') {
      Alert.alert('Please enter playingstyle');
    } else if (nationality === '') {
      Alert.alert('Please enter nationality');
    } else if (favoriteserve === '') {
      Alert.alert('Please enter favoriteserve');
    } else if (streetaddress1 === '') {
      Alert.alert('Please enter streetaddress1');
    } else if (zipcode === '') {
      Alert.alert('Please enter zipcode');
    } else if (location === '') {
      Alert.alert('Please enter location');
    } else {
      setIsLoading(true);
      const sendData = {
        name: fullName,
        username: username,
        user_type: role,
        email: email,
        password: password,
        confirmpassword: cnfpassword,
        dob: text,
        gender: gender,
        grip: grip,
        hand: hand,
        phone: phone,
        playing_style: playingstyle,
        favorite_serve: favoriteserve,
        height: height,
        location: location,
        street_address1: streetaddress1,
        street_address2: streetaddress2,
        nationality: nationality,
        zip_code: zipcode,
        team: team,
        club: club,
        awards: awards,
        achievements: achievements,
        career: career,
        startdate: startdate,
      };
      dispatch(SignupAction(sendData));
    }
  };
  const signUpPlayerApiCall = () => {
    if (fullName === '') {
      Alert.alert('Please enter fullname');
    } else if (username === '') {
      Alert.alert('Please enter username');
    } else if (role === '') {
      Alert.alert('Please select your role');
    } else if (email === '') {
      Alert.alert('Please enter email');
    } else if (password === '') {
      Alert.alert('Please enter password');
    } else if (cnfpassword === '') {
      Alert.alert('Please enter Confirm password');
    } else if (password != cnfpassword) {
      Alert.alert('password does not match');
    } else if (text === '') {
      Alert.alert('Please enter dob');
    } else if (gender === '') {
      Alert.alert('Please enter gender');
    } else if (phone != '' && phone.length < 8) {
      Alert.alert('Please enter valid mobile no');
    } else if (height === '') {
      Alert.alert('Please enter height');
    } else if (grip === '') {
      Alert.alert('Please enter grip');
    } else if (hand === '') {
      Alert.alert('Please enter hand');
    } else if (playingstyle === '') {
      Alert.alert('Please enter playingstyle');
    } else if (nationality === '') {
      Alert.alert('Please enter nationality');
    } else if (favoriteserve === '') {
      Alert.alert('Please enter favoriteserve');
    } else if (streetaddress1 === '') {
      Alert.alert('Please enter streetaddress1');
    } else if (zipcode === '') {
      Alert.alert('Please enter zipcode');
    } else if (location === '') {
      Alert.alert('Please enter location');
    } else {
      setIsLoading(true);
      const sendData = {
        name: fullName,
        username: username,
        user_type: role,
        email: email,
        password: password,
        confirmpassword: cnfpassword,
        dob: text,
        gender: gender,
        grip: grip,
        hand: hand,
        phone: phone,
        playing_style: playingstyle,
        favorite_serve: favoriteserve,
        tournament_played: tournament,
        height: height,
        location: location,
        street_address1: streetaddress1,
        street_address2: streetaddress2,
        nationality: nationality,
        zip_code: zipcode,
        team: team,
        club: club,
        awards: awards,
        achievements: achievements,
        career: career,
        startdate: startdate,
      };
      dispatch(SignupAction(sendData));
    }
  };
  const signUpuserApiCall = () => {
    if (fullName === '') {
      Alert.alert('Please enter fullname');
    } else if (username === '') {
      Alert.alert('Please enter username');
    } else if (role === '') {
      Alert.alert('Please select your role');
    } else if (email === '') {
      Alert.alert('Please enter email');
    } else if (password === '') {
      Alert.alert('Please enter password');
    } else if (cnfpassword === '') {
      Alert.alert('Please enter Confirm password');
    } else if (password != cnfpassword) {
      Alert.alert('password does not match');
    } else if (text === '') {
      Alert.alert('Please enter dob');
    } else if (gender === '') {
      Alert.alert('Please enter gender');
    } else if (phone != '' && phone.length < 8) {
      Alert.alert('Please enter valid mobile no');
    } else if (streetaddress1 === '') {
      Alert.alert('Please enter streetaddress1');
    } else if (nationalityuser === '') {
      Alert.alert('Please enter nationality');
    } else if (zipcode === '') {
      Alert.alert('Please enter zipcode');
    } else if (location === '') {
      Alert.alert('Please enter location');
    } else {
      setIsLoading(true);
      const sendData = {
        name: fullName,
        username: username,
        user_type: role,
        email: email,
        password: password,
        confirmpassword: cnfpassword,
        dob: text,
        gender: gender,
        phone: phone,
        location: location,
        street_address1: streetaddress1,
        nationality: nationalityuser,
        zip_code: zipcode,
      };
      dispatch(SignupAction(sendData));
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.headercontent}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={backImg} style={styles.imgBtn} />
          </TouchableOpacity>
        </View>
        <View style={styles.SignUpsty}>
          {type === 'user' ? (
            <Text style={styles.toolbarTxt}>Step 2</Text>
          ) : (
            <Text style={styles.toolbarTxt}>Step 3</Text>
          )}
        </View>
      </View>
      {type === 'user' ? (
        <ScrollView style={{marginTop: 5}} showsVerticalScrollIndicator={false}>
          <View style={{marginTop: 15}}>
            <Text style={styles.inputTitleStyle}>Address 1 *</Text>
            <TextInput
              onChangeText={text => setStreetaddress1(text)}
              placeholder=" Address 1..."
            />
            <Text style={styles.inputTitleStyle}>Address 2 (optional)</Text>
            <TextInput
              onChangeText={text => setStreetaddress2(text)}
              placeholder=" Address 2..."
            />
            <Text style={styles.inputTitleStyle}>Zip Code *</Text>
            <TextInput
              onChangeText={text => setZipcode(text)}
              placeholder=" e.g. 123456"
              keyboardType="numeric"
              maxLength={6}
            />
            <Text style={styles.inputTitleStyle}>Location *</Text>
            <TextInput
              onChangeText={text => setLocation(text)}
              placeholder=" Location"
            />
            <Text style={styles.inputTitleStyle}>Nationality *</Text>
            <TextInput
              onChangeText={text => setNationalityuser(text)}
              placeholder=" Nationality"
            />
          </View>
        </ScrollView>
      ) : (
        <ScrollView style={{marginTop: 5}} showsVerticalScrollIndicator={false}>
          <View style={{marginTop: 15}}>
            <Text style={styles.inputTitleStyle}>Address 1 *</Text>
            <TextInput
              onChangeText={text => setStreetaddress1(text)}
              placeholder=" Address 1..."
            />
            <Text style={styles.inputTitleStyle}>Address 2 (optional)</Text>
            <TextInput
              onChangeText={text => setStreetaddress2(text)}
              placeholder=" Address 2..."
            />
            <Text style={styles.inputTitleStyle}>Zip Code *</Text>
            <TextInput
              onChangeText={text => setZipcode(text)}
              placeholder=" e.g. 123456"
              keyboardType="numeric"
              maxLength={6}
            />
            <Text style={styles.inputTitleStyle}>Location *</Text>
            <TextInput
              onChangeText={text => setLocation(text)}
              placeholder=" Location"
            />
          </View>
        </ScrollView>
      )}
      {isLoading ? (
        <View style={styles.signUpBtnStyle}>
          <ActivityIndicator color="white" />
        </View>
      ) : (
        <Button
          label="Enter to Sign Up"
          onPress={() => {
            // signUpCoachApiCall()
            apicalling();
          }}
        />
      )}
    </View>
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
    marginHorizontal: 110,
  },
  toolbarTxt: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  simpleTxt: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#C2C9D1',
  },
  inputTitleStyle: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: 'bold',
    padding: 2,
    color: '#fff',
    paddingLeft: 22,
  },
  imgBtn: {
    height: 30,
    width: 30,
  },
  
});

export default SignUpScreen3;

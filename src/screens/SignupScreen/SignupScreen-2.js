import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

import BtnBack from '../../components/CustomButton/BackButton';
import TextInput from '../../components/CustomTextInput/CustomTextInput';
import Button from '../../components/CustomButton/Button';
import backImg from '../../../assets/images/back.png';

const SignUpScreen2 = ({navigation, ...props}) => {
  const [type, setType] = useState('');
  console.log('props...', props);

  const [hand, setHand] = useState('');
  const [grip, setGrip] = useState('');
  const [playingstyle, setPlayingstyle] = useState('');
  const [favoriteserve, setFavoriteserve] = useState('');
  const [height, setHeight] = useState('');
  const [nationality, setNationality] = useState('');
  const [team, setTeam] = useState('');
  const [club, setClub] = useState('');
  const [awards, setAwards] = useState('');
  const [achievements, setAchievements] = useState('');
  const [career, setCareer] = useState('');
  const [tournament, setTournamentPlayed] = useState('');

  useEffect(() => {
    if (props.route.params && props.route.params.role) {
      setType(props.route.params.role);
    }
  }, [props]);

  const renderFun = () => {
    if (type === 'coach') {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <View style={styles.headercontent}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={backImg} style={styles.imgBtn} />
              </TouchableOpacity>
            </View>
            <View style={styles.SignUpsty}>
              <Text style={styles.toolbarTxt}>Step 2</Text>
            </View>
          </View>
          <ScrollView
            style={{marginTop: 8}}
            showsVerticalScrollIndicator={false}>
            <View style={styles.signupForm}>
              <Text style={styles.inputTitleStyle}>Height *</Text>
              <TextInput
                onChangeText={text => setHeight(text)}
                placeholder=" Enter your height (feet)"
                keyboardType="numeric"
                maxLength={3}
              />
              <Text style={styles.inputTitleStyle}>Grip *</Text>
              <TextInput
                onChangeText={text => setGrip(text)}
                placeholder=" Enter your grip"
              />
              <Text style={styles.inputTitleStyle}>Hand *</Text>
              <TextInput
                onChangeText={text => setHand(text)}
                placeholder=" e.g. right or left"
              />
              <Text style={styles.inputTitleStyle}>Playing Style *</Text>
              <TextInput
                onChangeText={text => setPlayingstyle(text)}
                placeholder=" Enter your playing style"
              />
              <Text style={styles.inputTitleStyle}>Career (optional)</Text>
              <TextInput
                onChangeText={text => setCareer(text)}
                placeholder=" Career..."
              />
              <Text style={styles.inputTitleStyle}>Achievement (optional)</Text>
              <TextInput
                onChangeText={text => setAchievements(text)}
                placeholder=" Enter your achievement"
              />
              <Text style={styles.inputTitleStyle}>Nationality *</Text>
              <TextInput
                onChangeText={text => setNationality(text)}
                placeholder=" Nationality"
              />
              <Text style={styles.inputTitleStyle}>Team (optional)</Text>
              <TextInput
                onChangeText={text => setTeam(text)}
                placeholder=" Enter your team"
              />
              <Text style={styles.inputTitleStyle}>Club (optional)</Text>
              <TextInput
                onChangeText={text => setClub(text)}
                placeholder=" Enter your club"
              />
              <Text style={styles.inputTitleStyle}>Favorite Server *</Text>
              <TextInput
                onChangeText={text => setFavoriteserve(text)}
                placeholder=" Favorite Server"
              />
              <Text style={styles.inputTitleStyle}>Awards (optional)</Text>
              <TextInput
                onChangeText={text => setAwards(text)}
                placeholder=" Awards"
              />
            </View>
          </ScrollView>
          <Button
            label="Next >>>"
            onPress={() => {
               if (height === '') {
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
              } else {
                navigation.navigate('Signup3', {
                height: height,
                grip: grip,
                hand: hand,
                playingstyle: playingstyle,
                career: career,
                achievements: achievements,
                nationality: nationality,
                team: team,
                club: club,
                favoriteserve: favoriteserve,
                awards: awards,
                fullName: props.route.params.fullName,
                role: props.route.params.role,
                username: props.route.params.username,
                mail: props.route.params.mail,
                password: props.route.params.password,
                cnfpassword: props.route.params.cnfpassword,
                text: props.route.params.text,
                phone: props.route.params.phone,
                value: props.route.params.value,
              });
            }
            }}
          />
        </View>
      );
    } else if (type === 'player') {
      return (
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <View style={styles.headercontent}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={backImg} style={styles.imgBtn} />
              </TouchableOpacity>
            </View>
            <View style={styles.SignUpsty}>
              <Text style={styles.toolbarTxt}>Step 2</Text>
            </View>
          </View>
          <ScrollView
            style={{marginTop: 10}}
            showsVerticalScrollIndicator={false}>
            <View style={styles.signupForm}>
              <Text style={styles.inputTitleStyle}>Height *</Text>
              <TextInput
                onChangeText={text => setHeight(text)}
                placeholder=" Enter your height (feet)"
                keyboardType="numeric"
                maxLength={4}
              />
              <Text style={styles.inputTitleStyle}>Grip *</Text>
              <TextInput
                onChangeText={text => setGrip(text)}
                placeholder=" Enter your grip"
              />
              <Text style={styles.inputTitleStyle}>Hand *</Text>
              <TextInput
                onChangeText={text => setHand(text)}
                placeholder=" e.g. right or left"
              />
              <Text style={styles.inputTitleStyle}>Playing Style *</Text>
              <TextInput
                onChangeText={text => setPlayingstyle(text)}
                placeholder=" Enter your playing style"
              />
              <Text style={styles.inputTitleStyle}>Career (optional)</Text>
              <TextInput
                onChangeText={text => setCareer(text)}
                placeholder=" Career..."
              />
              <Text style={styles.inputTitleStyle}>Achievement (optional)</Text>
              <TextInput
                onChangeText={text => setAchievements(text)}
                placeholder=" Enter your achievement"
              />
              <Text style={styles.inputTitleStyle}>Nationality *</Text>
              <TextInput
                onChangeText={text => setNationality(text)}
                placeholder=" Nationality"
              />
              <Text style={styles.inputTitleStyle}>Team (optional)</Text>
              <TextInput
                onChangeText={text => setTeam(text)}
                placeholder=" Enter your team"
              />
              <Text style={styles.inputTitleStyle}>Club (optional)</Text>
              <TextInput
                onChangeText={text => setClub(text)}
                placeholder=" Enter your club"
              />
              <Text style={styles.inputTitleStyle}>Favorite Server *</Text>
              <TextInput
                onChangeText={text => setFavoriteserve(text)}
                placeholder=" Favorite Server"
              />
              <Text style={styles.inputTitleStyle}>Awards (optional)</Text>
              <TextInput
                onChangeText={text => setAwards(text)}
                placeholder=" Awards"
              />
              <Text style={styles.inputTitleStyle}>
                Tournament Played (optional)
              </Text>
              <TextInput
                onChangeText={text => setTournamentPlayed(text)}
                placeholder=" Tournament Played"
              />
            </View>
          </ScrollView>
          <Button
            label="Next >>>"
            onPress={() => {
              if (height === '') {
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
              } else {
              navigation.navigate('Signup3', {
                height: height,
                grip: grip,
                hand: hand,
                playingstyle: playingstyle,
                career: career,
                achievements: achievements,
                nationality: nationality,
                team: team,
                club: club,
                favoriteserve: favoriteserve,
                awards: awards,
                fullName: props.route.params.fullName,
                role: props.route.params.role,
                username: props.route.params.username,
                mail: props.route.params.mail,
                password: props.route.params.password,
                cnfpassword: props.route.params.cnfpassword,
                text: props.route.params.text,
                phone: props.route.params.phone,
                value: props.route.params.value,
                tournament: tournament,
              });
            }
            }}
          />
        </View>
      );
    } else {
      return <View />;
    }
  };

  return <View style={{flex: 1}}>{renderFun()}</View>;
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
  inputTitleStyle: {
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

export default SignUpScreen2;

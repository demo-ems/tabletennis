import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import profileImage from '../../../assets/images/user.png';
import Back from '../../../assets/images/back.png';
import {RadioButton} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TeamActivities = ({navigation}) => {
  const [checked, setChecked] = useState('Automatic');
  console.log('checkout.......', checked);
   AsyncStorage.setItem('activity', checked); 
   
  return (
    <View style={styles.container}>
      <View
        style={{
          height: 45,
          justifyContent: 'center',
          backgroundColor: '#1E1E1E',
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CreateNewTeam'), {checked: checked};
            }}>
            <Image
              style={{height: 30, width: 30, marginLeft: 10}}
              source={Back}
            />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>Create Team</Text>
        </View>
      </View>
      <View style={styles.TitletxtView}>
        <Text style={styles.Titletxt}>Team Activities</Text>
      </View>
      <View style={{marginTop: 10}}>
        <Text style={styles.Titletxt1}>
          Control how activities appear on your
        </Text>
        <Text style={styles.Titletxt1}>Team page</Text>
      </View>
      <View style={styles.drawLine}>
        <></>
      </View>
      <View style={{marginTop: 10}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginLeft: 10, justifyContent: 'center', height: 30}}>
            <RadioButton
              value="Automatic"
              status={checked === 'Automatic' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Automatic')}
              uncheckedColor="grey"
              color="red"
              style={styles.RadioButton}
            />
          </View>
          <View style={{justifyContent: 'center', height: 30}}>
            <Text style={styles.RadiobtnTxt}>Automatic</Text>
          </View>
        </View>
        <View style={{height: 110, width: 305, marginLeft: 47}}>
          <Text style={styles.txtheading}>
            Activities that team members have recently done will automatically
            appear in the Team Activities section. Admins can prioritize
            specific activities by pinning them to the top of the list.
          </Text>
          <Text style={styles.txtheading2}>
            This will organically surface activities popular amaong the team,
            whilw keeping you in control.
          </Text>
        </View>
        <View style={styles.drawLine}>
          <></>
        </View>
      </View>
      <View style={{marginTop: 10}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginLeft: 10, justifyContent: 'center', height: 30}}>
            <RadioButton
              value="Pinned Only"
              status={checked === 'Pinned Only' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('Pinned Only')}
              uncheckedColor="grey"
              style={styles.RadioButton}
              color="red"
            />
          </View>
          <View style={{justifyContent: 'center', height: 30}}>
            <Text style={styles.RadiobtnTxt}>Pinned Only</Text>
          </View>
        </View>
        <View style={{height: 80, width: 305, marginLeft: 47}}>
          <Text style={styles.txtheading}>
            Only activities pinned by Admins will appear in the Team Activities
            section.
          </Text>
          <Text style={styles.txtheading2}>
            Choose this if you want complete control over the activities team
            members can see.
          </Text>
        </View>
        <View style={styles.drawLine}>
          <></>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  HeaderText: {
    fontSize: 15,
    padding: 10,
    marginLeft: 5,
    padding: 5,
  },
  TitletxtView: {
    marginTop: 10,
  },
  RadiobtnTxt: {
    fontSize: 16,
    padding: 10,
    padding: 5,
    fontWeight: 'bold',
    color: 'white',
  },
  Titletxt: {
    paddingLeft: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  Titletxt1: {
    paddingLeft: 20,
    fontSize: 17,
    fontWeight: '400',
    color: 'grey',
    padding: 0,
  },
  drawLine: {
    borderBottomColor: '#1E1E1E',
    borderBottomWidth: 0.6,
    width: 360,
    marginTop: 13,
    alignSelf: 'center',
  },
  RadioButton: {
    height: 40,
    width: 40,
  },
  txtheading: {
    fontSize: 13,
    fontWeight: '500',
    color: 'grey',
    paddingLeft: 5,
  },
  txtheading2: {
    fontSize: 13,
    fontWeight: '500',
    color: 'grey',
    paddingLeft: 5,
    marginTop: 10,
  },
});

export default TeamActivities;

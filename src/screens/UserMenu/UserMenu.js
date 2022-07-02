import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BottomNavBar from '../../components/BottomNavbar/BottomNavBar.js';
import profileImage from '../../../assets/images/user.png';
import bell from '../../../assets/images/bell.png';
import dots from '../../../assets/images/dots.png';
import { useSelector } from 'react-redux';

const UserMenu = () => {

  const navigation = useNavigation();
  return (
    <View style={styles.profileContainer}>
      <View style={{ flexDirection: 'row', height: 40, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: '#1E1E1E' }} >
        <Image style={styles.bellstyle} source={bell} />
        <TouchableOpacity onPress={() => navigation.navigate('AccountScreen')}>
          <Image style={styles.dotsstyle} source={dots} />
        </TouchableOpacity>
      </View>
      <View style={styles.introContainer}>
        <View style={{ height: 140, width: '100%', alignItems: 'center', backgroundColor: '#1E1E1E' }}>
          <View style={styles.profileImgview}>
            <Image style={styles.profileImg} source={profileImage} />
            <View style={styles.nameView}>
            <Text style={{ color: 'white', fontWeight: 'bold', margin: 10, fontSize: 18 }}>Name</Text>
          </View>
          </View>
        </View>
        <View style={styles.profileDate}>
          <Text style={styles.playerInfo}>Age:</Text>
          <Text style={styles.playerInfo}>Height:</Text>
          <Text style={styles.playerInfo}>Weight:</Text>
        </View>
        <View style={{
          borderBottomColor: '#C2C9D1',
          borderBottomWidth: 0.6,
          width: 360,
          alignSelf: 'center',
        }}>
          <></>
        </View>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => {
              navigation.navigate('UserProfile');
            }}>
            <Text style={styles.playerTabs}>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => {
              navigation.navigate('ChangePasswordScreen');
            }}>
            <Text style={styles.playerTabs}>ChangePassword</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => {
              navigation.navigate('TrainingVideos');
            }}>
            <Text style={styles.playerTabs}>Training</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => {
              navigation.navigate('PracticeVideos');
            }}>
            <Text style={styles.playerTabs}>Practice Videos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => {
              navigation.navigate("UserPayment")
            }}>
            <Text style={styles.playerTabs}>Subscription</Text>
          </TouchableOpacity>
          {/* <View style={styles.drawLine}>
            <></>
          </View> */}
          <TouchableOpacity
            style={styles.tabs}
            onPress={() => {
              navigation.navigate('LiveStream');
              // console.warn('Live Streams');
            }}>
            <Text style={styles.playerTabs}>Watch Live Stream</Text>
          </TouchableOpacity>
          {/* <View style={styles.drawLine}>
            <></>
          </View> */}

          <TouchableOpacity
            style={styles.tabs}
            onPress={() => {
              navigation.navigate('UploadVideo');
              // console.warn('Training Videos');
            }}>
            <Text style={styles.playerTabs}>Upload Video</Text>
          </TouchableOpacity>
          {/* <View style={styles.drawLine}>
            <></>
          </View> */}

          <TouchableOpacity
            style={styles.tabs}
            onPress={() => {
              console.warn('Logout');
            }}>
            <Text style={styles.playerTabs}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View>
        <BottomNavBar />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: '#000',
    flex: 1
  },
  introContainer: {
    alignItems: 'center',
  },
  profileImgview: {
    height: 70,
    width: 70,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 35,
    tintColor: "white",
    marginTop: 14
  },
  profileImg: {
    height: 70,
    width: 70,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C2C9D1',
    borderRadius: 35,
    tintColor: "white",
  },
  nameTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 12,
  },
  profileDate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabContainer: {
    marginTop: 20,
  },
  playerInfo: {
    color: '#C2C9D1',
    fontWeight: 'bold',
    fontSize: 14,
    padding: 16,
  },
  drawLine: {
    borderBottomColor: '#C2C9D1',
    borderBottomWidth: 0.6,
    width: 310,
    marginTop: 10,
    alignSelf: 'center',
  },
  playerTabs: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  tabs: {
    alignItems: 'center',
    alignHorizontal: 'center',
    marginTop: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    borderRadius: 10,
    backgroundColor: "#000",
    shadowOpacity: 80,
    elevation: 10,
    shadowColor: '#fff'
  },
  bellstyle: {
    height: 22,
    width: 22,
    tintColor: '#fff',
    resizeMode: 'contain',
    marginHorizontal: 15
  },
  dotsstyle: {
    height: 22,
    width: 22,
    tintColor: '#fff',
    resizeMode: 'contain',
    marginRight: 10
  },
  nameView:{
    // backgroundColor:'red',
    width:300,
    alignItems:'center',
    justifyContent:'center'
  },
});

export default UserMenu;

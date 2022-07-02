import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import BottomNavBar from '../../components/BottomNavbar/BottomNavBar';

const UserProfile = props => {
  return (
    <View style={styles.mainContainer}>
      <View style={{height:35}}>
      <Text style={styles.title}>User Details</Text>
      </View>
      <ScrollView>
        <View style={styles.personal}>
          <View style={styles.innerContainer}>
            <View style={styles.box}>
              <Text style={styles.list}>Name: {props.name}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.list}>Sex: {props.sex}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.list}>Age: {props.age}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.list}>Height: {props.height}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.list}>Email: {props.email}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.list}>Phone Number: {props.phoneNumber}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.list}>Nationality: {props.nationality}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.list}>Address: {props.address}</Text>
            </View>

          </View>
        </View>
        <View style={styles.drawLine}>
          <></>
        </View>
        <View style={styles.professional}>
          <Text style={styles.title}>Professional Details</Text>
          <View style={styles.innerContainer}>
          <View style={styles.box}>
            <Text style={styles.list}>Grip: {props.grip}</Text>
            </View>
            <View style={styles.box}>
            <Text style={styles.list}>Hand: {props.hand}</Text>
            </View>
            <View style={styles.box}>
            <Text style={styles.list}>Playing Style: {props.playingStyle}</Text>
            </View>
            <View style={styles.box}>
            <Text style={styles.list}> Favorite Serve: {props.favoriteServe}</Text>
            </View>
            <View style={styles.box}>
            <Text style={styles.list}>Team: {props.team}</Text>
            </View>
            <View style={styles.box}>
            <Text style={styles.list}>Club: {props.club}</Text>
            </View>
            <View style={styles.box}>
            <Text style={styles.list}>Awards: {props.award}</Text>
            </View>
          </View>
        </View>
        <View style={styles.drawLine}>
          <></>
        </View>
        <View style={styles.purchasedPlan}>
          <Text style={styles.title}>Subscription Details</Text>
          <View style={styles.innerContainer}>
          <View style={styles.box}>
            <Text style={styles.list}>
              Subscription (annual | monthly): {props.subscription}
            </Text>
            </View>
            <View style={styles.box}>
            <Text style={styles.list}>
              Subscription Date: {props.subscribedDate}
            </Text>
            </View>
            <View style={styles.box}>
            <Text style={styles.list}>Expiry Date: {props.expiryDate}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <BottomNavBar /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#000',
    height: '100%',
    padding: 5,
  },
  drawLine: {
    borderBottomColor: '#C2C9D1',
    borderBottomWidth: 0.9,
    width: 300,
    // marginTop: 25,
    alignSelf: 'center',
  },
  title: {
    color: '#C2C9D1',
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 15,
    marginTop: 5
  },
  innerContainer: {
    padding: 15,
  },
  list: {
    color: '#C2C9D1',
    fontSize: 15,
    padding: 3
  },
  box: {
    borderWidth: 1,
    height: 30,
    width: 300,
    borderRadius: 5,
    borderColor: 'white',
    paddingLeft:5,
    margin:5


  },
});

export default UserProfile;

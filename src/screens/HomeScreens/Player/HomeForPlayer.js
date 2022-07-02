import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import Header from '../../../components/Header/Header';
import Card from '../../../components/Cards/HeaderCard';
import Thumbnail from '../../../components/Cards/DataCard';
import CardArticles from '../../../components/Cards/CardArticles';
import BottomNavBar from '../../../components/BottomNavbar/BottomNavBar';

import image from '../../../../assets/images/OTPcode.png';

const HomeForPlayer = () => {
  // const [reviews, setReviews] = useState();
  // const [images, setImages] = useState();
// console.log('propsss...... ', props);
  const imgs = [image, image, image, image, image];
  const txtBody =
    ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ';
  return (
    <View style={styles.mainContainer}>
      {/* <Header /> */}
      <ScrollView>
        <View>
          <Card title="Total Practice" number="45" hr="hr" />
        </View>
        {/* <View style={styles.drawLine}>
          <></>
        </View> */}
        <View style={styles.carousal}>
          <Text style={styles.txtTraining}>Training Videos</Text>
          <ScrollView horizontal={true}>
            <View style={styles.coachThumbnail}>
              {imgs.map((src, index) => (
                <Thumbnail key={index} thumbnail={src} />
              ))}
            </View>
          </ScrollView>
        </View>
        {/* border line */}
        {/* <View style={styles.drawLine}>
          <></>
        </View> */}
        <View style={styles.carousal}>
          <Text style={styles.txtTraining}>Admin's Choice</Text>
          <ScrollView horizontal={true}>
            <View style={styles.coachThumbnail}>
              {imgs.map((src, index) => (
                <Thumbnail key={index} thumbnail={src} />
              ))}
            </View>
          </ScrollView>
        </View>
        {/* border line */}
        {/* <View style={styles.drawLine}>
          <></>
        </View> */}
        <View style={styles.articleView}>
          <Text style={styles.txtTraining}>Feature Articles</Text>
          <ScrollView>
            <View style={styles.articles}>
              {imgs.map((src, index) => (
                <CardArticles
                  key={index}
                  articleImg={src}
                  heading="Table Tennis 2020"
                  textBody={txtBody}
                />
              ))}
            </View>
          </ScrollView>
        </View>
        {/* border line */}
        {/* <View style={styles.drawLine}>
          <></>
        </View> */}
      </ScrollView>
      {/* <View>
        <BottomNavBar />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#000',
    height: '100%',
  },
  drawLine: {
    borderBottomColor: '#C2C9D1',
    borderBottomWidth: 0.9,
    width: 300,
    marginTop: 25,
    alignSelf: 'center',
  },
  carousal: {
    height: 150,
  },
  coachThumbnail: {
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  txtTraining: {
    color: 'white',
    marginHorizontal: 10,
    marginTop: 15,
    marginBottom: 7,
    fontWeight: 'bold',
    fontSize:16,
  },
  articleView: {},
  articles: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  addBtn: {
    backgroundColor: 'white',
  },
});

export default HomeForPlayer;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList,TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Live = [{
  "id": "1",
  "createdAt": "8 hours ago",
  "title": "Watch Live Stream Table tennis in react native.",
  "thumbnail": "https://stylecabbieimagefeedfleet.s3.ap-south-1.amazonaws.com/image_2022_06_14T06_57_11_068Z.png",
  "videoUrl": "https://www.youtube.com/watch?v=F5H-Eq_Kcxw",
  "duration": 66,
  "user": {
    "name": "Yash India",
    "image": "https://stylecabbieimagefeedfleet.s3.ap-south-1.amazonaws.com/image_2022_06_14T06_56_53_286Z.png"
  },
  "views": '20K'
}, {
  "id": "2",
  "createdAt": "8 hours ago",
  "title": "Watch Live Stream Table tennis in react native.",
  "thumbnail": "https://stylecabbieimagefeedfleet.s3.ap-south-1.amazonaws.com/image_2022_06_14T06_56_53_286Z.png",
  "videoUrl": "",
  "duration": 584,
  "user": {
    "name": "Vabhav Soni",
    "image": "https://stylecabbieimagefeedfleet.s3.ap-south-1.amazonaws.com/image_2022_06_14T06_56_53_286Z.png"
  },
  "views": '30K'
}, {
  "id": "3",
  "createdAt": "9 hours ago",
  "title": "Watch Live Stream Table tennis in react native.",
  "thumbnail": "https://stylecabbieimagefeedfleet.s3.ap-south-1.amazonaws.com/image_2022_06_14T06_56_53_286Z.png",
  "videoUrl": "",
  "duration": 584,
  "user": {
    "name": "Shubham john",
    "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/graham.jpg"
  },
  "views": '21K'
}, {
  "id": "4",
  "createdAt": "10 hours ago",
  "title": "Watch Live Stream Table tennis in react native.",
  "thumbnail": "https://stylecabbieimagefeedfleet.s3.ap-south-1.amazonaws.com/image_2022_06_14T06_57_11_068Z.png",
  "videoUrl": "",
  "duration": 584,
  "user": {
    "name": "kriti Mam",
    "image": "https://stylecabbieimagefeedfleet.s3.ap-south-1.amazonaws.com/image_2022_06_14T06_56_53_286Z.png"
  },
  "views": '25K'
}]

const LiveStream = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ height: 40, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>LiveStream</Text>
      </View>
      <FlatList
        data={Live}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback onPress={() => {navigation.navigate('LiveStreamPlay', {item : item})}}>
          <View style={{ flex: 1 }} >
            <Image style={{ height: 250, width: '100%' }} source={{ uri: item.thumbnail }} />
            <Image style={{ resizeMode: 'contain', position: 'absolute', height: 50, left: 75, right: 0, top: -10 }} source={require('../../../assets/images/live.png')} />
            <View style={{ backgroundColor: '#00000099', position: 'absolute', height: 20, width: 80, borderRadius: 3, justifyContent: 'center', alignItems: 'center', top: 5, left: 5 }} >
              <Text style={{ color: 'white', fontSize: 12 }} >{item.views} Watching</Text>
            </View>
            <View style={{ backgroundColor: '#00000099', position: 'absolute', height: 20, width: 80, borderRadius: 3, justifyContent: 'center', alignItems: 'center', top: 220, left: 5 }} >
              <Text style={{ color: 'white', fontSize: 12 }} >{item.createdAt}</Text>
            </View>
            <View style={{ flexDirection: 'row', padding: 10, width: '90%' }} >
              <Image style={{ width: 50, height: 50, borderRadius: 25, }} source={{ uri: item.user.image }} />
              <View style={{ marginHorizontal: 8 }}>
                <Text style={{ color: '#fff', fontWeight: 'bold', marginLeft: 5 }}>{item.title}</Text>
                <Text style={{ color: 'grey', fontWeight: '500', marginLeft: 5 }}>{item.user.name}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => { console.warn("pressed") }} >
                  <Image style={{ width: 26, height: 26, tintColor: '#fff' }} source={require('../../../assets/images/dots.png')} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          </TouchableWithoutFeedback>
        )} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  ImgThumb: {
    height: 250,
    width: '100%'
  },
});

export default LiveStream;

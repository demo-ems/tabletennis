import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
// import VideoPlayer from 'react-native-video-controls';
import { useDispatch, useSelector } from 'react-redux';
import { UploadPlayerAction } from '../../../redux/Actions/UploadPlayerAction';
import Button from '../../components/CustomButton/Button';

const UploadVideo = ({ navigation }) => {
  const [videouri, setVideouri] = useState('');
  const [title, setTitle] = useState('');
  const [discription, setDiscription] = useState('');
  const [usertype, setUsertype] = useState('');
  const [token, setToken] = useState('');

  const dispatch = useDispatch();
  const LoginSuccessRes = useSelector(state => state?.loginReducer?.LOGINRES);

  const VideoUploadres = useSelector(
    state => state?.UploadPlayerReducer?.UPLOADPLAYERRES,
  );
  console.log('VideoUploadres...', VideoUploadres);

  useEffect(() => {
    if (VideoUploadres) {
      if (VideoUploadres?.status === 1) {
        // setIsLoading(false);
        navigation.navigate('UserMenu');
        // dispatch({ type: 'LoginSuccess', payload: '' });
      } else if (VideoUploadres?.status !== 1) {
        // setIsLoading(false);
      }
    }
  }, [VideoUploadres]);

  useEffect(() => {
    setUsertype(LoginSuccessRes?.data?.user_type);
    setToken(LoginSuccessRes?.data?.token);
  }, [LoginSuccessRes]);

  console.log('LoginSuccessRes...', LoginSuccessRes);

  const PlayerVideoUploadApicall = () => {
    if (title === '') {
      Alert.alert('Please enter title');
    } else if (discription === '') {
      Alert.alert('Please enter discription');
    } else if (videouri === '') {
      Alert.alert('Please enter discription');
    } else {
      // setIsLoading(true);
      const sendData = {
        title: title,
        content: discription,
        video: videouri,
        user_type: usertype,
        token: token,
      };
      console.log('sendData', sendData);
      dispatch(UploadPlayerAction(sendData));
    }
  };

  const openLibraryFunc = async () => {
    console.log('press');
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.video],
        mode: 'open',
      });
      console.log('res....', res);
      setVideouri(res[0]);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        setModalVisible(!modalVisible);
      } else {
        throw err;
      }
    }
  };
  // console.log('res....', videouri);
  return (
    <View style={styles.container}>
      <View style={styles.headerview}>
        <Text style={styles.headertext}>Upload Traning Videos</Text>
      </View>
      <View>
        <View style={styles.innerContainer}>
          <TouchableOpacity onPress={openLibraryFunc}>
            <View style={styles.viewin}>
              {/* <VideoPlayer
                source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
              /> */}
            </View>
          </TouchableOpacity>
          <View style={{ height: 120, width: 200 }}>
            <Text style={styles.txttitle}>Title *</Text>
            <TextInput
              style={styles.txtinput}
              onChangeText={text => setTitle(text)}
              multiline={true}
              placeholderTextColor="grey"
              placeholder="Caption your video"
            />
          </View>
        </View>
        <View style={styles.drawLine}>
          <></>
        </View>
        <View style={styles.discriptionview}>
          <Text style={styles.txttitle}>Discription *</Text>
          <TextInput
            style={styles.txtinput}
            onChangeText={text => setDiscription(text)}
            multiline={true}
            placeholderTextColor="grey"
            placeholder="Add discription..."
          />
        </View>
        <View style={styles.btnContainer}>
          <Button label="UPLOAD" onPress={PlayerVideoUploadApicall} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: '100%',
    alignItems: 'center',
  },
  btnContainer: {
    width: 200,
    marginTop: 10,
    marginLeft: 80,
  },
  innerContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-evenly',
  },
  drawLine: {
    borderBottomColor: '#1E1E1E',
    borderBottomWidth: 0.9,
    width: 340,
    marginTop: 25,
    alignSelf: 'center',
  },
  txtinput: {
    color: '#fff',
    paddingLeft: 13,
  },
  txttitle: {
    fontSize: 16,
    color: 'white',
    paddingLeft: 8,
    paddingTop:5,
    fontWeight:'bold'
  },
  viewin: {
    height: 120,
    width: 120,
    borderWidth: 2,
    borderColor: '#1E1E1E',
    borderRadius: 5,
  },
  headerview: {
    height: 40,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headertext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  discriptionview:{
    height: 200,
    width: 330,
    borderWidth: 2,
    borderColor: '#1E1E1E',
    marginTop: 20,
    marginHorizontal: 13,
    borderRadius: 5,
  }
});

export default UploadVideo;

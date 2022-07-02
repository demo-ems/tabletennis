import React, { useEffect, useState } from 'react';
import {
    View,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text,
    ScrollView,
    TextInput,
    Alert
} from 'react-native';
import profileImage from '../../../assets/images/user.png';
import BackgroundImage from '../../../assets/images/Waldner-cup-002.png';
import camera from '../../../assets/images/camera.png';
import rightarrow from '../../../assets/images/right-arrow.png';
import DocumentPicker from 'react-native-document-picker';
import { AddTeamAction } from '../../../redux/Actions/AddTeamAction';
import { useDispatch, useSelector } from 'react-redux';

const CreateNewTeam = ({ navigation, ...props }) => {

    const dispatch = useDispatch();

    console.log('propssssssss...', props);
    
    const [modalVisible, setModalVisible] = useState(false);
    const [onchange, setOnchange] = useState('');
    const [teamname, setTeamname] = useState('');
    const [location, setLocation] = useState('');
    const [image, setImage] = useState('');
    const [activity, setActivity] = useState(0);
    const [post, setPost] = useState(0);
    const [invite, setInvite] = useState(0);
    const [teamNotification, setTeamNotification] = useState(0);
    const [type, setType] = useState('');
    const [token, setToken] = useState('');


    const LoginSuccessRes = useSelector(state => state?.loginReducer?.LOGINRES);
    
    useEffect(() => {
        setToken(LoginSuccessRes?.data?.token);
      }, [LoginSuccessRes]);

    useEffect(() => {
        if (props.route.params && props.route.params.checked) {
          setType(props.route.params.checked);
        }
      }, [props]);
      console.log('type...', type);

    const VideoPickerfun = async () => {
        console.log('press');
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
                mode: 'open',
            });
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                setModalVisible(!modalVisible);
            } else {
                throw err;
            }
        }
    };

    const AddTeamApiCall = () => {
        if (teamname === '') {
          Alert.alert('Please enter team name');
        } else if (location === '') {
          Alert.alert('Please enter location');
        } else {
        //   setIsLoading(true);
          const sendData = {
            team_name: teamname,
            location: location,
            image: image,
            team_activity:activity,
            who_can_post:post,
            invite:invite,
            team_notification:teamNotification,
            token:token
          };
          console.log('sendData', sendData);
          dispatch(AddTeamAction(sendData));
        }
      };

    return (
        <View style={styles.container}>
            <View style={styles.headerview}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.HeaderText}>Cancel</Text>
                </TouchableOpacity>
                <Text style={styles.HeaderText1}>Create Team</Text>
                <TouchableOpacity onPress={
                    // AddTeamApiCall
                    ()=>{navigation.navigate('InviteScreen')}
                    }>
                    <Text style={styles.HeaderText}>Save</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.backimageview}>
                {/* <Image source={BackgroundImage} style={styles.backgroundImg} /> */}
            </View>
            <View style={styles.cameraViewStyle}>
                <TouchableOpacity onPress={VideoPickerfun}>
                    <Image style={styles.cameraStyle} source={camera} />
                </TouchableOpacity>
            </View>
            <View style={styles.profileImgview}>
                <Image style={styles.profileImg} source={profileImage} />
                <View style={styles.cameraViewStylePro}>
                    <TouchableOpacity onPress={VideoPickerfun}>
                        <Image style={styles.cameraStyleProfile} source={camera} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.drawLineModel}>
                <></>
            </View>
            <ScrollView>
                <View style={styles.inputView}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.textname}>Team Name</Text>
                    </View>
                    <View style={styles.textinputview}>
                        <TextInput
                            style={styles.textinputteam}
                            onChangeText={text => {
                                setTeamname(text);
                            }}
                        />
                    </View>
                </View>
                <View style={styles.drawLine}>
                    <></>
                </View>
                <View style={styles.inputView}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.textname}>Location</Text>
                    </View>
                    <View style={styles.textinputview1}>
                        <TextInput style={styles.textinputteam} onChangeText={text => {
                                setLocation(text);
                            }}/>
                    </View>
                </View>
                <View style={styles.drawLine}>
                    <></>
                </View>
                <View style={{ height: 90, width: '100%', backgroundColor: '#1E1E1E' }}>
                    <Text style={{ fontSize: 13, marginTop: 10, margin: 5, padding: 5 }}>
                        Anyone on TTnet can view the names of the Teams you are a part of.
                        Only users invited to join a Team are able to view its contents.
                    </Text>
                </View>
                <View style={styles.drawLine}>
                    <></>
                </View>
                <View style={styles.inputView}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.textname}>Team Activities</Text>
                    </View>
                    <View style={{ width: 210, marginLeft: 45, alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('TeamActivities');
                            }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'flex-end',
                                        height: 50,
                                        width: 150,
                                    }}>
                                    <Text style={{ color: 'grey', fontSize: 16 }}>Automatic</Text>
                                </View>
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 50,
                                        width: 40,
                                    }}>
                                    <Image
                                        style={{ tintColor: 'grey', height: 15, width: 15 }}
                                        source={rightarrow}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.drawLine}>
                    <></>
                </View>
                <View style={styles.inputView}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.textname}>Who can post</Text>
                    </View>
                    <View style={{ width: 222, marginLeft: 45, alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('WhoCanPost');
                            }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'flex-end',
                                        height: 50,
                                        width: 150,
                                    }}>
                                    <Text style={{ color: 'grey', fontSize: 16 }}>All members</Text>
                                </View>
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 50,
                                        width: 40,
                                    }}>
                                    <Image
                                        style={{ tintColor: 'grey', height: 15, width: 15 }}
                                        source={rightarrow}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.drawLine}>
                    <></>
                </View>
                <View style={styles.inputView}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.textname}>Who can invite others</Text>
                    </View>
                    <View style={{ width: 170, marginLeft: 45, alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('WhoCanInvite');
                            }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'flex-end',
                                        height: 50,
                                        width: 150,
                                    }}>
                                    <Text style={{ color: 'grey', fontSize: 16 }}>All members</Text>
                                </View>
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 50,
                                        width: 40,
                                    }}>
                                    <Image
                                        style={{ tintColor: 'grey', height: 15, width: 15 }}
                                        source={rightarrow}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.drawLine}>
                    <></>
                </View>
                <View style={styles.inputView}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.textname}>Team Notifications</Text>
                    </View>
                    <View style={{ width: 185, marginLeft: 45, alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('TeamNotification');
                            }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 50,
                                        width: 40,
                                    }}>
                                    <Image
                                        style={{ tintColor: 'grey', height: 15, width: 15 }}
                                        source={rightarrow}
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.drawLine}>
                    <></>
                </View>
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    headerview: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    profileImg: {
        height: 70,
        width: 70,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#C2C9D1',
        borderRadius: 35,
        tintColor: 'white',
    },
    profileImgview: {
        height: 70,
        width: 70,
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#000',
        borderRadius: 35,
        tintColor: 'white',
        top: 185,
        position: 'absolute',
        left: 150,
    },
    cameraStyle: {
        height: 20,
        width: 20,
        alignItems: 'center',
        borderWidth: 1,
        resizeMode: 'contain',
        tintColor: 'black',
    },
    cameraStyleProfile: {
        height: 20,
        width: 20,
        alignItems: 'center',
        borderWidth: 1,
        resizeMode: 'contain',
        tintColor: 'black',
    },
    cameraViewStyle: {
        height: 30,
        width: 30,
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 15,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        left: 320,
        top: 185,
    },
    cameraViewStylePro: {
        height: 30,
        width: 30,
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: '#fff',
        borderRadius: 15,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 50,
        right: 10,
    },
    drawLine: {
        borderBottomColor: '#1E1E1E',
        borderBottomWidth: 0.6,
        width: 360,
        // marginTop: 10,
        alignSelf: 'center',
    },
    HeaderText: {
        marginHorizontal: 44,
        fontSize: 14,
        color: '#fff',
    },
    HeaderText1: {
        marginHorizontal: 44,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    backgroundImg: {
        height: 185,
    },
    drawLineModel: {
        borderBottomColor: '#1E1E1E',
        borderBottomWidth: 0.6,
        width: 360,
        alignSelf: 'center',
        marginTop: 55,
    },
    textinput: {
        marginTop: 10,
    },
    textinputview: {
        width: 250,
        marginLeft: 23,
    },
    textinputview1: {
        width: 250,
        marginLeft: 45
    },
    inputTitleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 15,
        marginTop: 10,
    },
    textname: {
        paddingLeft: 10,
        fontWeight: 'bold',
        color: 'white',
    },
    textinputteam: {
        paddingLeft: 10,
        color: 'grey',
        height:50
    },
    backimageview: {
        height: 185,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#1E1E1E',
    },
    inputView: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
    },
});

export default CreateNewTeam;

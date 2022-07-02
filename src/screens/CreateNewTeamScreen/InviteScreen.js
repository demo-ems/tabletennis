import React, {useState, useEffect} from 'react';
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
  TouchableWithoutFeedback,
} from 'react-native';
import profileImage from '../../../assets/images/user.png';
import TTimage from '../../../assets/images/download.png';
import rightarrow from '../../../assets/images/right-arrow.png';
import Back from '../../../assets/images/back.png';
import dots from '../../../assets/images/dots.png';
import eye from '../../../assets/images/shows.png';
import downarrow from '../../../assets/images/downArrow.png';

const InviteScreen = ({navigation, ...props}) => {
  const [type, setType] = useState('');
  // console.log('props...', props);

  // useEffect(() => {
  //     if (props.route.params && props.route.params.name) {
  //         setType(props.route.params.name);
  //     }
  // }, [props]);

  return (
    <View style={styles.container}>
      <View style={styles.innerview}>
        <TouchableOpacity onPress={() => {navigation.navigate('CreateNewTeam')}}>
          <Image style={styles.backbuttonimage} source={Back} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.dotsstyle} source={dots} />
        </TouchableOpacity>
      </View>
      <ScrollView>
      <View style={styles.innerview2}></View>
      <View style={styles.profileImgview}>
        <Image style={styles.profileImg} source={profileImage} />
      </View>
      <View style={styles.teamnameview}>
        <Text style={styles.teamnametxt}>Team name</Text>
      </View>
      <TouchableOpacity>
        <View style={styles.inviteview}>
          <Text style={styles.inviteviewtxt}>Invite</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.drawLineModel}>
        <></>
      </View>
        <View style={styles.rowView}>
          <View
            style={{
              height: 40,
              width: 60,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.textname}>Posts</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,
              width: 40,
              marginHorizontal: 260,
            }}>
            <TouchableOpacity>
              <Image
                style={styles.imagestyle}
                source={rightarrow}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.boxView}>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View
              style={{
                height: 25,
                width: 25,
                borderRadius: 12.5,
                backgroundColor: 'red',
                marginHorizontal: 10,
              }}></View>
            <View style={{marginHorizontal: 5, height: 30, width: 200}}>
              <Text style={{fontSize: 10, fontWeight: 'bold', color: 'white'}}>
                TableTennis
              </Text>
              <View style={styles.rowView}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    style={styles.imagestyle}
                    source={eye}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 5,
                  }}>
                  <Text style={{fontSize: 9}}>
                    This post is visible to you only
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{height: 70, width: 300, marginHorizontal: 10}}>
            <Text
              style={{
                padding: 2,
                fontWeight: 'bold',
                fontSize: 12,
                color: 'white',
              }}>
              Welcome to TableTennis for Teams. This is a starter post to show
              you what's possible with our community post feature.If you're a
              coach or teacher just getting started, we have additional
              resources on our website...
            </Text>
          </View>
          <View
            style={{
              height: 70,
              marginTop: 5,
              justifyContent: 'center',
              marginLeft: 5,
            }}>
            <View style={styles.imagewriteview}>
              <View style={styles.imageView}>
                <Image style={styles.imagewrite} source={TTimage} />
              </View>
              <View style={styles.imageView}>
                <Image style={styles.imagewrite} source={TTimage} />
              </View>
              <View style={styles.imageView}>
                <Image style={styles.imagewrite} source={TTimage} />
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.WritepostView}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>
              Write Post
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            height: 40,
            width: 200,
            justifyContent: 'center',
          }}>
          <Text style={styles.textname}>Team Effort</Text>
        </View>
        <TouchableWithoutFeedback>
          <View style={{flexDirection: 'row', width: 100}}>
            <View
              style={{
                backgroundColor: 'black',
                width: 80,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.textnameMonth}>This month</Text>
            </View>
            <View
              style={{
                width: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={styles.imagestyle}
                source={downarrow}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={{height: 80, justifyContent: 'center'}}>
          <View style={styles.rowView}>
            <View
              style={{
                height: 80,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10,
              }}>
              <View
                style={{
                  width: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.textname}>0m</Text>
              </View>
              <View
                style={{
                  width: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 5,
                }}>
                <Text style={styles.smalltitle}>Agility time</Text>
              </View>
              <View>
                <Text>--</Text>
              </View>
            </View>
            <View style={styles.verticleLine}></View>

            <View
              style={{
                height: 80,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10,
              }}>
              <View
                style={{
                  width: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.textname}>0</Text>
              </View>
              <View
                style={{
                  width: 60,
                  marginLeft: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.smalltitle}>Dribbles</Text>
              </View>
              <View>
                <Text>--</Text>
              </View>
            </View>
            <View style={styles.verticleLine}></View>

            <View
              style={{
                height: 80,
                width: 100,
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 10,
              }}>
              <View
                style={{
                  width: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.textname}>0</Text>
              </View>
              <View
                style={{
                  width: 60,
                  marginLeft: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.smalltitle}>Shots</Text>
              </View>
              <View>
                <Text>--</Text>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.smallbox}>
            <View style={styles.rowView}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <Text style={styles.buttontxt}>
                  View stats for all team members
                </Text>
              </View>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  style={styles.imagestyle}
                  source={rightarrow}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 20,
            height: 40,
            width: 120,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.textname}>Leaderboards</Text>
        </View>
        <View style={{height: 35, marginLeft: 16, justifyContent: 'center'}}>
          <View style={styles.rowView}>
            <TouchableOpacity>
              <View
                style={{
                  height: 30,
                  backgroundColor: 'red',
                  width: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 4,
                }}>
                <Text style={styles.buttontxt}>TIME</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  height: 30,
                  backgroundColor: 'red',
                  width: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 4,
                  marginHorizontal: 15,
                }}>
                <Text style={styles.buttontxt}>DRIBBLES</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  height: 30,
                  backgroundColor: 'red',
                  width: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 4,
                }}>
                <Text style={styles.buttontxt}> MAKES</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height: 30, flexDirection: 'row', marginTop: 5}}>
          <View>
            <TouchableWithoutFeedback>
              <View style={{flexDirection: 'row', width: 100, marginTop: 10}}>
                <View
                  style={{
                    width: 80,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.textnameMonth}>This month</Text>
                </View>
                <View
                  style={{
                    width: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{tintColor: 'white', height: 10, width: 10}}
                    source={downarrow}
                  />
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,
              width: 150,
              marginLeft: 100,
            }}>
            <TouchableOpacity>
              <View
                style={{flexDirection: 'row', marginTop: -8, marginLeft: 30}}>
                <View
                  style={{
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.buttontxt}>Full Leaderboard</Text>
                </View>
                <View
                  style={{
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 3,
                  }}>
                  <Image
                    style={{tintColor: 'white', height: 13, width: 13}}
                    source={rightarrow}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.drawLineModel}>
          <></>
        </View>
        <View style={{height: 120, marginTop: 5}}>
          <View style={styles.rowView}>
            <View style={styles.boxleader}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                1
              </Text>
            </View>
            <View style={styles.boxleader}>
              <View
                style={{
                  height: 25,
                  width: 25,
                  borderRadius: 12.5,
                  backgroundColor: 'grey',
                }}></View>
            </View>
            <View style={styles.boxleader}>
              <View
                style={{
                  height: 10,
                  backgroundColor: 'grey',
                  width: 140,
                }}></View>
            </View>
            <View style={styles.boxleader1}>
              <View
                style={{height: 4, width: 25, backgroundColor: 'grey'}}></View>
            </View>
          </View>
          <View style={styles.rowView}>
            <View style={styles.boxleader}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                1
              </Text>
            </View>
            <View style={styles.boxleader}>
              <View
                style={{
                  height: 25,
                  width: 25,
                  borderRadius: 12.5,
                  backgroundColor: 'grey',
                }}></View>
            </View>
            <View style={styles.boxleader}>
              <View
                style={{
                  height: 10,
                  backgroundColor: 'grey',
                  width: 140,
                }}></View>
            </View>
            <View style={styles.boxleader1}>
              <View
                style={{height: 4, width: 25, backgroundColor: 'grey'}}></View>
            </View>
          </View>
          <View style={styles.rowView}>
            <View style={styles.boxleader}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                1
              </Text>
            </View>
            <View style={styles.boxleader}>
              <View
                style={{
                  height: 25,
                  width: 25,
                  borderRadius: 12.5,
                  backgroundColor: 'grey',
                }}></View>
            </View>
            <View style={styles.boxleader}>
              <View
                style={{
                  height: 10,
                  backgroundColor: 'grey',
                  width: 140,
                }}></View>
            </View>
            <View style={styles.boxleader1}>
              <View
                style={{height: 4, width: 25, backgroundColor: 'grey'}}></View>
            </View>
          </View>
          <View style={styles.rowView}>
            <View style={styles.boxleader}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
                1
              </Text>
            </View>
            <View style={styles.boxleader}>
              <View
                style={{
                  height: 25,
                  width: 25,
                  borderRadius: 12.5,
                  backgroundColor: 'grey',
                }}></View>
            </View>
            <View style={styles.boxleader}>
              <View
                style={{
                  height: 10,
                  backgroundColor: 'grey',
                  width: 140,
                }}></View>
            </View>
            <View style={styles.boxleader1}>
              <View
                style={{height: 4, width: 25, backgroundColor: 'grey'}}></View>
            </View>
          </View>
        </View>
        <View style={styles.drawLineModel}>
          <></>
        </View>
        <View
          style={{
            marginTop: 20,
            height: 40,
            width: 150,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.textname}>Team Activities</Text>
        </View>
        <View style={styles.boxView}></View>
        <View
          style={{
            marginTop: 20,
            height: 40,
            width: 80,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.textname}>Recent</Text>
        </View>
        <View style={styles.rowView}>
          <View style={styles.boxViewsmall}></View>
          <View style={styles.boxViewsmall}></View>
          <View style={styles.boxViewsmall}></View>
        </View>

        <View style={{height: 200}}></View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
    top: 110,
    position: 'absolute',
    left: 150,
  },
  drawLine: {
    borderBottomColor: '#1E1E1E',
    borderBottomWidth: 0.6,
    width: 360,
    // marginTop: 10,
    alignSelf: 'center',
  },
  verticleLine: {
    height: '65%',
    width: 0.5,
    backgroundColor: '#fff',
    marginTop: 15,
  },
  HeaderText: {
    marginHorizontal: 44,
    fontSize: 14,
  },
  HeaderText1: {
    marginHorizontal: 44,
    fontSize: 16,
    fontWeight: 'bold',
  },
  backgroundImg: {
    height: 185,
  },
  drawLineModel: {
    borderBottomColor: '#1E1E1E',
    borderBottomWidth: 0.6,
    width: 360,
    alignSelf: 'center',
    marginTop: 15,
  },
  textinput: {
    marginTop: 10,
  },
  textname: {
    paddingLeft: 10,
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  textnameMonth: {
    paddingLeft: 10,
    color: 'white',
    fontSize: 13,
  },
  textinputteam: {
    paddingLeft: 10,
    color: 'grey',
  },
  dotsstyle: {
    height: 22,
    width: 22,
    tintColor: '#fff',
    resizeMode: 'contain',
    marginRight: 20,
  },
  boxView: {
    height: 190,
    width: 320,
    // backgroundColor:'red',
    marginHorizontal: 20,
    marginTop: 5,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'grey',
  },
  boxViewsmall: {
    height: 70,
    width: 120,
    marginHorizontal: 10,
    marginTop: 5,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'grey',
  },
  smallbox: {
    height: 40,
    width: 320,
    // backgroundColor:'red',
    marginHorizontal: 20,
    marginTop: 5,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    backgroundColor: 'red',
    height: 50,
    width: 65,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  WritepostView: {
    backgroundColor: 'grey',
    height: 36,
    marginTop: 20,
    width: 315,
    marginLeft: 25,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontxt: {
    fontSize: 11,
    color: 'white',
    fontWeight: '500',
  },
  boxleader: {
    height: 30,
    // backgroundColor:'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  boxleader1: {
    height: 30,
    // backgroundColor:'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 90,
  },
  imagewrite: {
    height: 50,
    width: 65,
    borderRadius: 5,
  },
  imagewriteview: {
    flexDirection: 'row',
  },
  smalltitle: {
    fontSize: 10,
    color:'#fff'
  },
  innerview: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1E1E1E',
  },
  backbuttonimage: {
    height: 30,
    width: 30,
    marginLeft: 20,
  },
  innerview2: {
    height: 150,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  teamnameview: {
    height: 40,
    marginTop: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  teamnametxt: {
    color: 'white',
    fontWeight: 'bold',
    margin: 10,
    fontSize: 18,
  },
  inviteview: {
    height: 30,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginHorizontal: 150,
    marginTop: 5,
    borderRadius: 6,
  },
  inviteviewtxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
  rowView:{
    flexDirection:'row'
  },
  imagestyle:{
    tintColor: 'grey',
     height: 10,
      width: 10
    },
});

export default InviteScreen;

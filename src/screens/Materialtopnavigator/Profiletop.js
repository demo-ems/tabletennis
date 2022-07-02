import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import editimage from '../../../assets/images/edit.png';
import rightarrow from '../../../assets/images/right-arrow.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Profiletop = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.drawline}>
        <></>
      </View>
      <ScrollView>
      <View style={styles.bioView}>
        <View style={styles.editBioview}>
          <Text style={styles.bioTxt}>Bio</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.editBioview}>
            <Image source={editimage} style={styles.edit} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.biodiscriptionView}>
        <Text style={styles.biodiscriptiontxt}>
          You haven't writting anything yet...
        </Text>
      </View>
      <View style={styles.bioView}>
        <View style={styles.editPersonaldetview}>
          <Text style={styles.bioTxt}>Personal details</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.editBioview}>
            <Image source={editimage} style={styles.edit} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.mainBasicview}>
        <View style={styles.basicInfoVIew}>
          <Text style={styles.Basicinfotxt}>BASIC INFO</Text>
        </View>
        <View style={[styles.basicInfoVIew, {marginLeft: windowWidth / 2.4}]}>
          <Text style={styles.visibleTxt}>Visible to: only you-</Text>
        </View>
      </View>
      <View style={styles.drawline1}>
        <></>
      </View>
      <View style={styles.box}>
        <View style={styles.boxrow}>
          <View style={styles.style}>
            <Text style={styles.txt}>Gender</Text>
          </View>
          <View style={styles.style1}>
            <Text style={styles.txt1}>Male</Text>
          </View>
        </View>
      </View>
      <View style={styles.drawline1}>
        <></>
      </View>
      <View style={styles.box}>
        <View style={styles.boxrow}>
          <View style={styles.style}>
            <Text style={styles.txt}>Height</Text>
          </View>
          <View style={styles.style1}>
            <Text style={styles.txt1}>----</Text>
          </View>
        </View>
      </View>
      <View style={styles.drawline1}>
        <></>
      </View>
      <View style={styles.box}>
        <View style={styles.boxrow}>
          <View style={styles.style}>
            <Text style={styles.txt}>Grip</Text>
          </View>
          <View style={styles.style1}>
            <Text style={styles.txt1}>----</Text>
          </View>
        </View>
      </View>
      <View style={styles.drawline1}>
        <></>
      </View>
      <View style={styles.box}>
        <View style={styles.boxrow}>
          <View style={styles.style}>
            <Text style={styles.txt}>Playing Style</Text>
          </View>
          <View style={styles.style1}>
            <Text style={styles.txt1}>----</Text>
          </View>
        </View>
      </View>
      <View style={styles.drawline1}>
        <></>
      </View>
      <View style={styles.box}>
        <View style={styles.boxrow}>
          <View style={styles.style}>
            <Text style={styles.txt}>Career</Text>
          </View>
          <View style={styles.style1}>
            <Text style={styles.txt1}>----</Text>
          </View>
        </View>
      </View>
      <View style={styles.drawline1}>
        <></>
      </View>
      <View style={styles.box}>
        <View style={styles.boxrow}>
          <View style={styles.style}>
            <Text style={styles.txt}>Achievement</Text>
          </View>
          <View style={styles.style1}>
            <Text style={styles.txt1}>----</Text>
          </View>
        </View>
      </View>
      <View style={styles.drawline1}>
        <></>
      </View>
      <View style={styles.box}>
        <View style={styles.boxrow}>
          <View style={styles.style}>
            <Text style={styles.txt}>Nationality</Text>
          </View>
          <View style={styles.style1}>
            <Text style={styles.txt1}>----</Text>
          </View>
        </View>
      </View>
      <View style={styles.drawline1}>
        <></>
      </View>
      <View style={styles.box}>
        <View style={styles.boxrow}>
          <View style={styles.style}>
            <Text style={styles.txt}>Team</Text>
          </View>
          <View style={styles.style1}>
            <Text style={styles.txt1}>----</Text>
          </View>
        </View>
      </View>
      <View style={styles.drawline1}>
        <></>
      </View>
      <View style={styles.box}>
        <View style={styles.boxrow}>
          <View style={styles.style}>
            <Text style={styles.txt}>Club</Text>
          </View>
          <View style={styles.style1}>
            <Text style={styles.txt1}>----</Text>
          </View>
        </View>
      </View>
      <View style={styles.drawline1}>
        <></>
      </View>
      <View style={styles.box}>
        <View style={styles.boxrow}>
          <View style={styles.style}>
            <Text style={styles.txt}>Favorite Server</Text>
          </View>
          <View style={styles.style1}>
            <Text style={styles.txt1}>----</Text>
          </View>
        </View>
      </View>
      <View style={styles.drawline1}>
        <></>
      </View>
      <View style={styles.box}>
        <View style={styles.boxrow}>
          <View style={styles.style}>
            <Text style={styles.txt}>Awards</Text>
          </View>
          <View style={styles.style1}>
            <Text style={styles.txt1}>----</Text>
          </View>
        </View>
      </View>
      <View style={styles.drawline1}>
        <></>
      </View>
      <View style={styles.box}>
        <View style={styles.boxrow}>
          <View style={styles.style}>
            <Text style={styles.txt}>Tournament Played</Text>
          </View>
          <View style={styles.style1}>
            <Text style={styles.txt1}>----</Text>
          </View>
        </View>
      </View>
      <View style={styles.drawline1}>
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
  style: {
    // backgroundColor: 'orange',
    width: 170,
    justifyContent: 'center',
  },
  style1: {
    // backgroundColor: 'orange',
    width: 120,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  txt: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    paddingLeft: 15,
  },
  txt1: {
    color: 'grey',
    fontSize: 15,
    fontWeight: '500',
    paddingRight: 15,
  },
  drawline: {
    borderBottomColor: '#fff',
    borderBottomWidth: 0.6,
    width: '100%',
    marginTop: 10,
    alignSelf: 'center',
  },
  drawline1: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.6,
    width: windowWidth,
    alignSelf: 'center',
  },
  bioView: {
    // backgroundColor:'red',
    width: windowWidth,
    height: windowHeight / 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bioTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    // paddingLeft: 10,
  },
  edit: {
    resizeMode: 'contain',
    height: 25,
    width: 25,
    tintColor: 'white',
  },
  editBioview: {
    // backgroundColor:'blue',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  biodiscriptionView: {
    // backgroundColor:'blue',
    height: windowWidth / 4,
    width: windowWidth,
  },
  biodiscriptiontxt: {
    color: 'grey',
    padding: 12,
  },
  editPersonaldetview: {
    // backgroundColor:'blue',
    height: 50,
    width: 200,
    justifyContent: 'center',
    // alignItems:'center',
    marginLeft: 15,
  },
  mainBasicview: {
    flexDirection: 'row',
    height: 40,
    // backgroundColor: 'blue',
    width: windowWidth,
    marginTop: 10,
  },
  basicInfoVIew: {
    // backgroundColor: 'orange',
    justifyContent: 'center',
    // alignItems: 'center',
    height: 40,
    width: 120,
  },
  Basicinfotxt: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 14,
    paddingLeft: 15,
  },
  visibleTxt: {
    color: 'grey',
    // fontWeight:'bold',
    fontSize: 10,
  },
  box: {
    height: 40,
    width: windowWidth,
    // backgroundColor: 'red',
    justifyContent: 'center',
  },
  boxrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Profiletop;

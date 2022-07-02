import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, ScrollView, Modal, Pressable, TextInput, TouchableWithoutFeedback } from 'react-native';
import remove from '../../../assets/images/remove.png';
import icon from '../../../assets/users/ttnett.jpg';
import check from '../../../assets/images/check.png';



const UserPayment = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.backView}>
                <TouchableOpacity>
                    <Image style={styles.dotsstyle} source={remove} />
                </TouchableOpacity>
            </View>
            <View style={styles.IconView}>
                <Image style={styles.Icon} source={icon} />
            </View>
            <View style={styles.headingtxtview}>
                <Text style={styles.headingtxt}>Develop your complete game.</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 16, width: 16, borderRadius: 8, backgroundColor: 'red', marginHorizontal: 15, justifyContent: 'center', alignItems: 'center' }}><Image style={styles.checkstyle} source={check} /></View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -3, marginLeft: 5 }}>
                    <Text style={styles.txtheading}>Access to your full workout history</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ height: 16, width: 16, borderRadius: 8, backgroundColor: 'red', marginHorizontal: 15, justifyContent: 'center', alignItems: 'center' }}><Image style={styles.checkstyle} source={check} /></View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -3, marginLeft: 5 }}>
                    <Text style={styles.txtheading}>Year-round analysis and skill ratings</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ height: 16, width: 16, borderRadius: 8, backgroundColor: 'red', marginHorizontal: 15, justifyContent: 'center', alignItems: 'center' }}><Image style={styles.checkstyle} source={check} /></View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -3, marginLeft: 5 }}>
                    <Text style={styles.txtheading}>Intelligent traning program</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ height: 16, width: 16, borderRadius: 8, backgroundColor: 'red', marginHorizontal: 15, justifyContent: 'center', alignItems: 'center' }}><Image style={styles.checkstyle} source={check} /></View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: -3, marginLeft: 5 }}>
                    <Text style={styles.txtheading}>Personalized daily workouts</Text>
                </View>
            </View>

            <View style={styles.lowerhedingView}>
                <Text style={styles.lowerheding}>A full year of traning for less than one session with a personal trainer.</Text>
            </View>
            <View style={{height:20,flexDirection:'row',marginTop:105, justifyContent:'center', alignItems:'center'}}>
            <View>
                <Text style={styles.txt}>Includes </Text>
            </View>
            <View>
                <Text style={styles.txtmiddle}>7-day free trial</Text>
            </View>
            <View>
                <Text style={styles.txt}> period. Cancel anytime.</Text>
            </View>
            </View>
            <View style={{height:50,backgroundColor:'red', width:330, marginHorizontal:16,borderRadius:5,marginTop:5, justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'bold', color:'white'}}>Subscribe Now</Text>
                <Text style={{fontWeight:'500', color:'white'}}>9.99 Euro per month</Text>
            </View>
                <TouchableOpacity style={{ marginTop:30, alignItems:'center'}}>
                    <Text style={{fontSize:11, fontWeight:'500', color:'grey'}}>MORE OPTIONS</Text>
                </TouchableOpacity>

        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'

    },
    backView: {
        height: 70,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    dotsstyle: {
        height: 30,
        width: 30,
        resizeMode: 'contain',
        marginRight: 20
    },
    Icon: {
        height: 100,
        width: 100,
        resizeMode: 'contain',

    },
    IconView: {
        height: 100,
        // backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingtxtview: {
        height: 60,
        // backgroundColor:'red',
        alignItems: 'center'
    },
    headingtxt: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#FFFDFA'
    },
    txtheading: {
        fontSize: 13,
        fontWeight: '600',
        color: 'grey'
    },
    checkstyle: {
        height: 10, width: 10,
        tintColor: 'white'
    },
    lowerhedingView: {
        height: 50,
        // backgroundColor: 'red',
        width: 230,
        marginLeft: 60,
        marginTop: 40
    },
    lowerheding: {
        color: 'white',
        fontSize: 14,
        padding: 2,
        fontWeight: '300'
    },
    txt:{
        fontSize:10,
        color:'grey',
        fontWeight:'500'
    },
    txtmiddle:{
        fontSize:10,
        fontWeight:'bold',
        color:'white'
    },
});

export default UserPayment;

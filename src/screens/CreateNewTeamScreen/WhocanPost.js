import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text, ScrollView, Modal, Pressable, TextInput } from 'react-native';
import profileImage from '../../../assets/images/user.png';
import Back from '../../../assets/images/back.png';
import { RadioButton } from 'react-native-paper';



const WhoCanPost = ({navigation}) => {

    const [checked, setChecked] = React.useState('second');

    return (
        <View style={styles.container}>
            <View style={{ height: 45, justifyContent: 'center', backgroundColor: "#1E1E1E", }} >
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={()=> {navigation.navigate("CreateNewTeam")}}>
                        <Image style={{ height: 30, width: 30, marginLeft: 10, }} source={Back} />
                    </TouchableOpacity>
                    <Text style={styles.HeaderText}>Create Team</Text>
                </View>
            </View>
            <View style={styles.TitletxtView}>
                <Text style={styles.Titletxt}>Who can post</Text>
            </View>
            <View style={styles.drawLine}>
                <></>
            </View>
            <View style={{ marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginLeft: 10, justifyContent: 'center', height: 30 }}>
                        <RadioButton
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                            uncheckedColor="grey"
                            color='red'
                            style={styles.RadioButton}
                        />
                    </View>
                    <View style={{ justifyContent: 'center', height: 30 }}>
                        <Text style={styles.RadiobtnTxt}>Admins only</Text>
                    </View>
                </View>
                <View style={styles.drawLine}>
                    <></>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ marginLeft: 10, justifyContent: 'center', height: 30 }}>
                        <RadioButton
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                            uncheckedColor="grey"
                            style={styles.RadioButton}
                            color='red'
                        />
                    </View>
                    <View style={{ justifyContent: 'center', height: 30 }}>
                        <Text style={styles.RadiobtnTxt}>All members</Text>
                    </View>
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
        backgroundColor: 'black'
    },
    HeaderText: {
        fontSize: 15,
        padding: 10,
        marginLeft: 5,
        padding: 5,
    },
    TitletxtView: {
        marginTop: 10,
        height:50
    },
    RadiobtnTxt: {
        fontSize: 16,
        padding: 10,
        padding: 5,
        fontWeight: 'bold',
        color: 'white'
    },
    Titletxt: {
        paddingLeft: 20,
        fontSize: 32,
        fontWeight: 'bold',
        color: 'white'
    },
    Titletxt1: {
        paddingLeft: 20,
        fontSize: 17,
        fontWeight: '400',
        color: 'grey',
        padding: 0
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
        width: 40
    },
    txtheading: {
        fontSize: 13,
        fontWeight: '500',
        color: 'grey',
        paddingLeft: 5
    },
    txtheading2: {
        fontSize: 13,
        fontWeight: '500',
        color: 'grey',
        paddingLeft: 5,
        marginTop: 10
    },
});

export default WhoCanPost;

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, KeyboardAvoidingView } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';


const LiveStreamPlay = (...props) => {

    const [thumbnail, setThumbnail] = useState("");

    useEffect(() => {
        if (props[0].route.params && props[0].route.params.item) {
            setThumbnail(props[0].route.params.item);
        }
    }, [props])

    return (
        <View style={styles.container}>
                <Image style={{ height: 250, width: '100%' }} source={{ uri: thumbnail.thumbnail }} />
                <View style={{ backgroundColor: '#1E1E1E', height: 60 }}>
                    <View style={{ flexDirection: 'row', padding: 10, width: '90%' }} >
                        <Image style={{ width: 40, height: 40, borderRadius: 20, }} source={{ uri: thumbnail.user?.image }} />
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{ color: '#fff', fontWeight: '500', fontWeight: 'bold', fontSize: 18, marginTop: 4 }}>{thumbnail.user?.name}</Text>
                            <Text style={{ color: 'grey', fontWeight: '500', fontWeight: 'bold', fontSize: 10 }}>{thumbnail.title}</Text>
                        </View>
                        <View style={{ height: 25, width: 70, borderRadius: 5, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center', margin: 6 }} >
                            <TouchableOpacity onPress={() => { console.warn("pressed") }} >
                                <Text style={{ fontWeight: 'bold', color: 'white' }} >FOLLOW</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ height: 40, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }} >
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}> Live Chats - </Text>
                </View>
                <View style={{ height: 300, width: '100%', backgroundColor: '#00000099' }}></View>
                <View style={{ flexDirection: 'row' }}>
                    <CustomTextInput style={{ marginHorizontal: 10 }} placeholder="you can send a chats.." />
                    <TouchableOpacity>
                        <Image style={{ width: 25, height: 25, resizeMode: 'contain', position: 'absolute', tintColor: '#fff', right: 20, top: 15 }} source={require("../../../assets/images/send.png")} />
                    </TouchableOpacity>
                </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
    },
});

export default LiveStreamPlay;

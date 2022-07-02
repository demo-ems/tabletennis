import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';


const SkillRatings = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <Text style={{color:'red'}}>skills rating</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
 });

export default SkillRatings;

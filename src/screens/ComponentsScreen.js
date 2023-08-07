
import React from "react";
import { Text, StyleSheet, View} from "react-native";

const ComponentScreen = () => {
    const gretting = {color : "Red"} // you can define varibale/object which can be used inside of funtion
  return <View>
    <Text style={styles.text1}>Hi! Bhagwan from Component screen </Text>
    <Text style={styles.text2}>2nd Line of Color : -- {gretting.color} </Text>   
  </View>
 //inorder to use variable/object make sure to add it in curly braces {}. 
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 30,
  },
  text2:{
    fontSize : 20,
  },
});

export default ComponentScreen; 
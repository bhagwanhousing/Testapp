import React from "react";
import { Text, StyleSheet, View, Button} from "react-native";

const ColorDetails = ({title,onDecrease,onIncrease}) => {
  return <View>
    <Text style={styles.text1}>{title}</Text> 
    <Button onPress={onIncrease} title={`Increase ${title}`}  />
    <Button onPress={onDecrease} title={`Decrease ${title}`} />
  </View>
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 30,
  },
});

export default ColorDetails; 
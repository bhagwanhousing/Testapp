import React,{useState}from "react";
import { Text, StyleSheet, View,Button} from "react-native";

const CounterScreen = () => {
    // let counter = 0;
    const [counter, setCounter] = useState(0); //useState is being used instead of normal variable inorder to make changes appears on app.
                                            // (0) is default value being asigned to variable 'counter'.
  return (
  <View>
      <Text style={styles.header}> Counter </Text>
      <Button 
        onPress={() => {
            // counter++;  //this does not work's 
            setCounter(counter + 1);  // setCounter is being used to make changes in value of counter. You can use any name instead of 'setCounter' here.
            }}
        title="Increase"
      />
      <Button
        onPress={() => {
            // counter--;
            setCounter(counter - 1);
        }} 
        title="Decrease"
      />
      <Text style={styles.text1}>Current Count : {counter} </Text>
  </View>
  )
};

const styles = StyleSheet.create({
    header : {
        fontSize: 40,
    },
  text1: {
    fontSize: 25,
    marginVertical : 20,
  },
});

export default CounterScreen;
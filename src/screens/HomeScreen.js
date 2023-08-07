import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity} from "react-native";

const HomeScreen = (props) => {
  return( <View>
    <Text style={styles.text}> Hello! Bhagwan Bansal </Text>
    <Button 
      onPress={() => props.navigation.navigate('Components')} //onPress -- function which takes a callBack Fn as a paramter and perform what to do on pressing.
      title="Go to Component Page"> 
    </Button> 
    <Button 
      onPress={() => props.navigation.navigate('List')} 
      title="Go to List Screen">
    </Button>
    <Button 
      onPress={() => props.navigation.navigate('ImageScreen')} 
      title="Go to Image Screen">
    </Button>
    <Button 
      onPress={() => props.navigation.navigate('CounterScreen')} 
      title="Go to Counter Screen">
    </Button>
    <Button 
      onPress={() => props.navigation.navigate('ColorScreen')} 
      title="Go to Color Screen">
    </Button>
    <Button 
      onPress={() => props.navigation.navigate('SquareScreen')} 
      title="Go to Square Screen">
    </Button>
    <Button 
      onPress={() => props.navigation.navigate('TextScreen')} 
      title="Go to Text Screen">
    </Button>
    {/* <TouchableOpacity onPress={() => props.navigatation.navigate('ReducerScreen')}>
      <Text>Go to Reducer Screen</Text>
    </TouchableOpacity> */}
    <Button 
      onPress={() => props.navigation.navigate('WalletScreen')} 
      title="Go to Wallet Screen">
    </Button>
    <Button 
      onPress={() => props.navigation.navigate('TodoScreen')} 
      title="Go to Todo Screen">
    </Button>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button:{
    marginVertical : 10,
  },
});

export default HomeScreen;



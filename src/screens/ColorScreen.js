import React,{useState}from "react";
import { Text, StyleSheet, View,Button} from "react-native";
import { FlatList } from "react-native-gesture-handler";

const ColorScreen = () => {
  const [color, setColor] = useState([randomRGB()]);  //by default you will c a random color
  console.log(color)
  return (
    <View>
      <Button 
        title="Add a Color"
        onPress={() => {
          setColor([...color,randomRGB()]); // will store values of rgb colors in color array.
        }}
      />
      {/* <View style={{height:100, width:100, backgroundColor:randomRGB(),marginVertical : 15, marginLeft:15}} />  */}
      <FlatList
        data = {color}
        renderItem={({item}) => {
          return (
          <View style={{ height:100, width:100, backgroundColor:item,marginVertical : 5, marginLeft:5}} />
          );
        }}
      />
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random()*256);
  const green = Math.floor(Math.random()*256);
  const blue = Math.floor(Math.random()*256);

  return `rgb(${red},${green},${blue})`;
}
const styles = StyleSheet.create({});

export default ColorScreen; 
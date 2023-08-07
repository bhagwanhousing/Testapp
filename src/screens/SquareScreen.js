import React,{useState} from "react";
import {StyleSheet, View} from "react-native";
import ColorDetails from "../components/ColorDetails";

const colorFilter = 10
const SquareScreen = () => {
    const [red,setRed] = useState(0);
    const [green,setGreen] = useState(0);
    const [blue,setBlue] = useState(0);
    
    const setColor = (color,colorFilter) => {
        switch(color){
            case "Red" :
                red + colorFilter > 255 || red + colorFilter < 0 ? null : setRed(red + colorFilter);
                return;
            case "Green" :
                green + colorFilter > 255 || green + colorFilter < 0 ? null : setGreen(green + colorFilter);
                return;
            case "Blue" :
                blue + colorFilter > 255 || blue + colorFilter < 0 ? null : setBlue(blue + colorFilter);
                return;
        }
    };
    return (
    <View>
        <ColorDetails
            title="Red"
            onIncrease = {() => setColor("Red",colorFilter)}
            onDecrease = {() => setColor("Red",-1 * colorFilter)}
            />
        <ColorDetails 
            title="Green"
            onIncrease = {() => setColor('Green',colorFilter)}
            onDecrease = {() => setColor('Green',-1 * colorFilter)}
            />
        <ColorDetails 
            title="Blue"
            onIncrease = {() => setColor('Blue',colorFilter)}
            onDecrease = {() => setColor('Blue',-1 * colorFilter)}
        />
        <View 
        style={{ 
                height:100,
                width:100, 
                backgroundColor: `rgb(${red},${green},${blue})`,
                marginVertical:50, 
                marginLeft:50
            }}
        />
    </View>
  );
 
};

const styles = StyleSheet.create({});

export default SquareScreen; 
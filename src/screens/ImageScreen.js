import React from "react";
import { Text,View,StyleSheet } from "react-native";
import ImageDetails from "../components/ImageDetails";

const ImageScreen = () => {
    return <View>
    <Text style={styles.header}> Image Screen</Text>
    <ImageDetails title = "Forest" imgScr={require('../../assets/forest.jpg')} score = "9"></ImageDetails>
    <ImageDetails title = "Beach" imgScr={require('../../assets/beach.jpg')} score = "7"></ImageDetails>
    <ImageDetails title = "Mountain" imgScr={require('../../assets/mountain.jpg')} score = "8"></ImageDetails>    
    </View>
   
};

const styles = StyleSheet.create({
    header : {
        fontSize : 30,
        fontWeight : "400"
    },
})

export default ImageScreen;
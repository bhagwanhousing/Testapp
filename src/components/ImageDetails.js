import React from "react";
import { Text,View,StyleSheet,Image } from "react-native";

const ImageDetails = (props) => {
    return <View>
    <Text style={styles.header}> --- {props.title} --- </Text>
    <Image source={props.imgScr}></Image>
    <Text style={styles.text}> Likes : {props.score} </Text>
    </View>
     
};

const styles = StyleSheet.create({
    header : {
        fontSize : 30,
        fontWeight : "300",
    },
    text : {
        fontSize : 20,
        fontWeight : "200",
    }
})

export default ImageDetails;
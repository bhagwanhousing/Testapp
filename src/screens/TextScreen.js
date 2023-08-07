import React,{useState} from "react";
import { Text, StyleSheet, View,TextInput} from "react-native";

const TextScreen = () => {
    const [Password,setPassword] = useState("");
   return <View>
        <Text style = {styles.header}> Enter Password : </Text>
        <TextInput
            style = {styles.input}
            value={Password} //must for TextInput.
            onChangeText={(passVal) => setPassword(passVal)} //must for TextInput.
            placeholder="Enter Pass"
        />
        {Password.length < 4 ? <Text style = {styles.text}>Password (Min. 4 Char)</Text> : null}
   </View>
};

const styles = StyleSheet.create({
    input : {
        margin : 20,
        borderColor : "Black",
        height : 30,
        borderWidth: 1,
        marginVertical : 2
    },
    header : {
        fontSize : 20,
        marginVertical : 20
    },
    text : {
        fontSize : 15,
        marginVertical : 10
    }
});

export default TextScreen;
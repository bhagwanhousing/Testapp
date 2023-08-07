import React from "react";
import { Text, StyleSheet,FlatList, View} from "react-native";

const ListScreen = () => {
    const friends = [
                    {name : "bhagwan",age : 20},
                    {name : "Bansal",age : 21}, 
                    {name : "Hello",age : 22}, 
                    {name : "world",age : 25},
                    {name : "Bansal",age : 23}, 
                    {name : "Hello",age : 26}
                ];

    return (
        <View>
            <Text style={styles.text}> List Screen </Text>
            <FlatList
            // horizontal //for enabling horizontal scrolling 
            data={friends} 
            renderItem={(object) => {  //'object' used here return object with two fields { Item :{name .. }, Index : }
                return <Text style = {styles.text1}>{object.index + 1}. Name : {object.item.name} - Age : {object.item.age}</Text>
            }}>
            </FlatList>
        </View>
       
        //flatlist contains 2 parameters maninly for working.
        // 1. data --  for data source to be listed 
        // 2. renderItem -- to render the data objects, styling of data object. 
    )
};

const styles = StyleSheet.create({
    text1 : {
        fontSize : 20,
        marginVertical : 50
    },
    text:{
        fontSize : 35,
    }
});
export default ListScreen;
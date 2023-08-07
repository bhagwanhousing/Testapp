import React,{useState} from "react";
import { Text, StyleSheet, View,Button,TextInput,TouchableOpacity,Alert} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import Icon1 from 'react-native-vector-icons/Feather'; 

const TodoScreen = () => {
    const [data,setData] = useState([])
    const [temp,setTemp] = useState("")
    const [id,setId] = useState(1);

    const saveTodo = () => {
        if(temp.trim() !== '')
        {
            const arr = {
                id : id,
                text : temp,
                marked : false,
            }
            setId(id + 1);
            setData([...data,arr]);
            setTemp('');
        } 
    }
    const deleteVal = (id) => {
        const updatedArr = data.filter((tem) => tem.id !== id);
        setData(updatedArr);
    };
    const markVal = (id) => {
        const index = data.findIndex((tem) => tem.id === id);
        const updatedArr = [...data];
        updatedArr[index] = {...updatedArr[index],marked : !updatedArr[index].marked};
        setData(updatedArr);
    };
    const editVal = (id) => {
    
        const index = data.findIndex((tem) => tem.id === id);
        const updatedArr = [...data];
        console.log(updatedArr[index]);
        
        updatedArr[index].text = temp;
        setData(updatedArr);
        setTemp('');
       
    }
    return (
        <View> 
            <Text style = {styles.header}> Todo App </Text>
            <TextInput
                style = {styles.input}
                value = {temp}
                onChangeText={(newTodo) => setTemp(newTodo)}
            />
            <Button 
                title="ADD"
                onPress={saveTodo}
            />
            <FlatList
                data={data}
                renderItem={(object) => {
                    return (
                        <View>
                        <Text> 
                            <TouchableOpacity onPress={() => markVal(object.item.id)}>
                                <Icon1 name = {object.item.marked ? "check-square" : "square"} size={21} color="grey" marginRight={5}/>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => editVal(object.item.id)}>
                            <Text style = {object.item.marked ? styles.markedText : styles.normalText}>{object.item.text}</Text>
                            </TouchableOpacity>
                           
                            <TouchableOpacity onPress={() => deleteVal(object.item.id)}>
                                <Icon name="delete" size={24} color="red" marginLeft={5}/>
                            </TouchableOpacity> 
                        </Text>
                        </View>
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    header : {
        fontSize : 30,
    },
    input : {
        borderColor : "Black",
        height : 35,
        borderWidth: 1,
        margin : 5,
        fontSize: 20
    },
    input1 : {
        borderColor : "Red",
        height : 35,
        borderWidth: 1,
        margin : 10,
        fontSize: 20
    },
    normalText: {
        fontSize: 25,
        marginLeft : 1,
    },
    markedText: {
        fontSize: 25,
        marginLeft : 1,
        textDecorationLine: 'line-through'
    },
});

export default TodoScreen;
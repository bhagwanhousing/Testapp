import React,{useState} from "react";
import {View,Button,TextInput} from "react-native";
import styles from "../components/styles";

const TodoInput = ({saveTodo}) => {
    const [temp,setTemp] = useState("");

    const handleSaveTodo = () => {
        if (temp.trim() !== '') {
            saveTodo(temp);
            setTemp('');
        }
    };
    return (
        <View>
             <TextInput
                style = {styles.input}
                value = {temp}
                onChangeText={(newTodo) => setTemp(newTodo)}
            />
            <Button 
                title="ADD"
                onPress={handleSaveTodo}
            />
        </View>
    );
};

export default TodoInput;
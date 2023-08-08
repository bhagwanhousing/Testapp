import React from "react";
import { View,TextInput,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import Icon1 from 'react-native-vector-icons/Feather';
import styles from "./styles"; 

const TodoItem = ({item,markVal,editVal,deleteVal}) => {
    return (
        <View style={styles.itemRefer}>
            <TouchableOpacity onPress={() => markVal(item.id)}>
                <Icon1 name = {item.marked ? "check-square" : "square"} size={21} color="grey" marginRight={5}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => editVal(item.id)}>
            <TextInput style = {item.marked ? styles.markedText : styles.normalText} value={item.text} onChangeText={(newTodo) => editVal(item.id,newTodo)} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => deleteVal(item.id)}>
                <Icon name="delete" size={24} color="red" marginLeft={5}/>
            </TouchableOpacity> 
        </View>
    );
};

export default TodoItem;
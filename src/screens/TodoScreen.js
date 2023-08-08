import React,{useState} from "react";
import { Text,View} from "react-native";
import styles from "../components/styles";
import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";

const TodoScreen = () => {
    const [data,setData] = useState([]);
    const [id,setId] = useState(1);

    const saveTodo = (temp) => {
        const arr = {
                id : id,
                text : temp,
                marked : false,
            }
            setId(id + 1);
            setData([...data,arr]);
    };
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
    const editVal = (id,newTodo) => {
        const index = data.findIndex((tem) => tem.id === id);
        const updatedArr = [...data];
        updatedArr[index].text = newTodo;
        setData(updatedArr); 
        console.log(updatedArr);
    }
    return (
        <View> 
            <Text style = {styles.header}> Todo App </Text>
            <TodoInput
                saveTodo={saveTodo}        
            />
            <TodoList 
                data = {data}
                markVal = {markVal}
                editVal = {editVal}
                deleteVal = {deleteVal}
            />
        </View>
    )
};

export default TodoScreen;
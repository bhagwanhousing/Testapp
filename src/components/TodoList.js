import React from "react";
import { FlatList } from "react-native-gesture-handler";
import TodoItem from "../components/TodoItem";

const TodoList = ({data,markVal,editVal,deleteVal}) => {
    return (
        <FlatList
            data={data}
            renderItem={({item}) => (
                <TodoItem
                    item = {item}
                    markVal = {markVal}
                    editVal = {editVal}
                    deleteVal = {deleteVal}
                />
            )}
        />
    );
};

export default TodoList;
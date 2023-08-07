import React,{useReducer} from "react";
import { Text, StyleSheet, View,Button,Alert} from "react-native";

const WalletScreen = () => {
    const wallet = {
        money : 0
    }
    const Reducer = (state,action) => {
        switch(action.type){
            case "ADD_MONEY" : 
            return {
                money : state.money + 100
            }
            case "REMOVE_MONEY" : 
            return {
                money : state.money - 100
            }
            default : return state
        }
    }
    // const addMoney = () => {
    //     action ({
    //         type : "Add Money"
    //     });
    // }
    // const removeMoney = () => {
    //     action ({
    //         type : "Remove Money"
    //     });
    // }
    const [state,action] = useReducer(Reducer,wallet);

    return (
        <View>
            <Button
                title="Add Money"
                onPress={() => {
                    action ({
                        type : "ADD_MONEY"
                    });
                    // Alert.alert("Money Added", `Current Balance $${state.money + 100}`)
                }}
            />
            <Button
                title="Remove Money"
                onPress={() => {
                    if(state.money > 0){
                        action ({
                        type : "REMOVE_MONEY"
                        })
                    }else{
                        Alert.alert("Insufficient Balance", `Balance is $${state.money}`)
                    }
                }}
            />
            <Text style = {styles.text}> Current Amount : ${state.money}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    text : {
        fontSize : 20,
        marginTop : 20
    }
});

export default WalletScreen;
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    header : {
        fontSize : 30,
    },
    input : {
        height : 35,
        borderWidth: 1,
        margin : 5,
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
    itemRefer : {
        flexDirection : "row",
        alignItems : "center"
    }
});

export default styles;
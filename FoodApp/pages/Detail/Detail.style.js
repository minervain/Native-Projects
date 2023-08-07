import { StyleSheet,Dimensions } from "react-native";


export default StyleSheet.create({

    contain:{
        flex:1,

    },
    image:{
        width:Dimensions.get('window').width / 1,
        height:Dimensions.get('window').height / 3, 
        resizeMode:'cover'
    },
    title:{
        fontSize:22,
        padding:10,
        fontWeight:'bold'
    },
    desc:{
        fontSize:16,
        padding:5
    },


})
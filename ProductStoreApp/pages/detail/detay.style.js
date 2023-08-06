import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({

    contain:{flex:1,
    },
    image:{
width:Dimensions.get('window').width / 1,
height:Dimensions.get('window').height / 3, 
resizeMode:'contain' ,
backgroundColor:'white'  },
    price:{
        fontSize:16,
        textAlign:'right',
        paddingRight:25

    },
    desc:{
        fontSize:16,
        fontWeight:'bold',
        padding:20,

        

    },
    title:{
        padding:20,
        fontSize:25,
        fontWeight:'bold',

        

    }

})
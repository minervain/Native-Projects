import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        padding:8
        
    },
    image: {
        height: 100,
        width: 100,
        borderRadius:50
    },
    alt_container: {
        flexDirection:'column',
        flex:1,
        padding:10,
        justifyContent:"center"
    },
    isim: {
        fontSize:17

    },
    year: {
        paddingLeft:10
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
        
    },
    alt2_container:{
        flexDirection:"row",
        flex:1,
        alignItems:"center"

    }

})
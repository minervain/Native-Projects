import React from "react";
import { Text,View} from "react-native";
import ButtonC from "../components/Button/Button";
import { StyleSheet } from "react-native";


function HomeScreen({navigation}) {

    let sayfaGevisi=()=>(
        navigation.navigate('SignIn')
    )

    


    return (
      <View style={styles.container} >
        <Text style={styles.items}>Minervain</Text>
        <ButtonC title="Kayıt oluştur" onPress={sayfaGevisi}></ButtonC>
      </View>
    );
  }
  export default HomeScreen



 const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    items:{
        fontSize:30,
        fontWeight:'bold'


    }
  })
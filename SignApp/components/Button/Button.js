import React from "react";
import { View,Button } from 'react-native'
import styles from './Button.style'

const ButtonC = (props)=>{


    return(

       <View style={styles.container}>
        <Button title={props.title} onPress={props.onPress}></Button>
       </View> 
    )
}

export default ButtonC



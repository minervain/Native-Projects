import React from "react";
import { View,TextInput,Text } from "react-native";
import styles from './Input.style'


const Input = (props)=>{


return(
    <View style={styles.container}>
        <Text>{props.label}</Text>
        <TextInput
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}

        
        />
    </View>
)

}

export default Input
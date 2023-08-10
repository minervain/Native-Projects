import React from "react";
import { TextInput, View, Text } from 'react-native'
import styles from './input.style'
import Ionicons from '@expo/vector-icons/Ionicons';


const Input = ({ placeholder, onType,name }) => {


    return (

        <View style={styles.contain}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onType}
            />
            <Ionicons name={name} size={24} color='green' />

        </View>
    )

}

export default Input
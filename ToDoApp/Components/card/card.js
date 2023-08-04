import React from "react";
import {Text,View,TouchableOpacity} from 'react-native';
import styles from './card.style'

const Card = ({todos,onDelete}) =>{

    return(
        <TouchableOpacity onLongPress={onDelete}>
       <View style={styles.container}>
        <Text style={styles.yazi}>{todos}</Text>
        

       </View> 
       </TouchableOpacity>
    )
}

export default Card
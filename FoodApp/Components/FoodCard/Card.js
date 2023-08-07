import React from "react";
import { Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import styles from './Card.style'
import { useNavigation } from '@react-navigation/native';


const Card = ({ veri }) => {

    const navigation = useNavigation();


    const detayaGitcen = () => {
        return navigation.navigate('Detay',{id:veri.idMeal})
    }


    return (
        <TouchableWithoutFeedback onPress={detayaGitcen}>
            <View style={styles.contain}>
                <Image style={styles.image} source={{ uri: veri.strMealThumb }} />
                <Text style={styles.text}>{veri.strMeal}</Text>

            </View>
        </TouchableWithoutFeedback>
    )
}


export default Card
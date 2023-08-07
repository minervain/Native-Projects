import React from "react";
import { Text, View,Image,TouchableWithoutFeedback  } from 'react-native'
import styles from './Card.style'
import { useNavigation } from '@react-navigation/native';



const Card = ({veri}) => {

    const navigation = useNavigation();

    const yemegeGit=()=>{

        return  navigation.navigate('Yemekler',{categori:veri.strCategory})}

   

    return (
        <TouchableWithoutFeedback  style={styles.container} onPress={yemegeGit}>
        <View style={styles.contain}>
           
            <Image style={styles.image} source={{uri:veri.strCategoryThumb}}/>
            <Text  style={styles.description}>{veri.strCategory}</Text>

            </View>

        </TouchableWithoutFeedback >
    ) }

export default Card
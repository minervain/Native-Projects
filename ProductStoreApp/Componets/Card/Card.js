    import React from "react";
    import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
    import styles from './Card.style'
    import { useNavigation } from '@react-navigation/native';


    const Card = ({ veri }) => {
        const navigation = useNavigation();

        const yollaDetaya = ()=>(
            navigation.navigate('Detay',{id:veri.id})
        )
        return (
            <TouchableWithoutFeedback onPress={yollaDetaya}>
                <View style={styles.container}>
                    <View style={styles.alt_contain}>
                        <Image style={styles.image} source={{ uri: veri.image }} />
                        <Text style={styles.title} >{veri.title}</Text>
                        <Text style={styles.price} >{veri.price}TL</Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    export default Card


import React from "react";
import { View, Text, Image } from "react-native";
import styles from './card.style'

const Card = ({ buss }) => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                
                <Image style={styles.image} source={{ uri: buss.imgURL }} />
                <View style={styles.item_text}>
                <Text style={styles.title}>{buss.title}</Text>
                <Text>{buss.price}</Text>
                <Text>{buss.inStock ? 'STOKTA YOK': 'STOKTA VAR' }</Text>
                </View>
            </View>
        </View>

    )
}
export default Card;
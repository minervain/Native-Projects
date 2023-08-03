import React from "react";
import { View, Text, Image } from "react-native";
import styles from './bussCard.style'

const bussCard = ({ buss }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: buss.imageUrl }} />

            <View style={styles.inner_container}>
                <Text style={styles.title}>{buss.title}</Text>
                <Text style={styles.description}>{buss.description}</Text>
                <Text style={styles.author}>{buss.puan}</Text>
            </View>
        </View>

    )
}
export default bussCard;
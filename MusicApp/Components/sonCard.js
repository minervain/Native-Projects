import React from "react";
import { View, Text, Image } from "react-native";
import styles from './SongCard.style'


const SongCard = ({ veri }) => {


    return (

        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: veri.imageUrl }} />

            <View style={styles.alt_container}>
            <Text style={styles.title}>{veri.title}</Text>

              <View style={styles.alt2_container}>
                    <Text style={styles.isim}>{veri.artist}</Text>
                    <Text style={styles.year}>{veri.year}</Text>
                    </View>
            </View>

        </View>
    )


}
export default SongCard

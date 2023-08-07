import React from "react";
import { Text, View, FlatList, Image, Button, Linking } from "react-native";
import useDetail from "../../Hooks/useDetail";
import styles from "./Detail.style";

const Detail = ({ route }) => {
    const { id } = route.params;
    const { categories } = useDetail(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    const openYoutubeLink = (youtubeLink) => {
        Linking.openURL(youtubeLink);
    };

    const renderDetay = ({ item }) => {
        console.log(item.strMeal);
        return (
            <View>
                <Image style={styles.image} source={{ uri: item.strMealThumb }} />
                <Text style={styles.title}>{item.strMeal}</Text>
                <Text style={styles.desc}>{item.strInstructions}</Text>
                <Button
                    title="Youtube'da izle"
                    onPress={() => openYoutubeLink(item.strYoutube)}
                />
            </View>
        );
    };

    return (
        <View>
            <FlatList data={categories} renderItem={renderDetay} />
        </View>
    );
};

export default Detail;

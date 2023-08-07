import React from "react";
import { FlatList, Text, View } from 'react-native';
import Card from "../../Components/categoriesCard/Card/index";
import useFetch from "../../Hooks/useFetch";

const Category = () => {
    const { categories, Loading, Error } = useFetch('https://www.themealdb.com/api/json/v1/1/categories.php');


    const kategoriRender = ({ item }) => {
        return <Card veri={item} />;
    };

    

    return (
        <View>
            <FlatList
                data={categories}
                renderItem={kategoriRender}
            />
        </View>
    );
};

export default Category;

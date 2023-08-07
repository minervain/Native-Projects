import React from "react";
import { Text , FlatList, View } from "react-native";
import useFood from "../../Hooks/useFood";
import Card from "../../Components/FoodCard/Card";

const Food = ({ route }) => {
const { categori } = route.params;
console.log(categori);

const { categories } = useFood(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categori}`);




renderYemek = ({ item }) => {
return <Card veri={item} />;
};

return (
  <View  >
    <FlatList
      data={categories}
      renderItem={renderYemek}
    />
  </View >
);
}

export default Food;
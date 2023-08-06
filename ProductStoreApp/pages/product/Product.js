import React, { useEffect, useState } from "react";
import { View, Text,FlatList } from 'react-native'
import Card from "../../Componets/Card/index";
import useFetch from "../../Hooks/useFetch";


const Product = () => {

   const {error,loading,data}=useFetch('https://fakestoreapi.com/products')

        const dataRender=({item})=>{
            return <Card veri={item}/>
         }
 
            if(loading){

                return <Text>YÜKLENİYOR BEKLE</Text>
            }


            if(error){

                return <Text>hata var moruk</Text>
            }
    return (
        <View>
            
            <FlatList
            data={data}
            renderItem={dataRender}


        /></View>
    )
}

export default Product
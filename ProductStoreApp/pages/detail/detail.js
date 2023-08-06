import React from "react";
import {View,Text,Image} from 'react-native'
import useFetch from "../../Hooks/useFetch";
import styles from './detay.style'

const Detail = ({route}) =>{
const {id}=route.params;

const {data}=useFetch(`https://fakestoreapi.com/products/${id}`)

    return(
        <View>
            <Image style={styles.image} source={{uri:data.image}}/>
            <Text style={styles.title}>{data.title}</Text>

            <Text style={styles.desc}>{data.description}</Text>
            <Text style={styles.price}>{data.price}</Text>

            </View>
    )
}

export default Detail


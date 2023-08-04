import React from "react";
import {View,TextInput} from 'react-native'
import styles from './input.style'

const SearchBar=({TextChange})=>{


    return(
        <View style={styles.container}>
            <TextInput
            placeholder="Gir bişeyler"
            onChangeText={TextChange}/>
        </View>
    )
}
export default SearchBar
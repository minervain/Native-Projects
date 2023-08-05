import React from "react";
import { View, Text } from 'react-native'


const MemberPage = ({route}) => {
    const {veriler}= route.params
    console.log(veriler)

return(
    <View>
        <Text>ADINIZ :  {veriler.name}</Text>
        <Text>SOYADINIZ :  {veriler.surname}</Text>

        <Text>YAŞINIZ : {veriler.yas}</Text>

        <Text>DOĞUM TARİHİNİZ : {veriler.dg}</Text>

        <Text>KİLONUZ : {veriler.kilo}</Text>

        <Text>BOYUNUZ : {veriler.boy}</Text>

    </View>
)

}

export default MemberPage
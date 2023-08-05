import React, { useState } from "react";
import {View,Text} from 'react-native';
import Input from "../components/Input/index";
import ButtonC from "../components/Button/index";

const SignIn = ({navigation}) =>{
    const [name,setName]=useState('')
    const [soyad,setSoyad]=useState('')
    const [dg,setDg]=useState('')
    const [yas,setYas]=useState('')
    const [kilo,setKilo]=useState('')
    const [boy,setBoy]=useState('')

    const handleSubmit=()=>{
    const veriler={
        name,
        soyad,
        dg,
        yas,
        kilo,
        boy
    }
    console.log('Gönderilen Veriler:', veriler); // Verilerin doğru bir şekilde toplandığını kontrol edin

    navigation.navigate('Kullanici',{veriler})
    }

    return(
        <View>
            <Input placeholder="Adınız girin" label="Adınız:" onChangeText={setName}/>
            <Input placeholder="Soyadınızı girin" label="Soyadınız:"  onChangeText={setSoyad}/>

            <Input placeholder="Doğum Tarihi girin" label="Doğum tarihi:"  onChangeText={setDg}/>

            <Input placeholder="Yaş girin" label="Yaşınız:"  onChangeText={setYas}/>
            <Input placeholder="Kilo girin" label="Kilonuz:"  onChangeText={setKilo}/>
            <Input placeholder="Boyunuzu girin" label="Boyunuz:"  onChangeText={setBoy}/>
            <ButtonC title='Kayıt oluştur' onPress={handleSubmit}/>




        </View>
    )
}

export default SignIn
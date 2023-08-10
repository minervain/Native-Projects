import React, { useState } from "react";
import { View, Button, Alert } from 'react-native';
import Input from '../../Componets/Input';
import styles from './Login.style.';
import { Formik } from "formik";
import usePost from "../../Hooks/usePost";


const Login = ({ navigation }) => {

    const { data, loading, error, post } = usePost();


    const handleLogin = (values) => {
        post('https://fakestoreapi.com/auth' + "/login", values)
    };




    if (error) {
        Alert.alert('Mağaza', 'Hata oluştu')
    }

    if (data) {
        if (data === 'Error') { Alert.alert ('Mağaza','Kullanıcı Bulunamadı')}
        else navigation.navigate('Ürünler')
    }



    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={handleLogin}
        >
            {({ handleChange, handleSubmit, values }) => (
                <View style={styles.body_container}>
                    <Input
                        placeholder="Kullanıcı Adınızı giriniz..."
                        value={values.username}
                        onType={handleChange('username')} // Güncellendi
                        iconName="account"
                    />
                    <Input
                        placeholder="Şifrenizi giriniz..."
                        value={values.password}
                        onType={handleChange('password')} // Güncellendi
                        iconName="key"

                    />

                    <Button title="Giriş yap" onPress={handleSubmit} />
                </View>
            )}
        </Formik>
    );
}

export default Login;

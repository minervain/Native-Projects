import { StyleSheet } from "react-native";

export default StyleSheet.create({


    container: {

        flex: 1,


    },

    contain: {
        margin: 25,
        flex: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        backgroundColor: 'orange'


    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain',


    },
    description: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20
    }

})
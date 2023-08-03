import { Dimensions, StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        margin: 10,
        marginLeft: 0,
        height:Dimensions.get('window').height/2,
        width:Dimensions.get('window').width/2,

        backgroundColor: "#ECEFF1",
        borderRadius: 10,

        
      },
      body: {
        marginTop: 10,
        marginBottom: 10,
        alignItems: "center",
      },
      image: {
        width: 180,
        height: 250,
        backgroundColor: "grey",
        borderRadius: 10,
      },
      bottom: {
        marginTop: 3,
        marginBotom: 3,
      },
      title: {
        width: 150,
        fontWeight: "bold",
      },
      price: {
        color: "#9C9C9C",
      },
      inStock: {
        color: "red",
        fontWeight: "bold",
        fontSize: 15,
      },

})
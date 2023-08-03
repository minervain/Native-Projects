import { StyleSheet, Text, View, FlatList, SafeAreaView, TextInput } from 'react-native';
import dataVariable from './store_data.json'
import Card from './Components/cardComponents/card.js'




export default function App() {

  const renderBuss = ({ item }) => <Card buss={item} />;



  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.baslik}>Store</Text>
      <TextInput
        style={styles.input}
        placeholder="useless placeholder" />
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        data={dataVariable}
        renderItem={renderBuss}
      />
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    flexDirection: 'column'
  },
  baslik: {
    fontSize: 35,
    fontWeight: 'bold'
  },
  input: {
    height: 50,
    marginTop: 10, 
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#ECEFF1",
    borderRadius:20,
    borderColor:"#ECEFF1",
    margin:4


    
  },
});

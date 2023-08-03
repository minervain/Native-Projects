import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  SafeAreaView,
  Text, View,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  Dimensions,
  ViewBase,
} from 'react-native';
import buss_data from './buss_data.json';
import buss_banner from './buss_banner.json';
import BussCard from './Components/bussCard/index';

export default function App() {
  const renderBuss = ({ item }) => <BussCard buss={item} />;



  return (
   
    <SafeAreaView style={styles.container}> 
      <Text style={styles.headerText}>Otobüsler</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {buss_banner.map(buss_banner => (
              <Image
                style={styles.banner_image}
                source={{uri: buss_banner.imageUrl}
              }
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={item => item.id.toString()}
        data={buss_data}
        renderItem={renderBuss}
      />

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },

  banner_image: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 1,
    resizeMode:"cover" 

    
  },
  banner_imagex: {
    
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 38,
    marginTop:30
  },
});


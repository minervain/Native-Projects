import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import music_data from './music_data.json'
import { useState } from 'react';
import SongCard from './Components/index';
import SearchBar from './Components/inputC/index';

export default function App() {

  const [data, setData] = useState(music_data)

  const SongRender = ({ item }) => (
    <SongCard veri={item} />
  )

  const TextChange = (text) => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;

    })
    setData(filteredList)
  }

  return (
    <View style={styles.container}>
      <SearchBar TextChange={TextChange} />
      <FlatList

        data={data}
        renderItem={SongRender}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lime',
    paddingTop: 25


  },
});

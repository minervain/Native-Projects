import { StyleSheet, Text, View, TextInput, Button,FlatList } from 'react-native';
import Card from './Components/card/index';
import { useState } from 'react';

export default function App() {


  const [todoText, setTodoText] = useState('');
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);


  const addTodo = () => {
    if (todoText.trim() !== '') {
      setTodos([...todos, { text: todoText }]);
      setTodoText('');
      setCount(count+1)
    }
  };


  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setCount(count-1)

};



  return (
     <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.baslik}>YAPILACAKLAR</Text>
          <Text style={styles.deger}>{count}</Text>
        </View>
        <FlatList
        
        data={todos}
        renderItem={({item,index})=>(
          <Card todos={item.text} onDelete={() => deleteTodo(index)}/>
  )}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          value={todoText}
          onChangeText={text => setTodoText(text)}
          placeholder="Neler yapıcan?"

        />
        <Button color="#808080" title="Kaydet" onPress={addTodo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ' rgb(16,32,39)',
    padding: 25,
    justifyContent: 'space-between'


  },

  baslik: {
    paddingTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgb(255,165,0)'
  },
  deger: {
    paddingTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgb(255,165,0)'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  input: {
    fontSize: 20,
    backgroundColor: '#37474F',
    color: 'white',
    padding: 8
  }


});

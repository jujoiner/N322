import { useState } from 'react';
import { Button, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item.trim().length == 0) return;
      setList([...list, { id: Date.now().toString(), name: item }]);
      setItem('');
  }

  const deleteItem = (id) => {
    setList(list.filter((i) => i.id !== id));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do or Not</Text>
      <View style={styles.inputRow}>
        <TextInput style={styles.input} placeholder='Add New Task' value={item} onChangeText={setItem}/>
        <Button title='Add' onPress={addItem}/>
      </View>
      <FlatList 
      data={list}
      keyExtractor={(i) => i.id}
      
        renderItem={({item}) => {
        return(
          <View style={styles.itemRow}>
            <Text style={styles.itemText}>{item.name}</Text>
            <View style={{flexDirection:'row'}}>
              <Pressable onPress={() => deleteItem(item.id)}>
                <Text style={styles.deleteButton}>X</Text>
              </Pressable>
            </View>
          </View>
        );
        }
        }
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,

  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:20,
    textAlign:'center',

  },
  inputRow:{
    flexDirection:'row',
    marginBottom:20,

  },
  input:{
    flex:1,
    borderWidth:1,
    borderColor:'#ccc',
    padding:10,
    marginRight:10,
    borderRadius:5,
    backgroundColor:'#fff',

  },
  itemRow:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#f9f9f9',
    borderRadius: 15,
    padding: 15,
    margin:10,
    shadowColor:'#000',
    shadowOpacity:0.5,
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 3,
    elevation: 3,

  },
  itemText:{
    fontSize:20,
    flex:1,

  },
  deleteButton:{
    fontSize:20,
    borderWidth:1,
    borderColor:'red',
    paddingHorizontal:8,
    paddingVertical:2,
    borderRadius:5,
    color:'red',

  },
});

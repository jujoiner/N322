import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useAuth } from '../auth/AuthContext';
import { db } from '../firebase/firebaseConfig';
import {
  collection, addDoc, onSnapshot, query, where, orderBy,
  updateDoc, deleteDoc, doc, serverTimestamp
} from 'firebase/firestore';

export default function WordsList() {
  const router = useRouter();
  const { user } = useAuth();
  const [word, setWord] = useState('');
  const [desc, setDesc] = useState("");
  const [cons, setCons] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!user) return;
    const q = query(
      collection(db, 'Krusties'),
      where('ownerId', '==', user.uid),
      orderBy('createdAt', 'desc')
    );
    const unsub = onSnapshot(q, (snap) =>
      setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
    );
    return unsub;
  }, [user?.uid]);

  const addOrSave = async () => {
    const trimmed = word.trim();
    if (!trimmed || !user) return;
    if (editingId) {
      await updateDoc(doc(db, 'Krusties', editingId), { text: trimmed, description: desc, construction: cons });
      setEditingId(null);
    } else {
      await addDoc(collection(db, 'Krusties'), {
        text: trimmed, description: desc, construction: cons, ownerId: user.uid, createdAt: serverTimestamp(), 
      });
    }
    setWord('');
    setDesc("");
    setCons("");
  };

  const startEdit = (item) => { setEditingId(item.id); setWord(item.text); setDesc(item.description || ''); setCons(item.construction || ''); };
  const remove = async (id) => {
    await deleteDoc(doc(db, 'Krusties', id));
    if (editingId === id) { setEditingId(null); setWord(''); setDesc(''); setCons(''); }
  };

  return (
   
    <LinearGradient
      colors={['#5BFAF2', '#1D6BF0']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={s.container}
    >
        <ImageBackground
        source={require('../../assets/SS-Flower.png')}
        style={s.background}
        >
      <Text style={s.title}>Enter Recipes</Text>
      <View style={s.row}>
        <TextInput style={[s.input,{height:30}]} placeholder="Thug Shake" value={word} onChangeText={setWord} autoCapitalize="words"/>
        <TextInput
          placeholder="1/5 Hennessey...."
          value={desc}
          onChangeText={setDesc}
          style={[s.input, { height: 80 }]}
          multiline
        />
         <TextInput
          placeholder="Pour all ingredients in blender...."
          value={cons}
          onChangeText={setCons}
          style={[s.input, { height: 80 }]}
          multiline
        />
        <View style={{ width: 8 }} />
        <TouchableOpacity
          style={[s.addButton, editingId ? s.addButtonSave : null]}
          onPress={addOrSave}
          activeOpacity={0.8}
          accessibilityRole="button"
        >
          <Text style={s.addButtonText}>{editingId ? 'SAVE' : 'ADD'}</Text>
        </TouchableOpacity>
      </View>
      <View style={s.subcontainer}>
            <Text style={s.subtitle}>Your Recipes</Text>
     

      <FlatList
        style={{ marginTop: 16 }}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <TouchableOpacity
            style={s.card}
            activeOpacity={0.85}
            onPress={() => router.push({ pathname: '../../(app)/(tabs)/settings', params: { id: item.id, text: item.text, description: item.description, construction: item.construction} })}
          >
            <View style={{flex: 1}}>
              <Text style={s.word}>{item.text}</Text>
              <Text style={s.subword}>click here to view</Text>
              {/* {item.description ? <Text style={s.subword}>{item.description}</Text> : null} */}
            </View>
            <View style={s.cardButtons}>
              <TouchableOpacity onPress={() => startEdit(item)}><Text style={s.link}>Edit</Text></TouchableOpacity>
              <Text style={{ marginHorizontal: 8 }}>|</Text>
              <TouchableOpacity onPress={() => remove(item.id)}><Text style={[s.link,{color:'#c00'}]}>Delete</Text></TouchableOpacity>
            </View>
          </TouchableOpacity>

        )}
        ListEmptyComponent={<Text style={s.subtle}>Nothing yet. Add your secret formulas ↑</Text>}
      />
      </View>
      </ImageBackground>
    </LinearGradient>
    
  );
}
const s = StyleSheet.create({
  container:{ flex:1, padding:0, paddingTop:70 },
  background:{flex:1, padding:5, paddingTop:10 },
  subcontainer:{ flex:1, padding:5, paddingTop:10, backgroundColor:'#ffd4d433' },
  title:{ fontSize:24, fontWeight:'700', marginBottom:2 },
  subtitle:{ fontSize: 16, fontWeight:"600", color:'#393939ff', marginBottom:3 },
  input: { width:`${104}%`, borderWidth: 2, borderColor: "#ACAD3B", borderRadius: 5, marginBottom: 8, backgroundColor: "#f7e948" },
  row:{ alignItems:'center', padding: 12, },
  subtle:{ color:'#666', marginTop:8 },
  card:{ 
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f7e948",
    padding: 12,
    borderWidth:2,
    borderColor:"#ACAD3B",
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3, },
  word:{ fontSize:18, fontWeight:'600' },
  subword:{fontSize: 13, color: '#666', marginTop: 6},
  cardButtons:{ flexDirection:'row', alignItems:'center' },
  link:{ fontSize:16, color:'#06c' },
  addButton: {
    backgroundColor: '#1959A6',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonSave: {
    backgroundColor: '#1959A6',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
  }
});
import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useAuth } from '../../../src/auth/AuthContext';
import { useLocalSearchParams } from 'expo-router';


export default function Settings(){
  const { user, signOut } = useAuth();
  const params = useLocalSearchParams();
  const { id, text, description, construction} = params;
  
  return (
    <LinearGradient
          colors={['#5BFAF2', '#1D6BF0']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={s.container}
        >
     <ImageBackground
             source={require('../../../assets/SS-Flower.png')}
             style={s.background}
             >
        <Text style={s.title}>{text}</Text>
         <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 20 }}>
        {/* If navigated with an item, show its details */}
        {text ? (
          <View style={s.subcontainer}>
            <Text style={s.subtitle}>Ingredients:</Text>
            <Text style={s.card}> {description}</Text>
            <Text style={s.subtitle}>How to Prepare: </Text>
            <Text style={s.card}>{construction}</Text>
          </View>
        ) : null}
      </ScrollView>
      
      <View style={s.exitcard} >
      <Text style={s.row}>Signed in as {user?.email}</Text>
      <Text style={s.addButton} onPress={signOut} >Sign Out</Text>
      </View>

      </ImageBackground>
   </LinearGradient>
  );
}
const s = StyleSheet.create({
  container:{ flex:1, padding:0, paddingTop:70},
  background:{flex:1, padding:5, paddingTop:10 ,backgroundColor:'#ffd4d433'},
  subcontainer:{ flex:1, padding:5, paddingTop:10  },
  title:{ fontSize:24, fontWeight:'700', marginBottom:2 },
  subtitle:{ fontSize: 16, fontWeight:"600", color:'#721F18', marginBottom:3 },
  row:{ alignItems:'center', padding: 2 },
  subtle:{ color:'#666', marginTop:8 },
  card:{ 
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8D69F",
    padding: 12,
    fontSize:14,
    fontWeight:"600",
    borderRadius: 10,
    borderWidth:2,
    borderColor:"#532F00",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3, 
  },
  exitcard:{ 
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E8D69F",
    padding: 12,
    fontSize:14,
    fontWeight:"600",
    borderRadius: 10,
    borderWidth:2,
    borderColor:"#532F00",
    marginBottom: 12,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3, 
  },
  addButton: {
    backgroundColor: '#1959A6',
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '800',
    paddingVertical: 10,
    margin:4,
    paddingHorizontal: 14,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
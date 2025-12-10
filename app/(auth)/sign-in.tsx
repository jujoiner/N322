import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useAuth } from '../../src/auth/AuthContext';
import { auth } from '../../src/firebase/firebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignIn() {
  const { user } = useAuth();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [error, setError] = useState('');

  useEffect(() => { if (user) router.replace('/(tabs)'); }, [user]);

  const onSignIn = async () => {
    setError('');
    try { await signInWithEmailAndPassword(auth, email.trim(), pw); }
    catch (e) { setError(e.message); }
  };

  const onSignUp = async () => {
    setError('');
    try { await createUserWithEmailAndPassword(auth, email.trim(), pw); }
    catch (e) { setError(e.message); }
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
      <Text style={s.title}>Welcome</Text>
      <TextInput style={s.input} placeholder="email" autoCapitalize="none" value={email} onChangeText={setEmail} />
      <TextInput style={s.input} placeholder="password" secureTextEntry value={pw} onChangeText={setPw} />
      {!!error && <Text style={s.error}>{error}</Text>}
      <View style={{ flexDirection:'row', gap:12, marginTop:8 }}>
        {/* <Button title="Sign In" onPress={onSignIn} />
        <Button title="Create Account" onPress={onSignUp} /> */}
        <View style={s.exitcard} > 
            <Text style={s.addButton} onPress={onSignIn} >Sign In</Text>
        </View>
        <View style={s.exitcard} >
            <Text style={s.addButton} onPress={onSignUp} >Create Account</Text>
        </View>
      </View>
    </ImageBackground>
    </LinearGradient>
  );
}
const s = StyleSheet.create({
  container:{ flex:1, padding:0, paddingTop:5 },
  background:{flex:1, padding:5, paddingTop:10 , backgroundColor:'#ffd4d433'},
  title:{ fontSize:28, fontWeight:'700', marginBottom:12 },
  input:{ borderWidth:1, borderColor:'#ccc', padding:12, borderRadius:10, marginBottom:8, backgroundColor:'#ffffff91' },
  error:{ color:'#c00', marginTop:6 },
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
    fontSize: 16,
    fontWeight: '800',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
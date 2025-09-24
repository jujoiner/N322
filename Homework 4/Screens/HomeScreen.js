import { View, Text, StyleSheet, FlatList, Pressable, Button } from 'react-native';




export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Hub</Text>
        
      {/* <Button title='Go to About' onPress={() => navigation.navigate('About')} /> */}
    </View>
  )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#a2bdceff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#d8d08bff',
        borderRadius: 4,
        borderColor: '#333',
        borderWidth: 3,
        width: '100%',
        padding: 10,
    },
    card:{  
        backgroundColor: '#f8f8f8',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        elevation: 3,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTitle: { 
        fontSize: 18,
    },
})

import { View, Text, StyleSheet, FlatList, Pressable, } from 'react-native'

const students = [
    { id: '1', title: 'Ava Mitchell', description: 'Watercolor painting and urban sketching.' },
    { id: '2', title: 'Liam Carter', description: 'Playing guitar and songwriting.' },
    { id: '3', title: 'Olivia Nguyen', description: 'Yoga and aerial silks training.' },
    { id: '4', title: 'Noah Thompson', description: 'Model rocketry and aerodynamics study.' },
    { id: '5', title: 'Emma Rodriguez', description: 'Baking pastries and sourdough experiments.' },
    { id: '6', title: 'Lucas Patel', description: 'Rock climbing and outdoor bouldering.' },
    { id: '7', title: 'Sophia Kim', description: 'Street photography and film development.' },
    { id: '8', title: 'Mason Brooks', description: 'Indie game programming and pixel art.' },
    { id: '9', title: 'Isabella Lopez', description: 'Heirloom vegetable gardening and composting.' },
    { id: '10', title: 'Ethan Walker', description: 'Basketball playing and youth coaching.' },
    { id: '11', title: 'Mia Johnson', description: 'Violin practice and composing short pieces.' },
    { id: '12', title: 'James Williams', description: 'Long-distance cycling and bike maintenance.' },
    { id: '13', title: 'Charlotte Davis', description: 'Sewing clothing and upcycling vintage fabrics.' },
    { id: '14', title: 'Benjamin Moore', description: 'Collecting vinyl records and DJing.' },
    { id: '15', title: 'Amelia Garcia', description: 'Writing short stories and attending workshops.' },
    { id: '16', title: 'Henry Martinez', description: 'Woodworking and furniture building.' },
    { id: '17', title: 'Evelyn Hernandez', description: 'Botany studies and maintaining a plant journal.' },
    { id: '18', title: 'Alexander Young', description: 'Competitive chess and streaming games.' },
    { id: '19', title: 'Harper Allen', description: 'Ceramic pottery and wheel throwing.' },
    { id: '20', title: 'Daniel Scott', description: 'Hiking local trails and wildlife photography.' },
];


export default function HomeScreen({ navigation }) {
  return (
    
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome Students!</Text>

      <FlatList    
      data={students}
        keyExtractor={(item)=> item.id}
        renderItem={({item}) =>(
            <Pressable 
                style={styles.card} 
                onPress={() => navigation.getParent()?.navigate('Resources', { screen: 'ResourcesMain', params: { student: item } })}>

                    <Text style={styles.cardTitle}>{item.title}</Text>
            </Pressable>
        )}/>

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
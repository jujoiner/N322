import { View, Text, StyleSheet } from 'react-native'


import ProfileScreen from './ProfileScreen';

export default function ResourceScreen({ route }) {
  const student = route?.params?.student;

  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{student.title}</Text>
      <Text style={styles.description}>{student.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {  
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20, 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
    },
})





import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function App() {
  return (
      
    <View style={styles.container}>
    {/* <ScrollView> */}
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}

        <View style={styles.card}>
          <Image source={{uri:'https://cats.com/wp-content/uploads/2020/10/Chantilly-Tiffany-cat.jpg'}} style={styles.avatatar}/>
          <Text style={styles.title}>Julius Michael Joiner </Text>
          <Text style={styles.subtitle}>I will not let myself drown this time! </Text>
          
          <View>
            <Text style={styles.body}>
              I have participated in may different organized sports
              over the years including football, ultimate frisbee, {"\n"}swimming,
              cross country, and rowing. I am currently trying to 
              get back into running and working out more regularly.
            </Text>
            <Text style={styles.body}>
              While I do enjoy 
              woodworking, I havent be able to in quiet sometime 
              due to the messy state of my garage. {"\n"}
              At the rate we've been cleaning we may 
              be able to use the garage by the end of the semester.
            </Text>
            <Text style={styles.body}>
              I enjoy playing video games, board games and card games.
              I also enjoy playing Dungeons and Dragons with friends, {"\n"}my 
              favoutite thing to do is to create characters and homebrew content.
            </Text>
          </View>
        </View>
      {/* </ScrollView> */}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeb0b0ff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2, 
  },

  card:{
    display: 'flex',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 20,
    alignItems: "center",
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: .5,
    shadowOffset: { width: 7, height: 6 },
    shadowRadius: 5,
    elevation: 5,
  },

  // misspelled 
  avatatar:{
    width: 200,
    height: 175,
    borderRadius: 5,
    marginBottom: 15,
  },

  title:{
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 1,
  },

  subtitle:{
    fontSize: 15,
    color: '#7e7979ff',
    marginBottom: 10,
  },

  body:{
    fontSize: 15,
    color: '#333',
    marginTop:5,
    textAlign: 'justify',
    }
});

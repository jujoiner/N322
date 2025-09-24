import { Pressable, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screens/HomeScreen';
import ResourceScreen from './Screens/ResourceScreen';
import ProfileScreen from './Screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: 'Home',
          headerRight: () => (
            <Pressable onPress={() => navigation.getParent()?.navigate('Profiles')} style={{ paddingRight: 10 }}>
              <Text>Profiles</Text>
            </Pressable>
          ),
        })}
      />
      {/* add additional Home-related stack screens here */}
    </Stack.Navigator>
  );
}

function ResourceStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ResourcesMain" component={ResourceScreen} options={{ title: 'Resources' }} />
      {/* add additional Resource-related stack screens here */}
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfilesMain" component={ProfileScreen} options={{ title: 'Profiles' }} />
      {/* add additional Profile-related stack screens here */}
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* Hide the tab header so each stack's header shows */}
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen
          name="Resources"
          component={ResourceStack}
          options={{ tabBarButton: () => null }}
        />
        <Tab.Screen name="Profiles" component={ProfileStack} />
      </Tab.Navigator>
       
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Appointments from "./pages/Appointments";
import Messages from "./pages/Messages";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="Search" 
        component={Search} 
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="Appointments" 
        component={Appointments} 
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="Messages" 
        component={Messages} 
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

export default App;
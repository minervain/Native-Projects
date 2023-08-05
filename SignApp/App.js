
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/Welcome';
import SignIn from './pages/Sign';
import MemberPage from './pages/MemberPage'




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Anasayfa" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Kullanici" component={MemberPage} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
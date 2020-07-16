import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Article from './Article';
import Liked from './Liked';




const Drawer = createDrawerNavigator();


export default function App() {
   
  return (  
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home}/>
        <Drawer.Screen name="Article" component={Article}/>
        <Drawer.Screen name="Liked" component={Liked}/>
      </Drawer.Navigator>
    </NavigationContainer>




  );
}

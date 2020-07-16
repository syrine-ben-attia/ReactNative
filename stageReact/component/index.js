import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Article from './Article';
import Liked from './Liked';
import { createStackNavigator} from '@react-navigation/stack'
import {  View,TouchableOpacity, Image  }  from 'react-native'



const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const NavigationDrawerStructure = (props)=> {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
}

function HomePage({navigation}){
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{title:'Home', headerLeft:()=>
      <NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle: {
        backgroundColor: '#f4511e', //Set Header color
      },
     
      headerTintColor: '#fff', //Set Header text color
      headerTitleStyle: {
        fontWeight: 'bold', //Set Header text style
      }}}/>
    </Stack.Navigator>
  )
}
function LikedPage({navigation}){
  return (
    <Stack.Navigator initialRouteName="Like">
      <Stack.Screen name="Liked page" component={Liked} options={{title:'LikedPage', headerLeft:()=>
      <NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle: {
        backgroundColor: '#f4511e', //Set Header color
      },
      headerTintColor: '#fff', //Set Header text color
      headerTitleStyle: {
        fontWeight: 'bold', //Set Header text style
      }}}/>
    </Stack.Navigator>
  )
}

export default function App() {
   
  return (  
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomePage}/>
        <Drawer.Screen name="Liked" component={LikedPage}/>
       <Drawer.Screen name="Article" component={Article}/>
       
      </Drawer.Navigator>
 


    </NavigationContainer>


  );
}

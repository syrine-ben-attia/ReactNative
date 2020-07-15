import * as React from 'react';
import { Button, View , Text} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';



function HomeScreen({ navigation }) {
    
    let article;
   axios.get('http://localhost:4000/articleRouter',{
        headers: {
            'Access-Control-Allow-Origin': true,
          }
    }).then(resp=>{
        article = resp.data;
        console.log(article);
        
    })
    article=[{
        id:1
    },{id:2},{id:3}]
    console.log(article)
    
        return (
      
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
            <Button
              onPress={() => navigation.navigate('Favorite')}
              title="Go to favorite"
            />
            <Text>Home</Text>
          </View>
        )

  
}

function FavoriteScreen({ navigation }) {
    console.log(navigation);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
      <Text>Notification</Text>

    </View>
  );
}


const Drawer = createDrawerNavigator();


export default function App() {
   
  return (  
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen}  />
        <Drawer.Screen name="Favorite" component={FavoriteScreen} />
      </Drawer.Navigator>
    </NavigationContainer>




  );
}

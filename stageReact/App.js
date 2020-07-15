import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import ArticleItem from './component/ArticleItem';
import { render } from 'react-dom';
import axios from 'axios';
import Home from './component/Home';


export default class App extends React.Component {
  getArticle = ()=>{
   
    console.log("Hello world");
    
  }
  getItem = ()=>{
    console.log("LOAD ITEM");
  }
  render()
{  
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
      <ArticleItem onClicked={this.getArticle}/>
      <Home onLoadItem={this.getItem} />
    </View>
    
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

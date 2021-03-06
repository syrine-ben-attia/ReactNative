import React from 'react'
import { ActivityIndicator, View ,  Button }  from 'react-native'
import { ListItem} from 'react-native-elements';
import {  FlatList } from 'react-native-gesture-handler'
import axios from 'axios';
import Article from './Article';
import { NavigationActions } from 'react-navigation';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        console.log('props',props);
        this.state = {
            data: [],
            isLoading: true
        }
        this.articleDidLoaded();

    }
  
    
    articleDidLoaded(){
        console.log("Hello")
        axios.get('http://localhost:4000/articleRouter')
        .then((response)=>{
            console.log(response)
           return response})
        .then((json)=>{
            console.log(json.data);
            //let filtered  = json.data.filter((val)=>!val.like)
            console.log(json.data);
            return this.setState({data:json.data})})
        .catch((error)=>console.error(error))
        .finally(()=>this.setState({isLoading:false}));



    }
    likeArticle(articleId){
        console.log(articleId);
        axios.get('http://localhost:4000/articleRouter/like/'+articleId).then((response)=>{
            console.log(response);
            window.location.reload(false);

        }).catch((error)=>console.log(error));
    }
    navigateToArticle(id){
      console.log(this.props.navigation);
      console.log(Article.Navigation);
    
      
    }
    
        
    
    
       render() {
        const { data, isLoading } = this.state;

           return (
      
               <View style={{ backgroundColor: '#6ED4C8',
               alignItems: 'center',
              flexDirection:"row",
               paddingTop: 5,
               shadowColor: '#000000',
               shadowOffset: { width: 0, height: 1 },
               shadowOpacity: 0.2,
               elevation: 2,
               position: 'relative',
               justifyContent: 'space-between' ,
               width: '100%',
               height: '100%' }}>
            
         
         {isLoading ? <ActivityIndicator/> : (
           <FlatList  style={{ flex:1 }}
             data={data}
             keyExtractor={({ id }, index) => id}
             renderItem={({ item }) => (
                <ListItem 
                key={item._id}
                leftAvatar={{ source: { uri: item.profileImg } }}
                title={item.title}
                 subtitle={
                     <View>
                         <Button  title="Like"   color="#841584" onPress={()=>this.likeArticle(item._id)}/>
                         </View>
                 } 
                onPress={()=>this.props.navigation.navigate('Article',{id: item._id})}
                
                bottomDivider
                
              />
             )}
             
           />
            


         )}
      
       </View>
      
           )
       }
       
    }
 

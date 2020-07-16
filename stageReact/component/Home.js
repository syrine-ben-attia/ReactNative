import React from 'react'
import { ActivityIndicator, View ,  Button }  from 'react-native'
import { ListItem} from 'react-native-elements';
import {  FlatList } from 'react-native-gesture-handler'
import axios from 'axios';


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
            let filtered  = json.data.filter((val)=>!val.like)
            console.log(filtered);
            return this.setState({data:filtered})})
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
    
    
       render() {
        const { data, isLoading } = this.state;

           return (
            
               <View style={{ flex: 1, padding: 24 }}>
                   <Button title="Go to liked article" onPress={()=> this.props.navigation.navigate('Liked')} />
         {isLoading ? <ActivityIndicator/> : (
           <FlatList
             data={data}
             keyExtractor={({ id }, index) => id}
             renderItem={({ item }) => (
                <ListItem
                key={item._id}
                leftAvatar={{ source: { uri: item.profileImg } }}
                title={item.title}
                 subtitle={
                     <View>
                         <Button title="Like" onPress={()=>this.likeArticle(item._id)}/>
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
 

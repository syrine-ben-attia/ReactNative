import React from 'react';
import axios from 'axios';
import { ActivityIndicator, View , Button }  from 'react-native'
import {  FlatList } from 'react-native-gesture-handler'
import { ListItem} from 'react-native-elements';


export default class Liked extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[],
            isLoading:true
        }
        this.getLikedArticle();
        console.log("Hello")
    }
    getLikedArticle(){
        axios.get('http://localhost:4000/articleRouter')
        .then((response)=>{
            console.log(response)
           return response})
        .then((json)=>{
            console.log(json.data);
            let filtered  = json.data.filter((val)=>val.like)

            return this.setState({data:filtered})})
        .catch((error)=>console.error(error))
        .finally(()=>this.setState({isLoading:false}));
    }
    dislikeArticle(id){
        axios.get('http://localhost:4000/articleRouter/dislike/'+id).then((response)=>{
            console.log(response);
            window.location.reload(false);

        }).catch((error)=>console.log(error));
    }
    render() {
        const { data, isLoading } = this.state;

           return (
       

      
               <View style={{ backgroundColor: 'white',
               alignItems: 'center',
              flexDirection:"row",
               paddingTop: 2,
               shadowColor: '#000000',
               shadowOffset: { width: 0, height: 1 },
               shadowOpacity: 0.2,
               elevation: 2,
               position: 'relative',
               justifyContent: 'space-between', 
               backgroundColor: '#6ED4C8' ,
               width: '100%',
               height: '100%' }}>
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
                         <Button  color="#841584" title="Dislike" onPress={()=>this.dislikeArticle(item._id)}/>
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
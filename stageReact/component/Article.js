import React from 'react'
import { ActivityIndicator, View ,  Button }  from 'react-native'
import axios from 'axios';
import { ListItem} from 'react-native-elements';


export default class Article extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data: [],
            isLoading: true
        }
        console.log(props);
        this.getArticleById(this.props.route.params.id);

    }
   
   
    componentDidUpdate(prevProps,prevState){
        if(this.props.route.params.id != prevProps.route.params.id){
            console.log('id changeddd');
            this.setState({isLoading:true});
            this.getArticleById(this.props.route.params.id);
        }
    }
  
    getArticleById(id){
        axios.get('http://localhost:4000/articleRouter/'+id)
        .then((response)=>{
            console.log(response)
           return response})
        .then((json)=>{
            console.log(json.data);
            return this.setState({data:json.data})})
        .catch((error)=>console.error(error))
        .finally(()=>this.setState({isLoading:false}));

    }
    render(){
        console.log(this.props.route.params.id);
    
        const { data, isLoading } = this.state;
        return (
            <View style={{ flex: 1, padding: 24 }}>
         {isLoading ? <ActivityIndicator/> : (
             
          
                <ListItem
                key={data._id}
                leftAvatar={{ source: { uri: data.profileImg } }}
                title={data.title}
               subtitle={data.body} 

                
              />
           
       
            
            


         )}
                     <Button onPress={()=> this.props.navigation.goBack()} title="Go back HOME" />

       
       </View>
        )
    }
}
{/* <Button onPress={() => this.props.navigation.goBack()} title="Go back home" />
 */}
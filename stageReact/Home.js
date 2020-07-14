import react from 'react'
import { StyleSheet, View , Text , Image, Button }  from 'react-native'
import articleItem from './articleItem' 
import { TextInput, FlatList } from 'react-native-gesture-handler'
import axios from 'axios';

class Home extends ReactComponent {
    constructor(props) {
        super(props)
        this.state = { articles: [] }   }

        _loadArticles() {
            axios.get("http://localhost:4000/articleRouter/", article, {
        }).then(res => {
            console.log(res)
        })
        }
        render() {
            return ( 
                <View style={styles.main_container}>
                    <TextInput style={styles.textinput} placeholder="Titre d'article" />
                    <Button style={{height : 50}} title="Rechercher" onPress={() => this._loadArticles()} />
                    <FlatList 
                    data={this.state.articles}
                    keyExtractor={(item) => item.id.toString()}
                     renderItem={({item}) => <articleItem article={item} /> } /> 
                </View>
            )
        }
}
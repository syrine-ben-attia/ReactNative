import react from 'react'
import { StyleSheet, View , Text , Image }  from 'react-native'
import articleItem from './articleItem' 
import { TextInput, FlatList } from 'react-native-gesture-handler'

class Home extends ReactComponent {
    constructor(props) {
        super(props)
        this.state = { articles: []
        }   }

        _loadArticles() {
            
        }
        render() {
            return ( 
                <View style={styles.main_container}>
                    <TextInput style={styles.textinput} placeholder="Titre d'article" />
                    <FlatList 
                    data={this.state.articles}
                    keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <articleItem article={item} /> } /> 
                </View>
            )
        }
}
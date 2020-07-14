import react from 'react'
import { StyleSheet, View , Text , Image }  from 'react-native'


class articleItem extends React.Component {
    render(){
      const articleItem= this.props.article; 
      return (
          <View style={Styles.main_container} >
              <image  style={styles.Image} source ={{uri: "image"}}/>
              <View style={styles.content_conatiner}>
                  <View style={styles.header_container}>
                      <Text style={styles.title_text}>{articleItem.title} </Text>
             </View>

             <View style={styles.description_container}>
                 <Text style={styles.description_text} numberOfLines={6}>{article.overview}</Text>
             </View>
          </View>
          </View>
      )
    }
}

import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { ScrollView,StyleSheet, Text, View } from 'react-native';
import {NavigationActions} from 'react-navigation';
import { StackNavigator } from 'react-navigation';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
     Home: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              HOME
            </Text>
          </View>
          <View>
            <Text style={styles.sectionHeadingStyle}>
             Favorite articles
            </Text>
          </View>
        </ScrollView>
        
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

const styles = StyleSheet.create({
container: {
    paddingTop: 20,
    flex: 1
  },
  navItemStyle: {
    padding: 10
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  
});

export default SideMenu;
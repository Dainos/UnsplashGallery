import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, StyleSheet, View, FlatList, Button } from 'react-native'
import * as actions from '../actions/actions'
import ListItem from '../components/ListItem'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class List extends Component {

  constructor(props) {
    super(props);
    // this.state = {}
  }

  openPhoto = url => {
    this.props.navigation.navigate('Photo', {
      url: url
    })
  }

  render() {
    // console.log(this.props.list[0].urls.thumb)

    const data = []
    this.props.list.forEach(element => {
      data.push({
        key: element.alt_description,
        author: element.user.name,
        small: element.urls.thumb,
        full: element.urls.full
      })
    });


    return (
      <View style={this.styles.view}>
        <FlatList
          data={data}
          renderItem={({ item }) => <ListItem openPhoto={this.openPhoto}
            text={item.key}
            author={item.author}
            urlSmall={item.small}
            urlFull={item.full} />}
        />
      </View>

    )
  }


  styles = StyleSheet.create({
    text: {
      fontSize: 30,
      color: 'white',
    },
    listItem: {
      fontSize: 25,
      color: 'white',
      padding: 10,
    },
    view: {
      flex: 1,
      // alignItems: 'center',
      backgroundColor: '#2E2E2E'
    }

  });
}

const stateToProps = state => {
  return {
    list: state.list
  }
}

const dispatchToProps = dispatch => {
  return {
    setList: list => dispatch(actions.SET_LIST, list)
  }
}

export default connect(stateToProps, dispatchToProps)(List)
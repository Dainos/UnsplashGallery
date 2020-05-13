import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const NavBar = (props) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Unsplash Gallery</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: 'white'
  },
  navbar: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
    padding: 15,
    backgroundColor: '#3949ab'
  }
})

export default NavBar
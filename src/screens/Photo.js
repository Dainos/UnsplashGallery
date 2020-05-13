import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'


export default function Photo({ route }) {
  const { url } = route.params;
  return (
    <View style={styles.container}>
      <Image style={styles.itemImage} source={{ uri: url }}></Image>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E2E',
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
})
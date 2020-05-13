import React from 'react'
import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native'


export default function ListItem({ openPhoto, text, urlSmall, urlFull }) {
  return (
    <TouchableOpacity style={styles.item} onPress={() => openPhoto(urlFull)}>
      <Image style={styles.itemImage} source={{ uri: urlSmall }}></Image>
      <Text style={styles.itemText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: 160,
    paddingLeft: 10,
    paddingRight: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ff7a00',
    borderWidth: 2,
    borderRadius: 15,
  },
  itemText: {
    color: 'white',
    fontSize: 15,
    padding: 10,
    width: '75%'
  },
  itemImage: {
    width: 110,
    height: 130,

  }

})
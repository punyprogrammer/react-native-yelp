import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'

import SafeAreaAndroid from './SafeAreaAndroid'

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.lightHeader}>Grab Your</Text>
      <Text style={styles.boldHeader}>Delicious Meal!!</Text>
    </ View >
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:50,
    marginHorizontal:25,
  },
  lightHeader:{
    fontSize:35,
   
  },
  boldHeader:{
    fontSize:40,
    fontWeight:'bold',
  
  }
})
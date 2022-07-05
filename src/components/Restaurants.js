import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default  function Restaurants() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
    </View>
  )
}


const styles = StyleSheet.create({
container:{
    marginHorizontal:25,
    marginVertical:1,
    flex:1,
},
header:{
fontWeight:'bold',
fontSize:20,
paddingBottom:10,
}
})
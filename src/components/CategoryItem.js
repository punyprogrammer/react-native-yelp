import { StyleSheet, Text, View,Image,Button,TouchableOpacity } from 'react-native'
import React from 'react'
import { elevation } from './common/styles'

const CategoryItem = ({name,src,index,active,handlerChange}) => {
    
  return (
    <TouchableOpacity style={[styles.container,index===0?{marginLeft:25}:{marginLeft:15},active?{backgroundColor:"rgb(241,186,87)"}:{backgroundColor:'white'}]} onPress={handlerChange}>

    <View   >
        <View style={styles.imageContainer}>
   <Image  style={styles.image}source={src}/>
        </View>
      <Text style={styles.header}>{name}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container:{

        width:70,
        height:100,
        borderRadius:50,
        marginVertical:15,
       
        backgroundColor:'white',
        ...elevation,
        alignItems:'center',
        justifyContent:'center',
        
    },
    imageContainer:{
    width:50,
    height:50,
    backgroundColor:"white",
    alignItems:'center',
    justifyContent:'center',
    borderRadius:25,
    },
    image:{
        height:35,
        width:35,
    },
    header:{
        fontWeight:'bold',
        letterSpacing:1,
    }
})
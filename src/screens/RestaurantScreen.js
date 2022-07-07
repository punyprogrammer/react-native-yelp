import { ActivityIndicator, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import useRestaurant from '../hooks/useRestaurant'

const RestaurantScreen = ({navigation}) => {
  const id=navigation.getParam("id")
  const  [{data,loading,error},searchRestaurant]=useRestaurant()
  // useEfffect
  useEffect(()=>{
    
    searchRestaurant(id);
   
  },[])
  if(loading)
  {
       return  <ActivityIndicator  size="large" marginVertical={30}/>
  }
  if(error)
  {
      return (
        <View style={styles.errorWrapper}>

           <View style={styles.errorContainer}>
               <Text style={styles.errorText}>{error}</Text>
           </View>
        </View>
      )
  }
  if(!data?.hasOwnProperty("photos")||data?.photos.length===0)
  {
    return (
      <View style={styles.errorWrapper}>

         <View style={styles.errorContainer}>
             <Text style={styles.errorText}>{"No photos available"}</Text>
         </View>
      </View>
    )
  }
  
  return (
    <View>
     <FlatList  data={data.photos} keyExtractor={(item)=>item}
     renderItem={({item})=>{
         return <Image  source={{uri:item}} style={{height:250,width:"100%"}}/>        
     }}/>
    </View>
  )
}

export default RestaurantScreen

const styles = StyleSheet.create({
  errorWrapper:{
    paddingHorizontal:25,
    },
    errorContainer:{
         backgroundColor:'#ffcdd2',
         padding:10,
         alignItems:'center',
         justifyContent:'center',
         height:100,
         marginTop:20,
         marginVertical:25,
         borderRadius:20,
         
    
    },
    errorText:{
      color:'red',
      fontSize:22,
      
    }
})
import { StyleSheet, Text, View ,ActivityIndicator, FlatList} from 'react-native'
import React from 'react'
import useRestaurants from '../hooks/useRestaurants'
import RestaurantItem from './RestaurantItem';
import { useEffect } from 'react';


export default  function Restaurants({term}) {
   const [{data,loading,error},searchRestaurant]=useRestaurants();
   useEffect(()=>{

           searchRestaurant(term)
           console.log(data)
   },[term])

//    return the loading state
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
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
      <FlatList data={data} renderItem={({item})=>{
           return  <RestaurantItem key={item.id} restaurant={item}/>
      }}/>
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
},
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
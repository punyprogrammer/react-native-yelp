import { View, Text ,StyleSheet,Image,TouchableOpacity} from 'react-native'
import  {withNavigation} from "react-navigation"
import { elevation } from './common/styles'

import React from 'react'

 function RestaurantItem({restaurant,navigation}) {

  return (
   <TouchableOpacity
   onPress={()=>navigation.navigate("Restaurant",{id:restaurant.id})}>

    <View style={styles.container}>
       <Image style={styles.image} source={{uri:restaurant.image_url}}/>
       <View style={styles.infoContainer} >
          <Text style={styles.header}>{restaurant.name}</Text>
          <View style={styles.info}>
              <Text style={styles.rating}>{restaurant.rating}</Text>
              <Text style={styles.money}>{restaurant.price}</Text>
          </View>
       </View>
    </View>
   </TouchableOpacity>
  )
}
const styles=StyleSheet.create({

     container:{
        backgroundColor:"white",
        height:100,
        alignSelf:'stretch',
        borderRadius:30,
        ...elevation,
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
     },
     image:{
        width:75,
        height:75,
        borderRadius:50,
        marginLeft:10,
     },
     infoContainer:{
      padding:10,
     },
     info:{
 flex:1,
 flexDirection:'row',
 
 
     },
     header:{
      fontSize:18,fontWeight:'bold',
      marginBottom:4,
     },
     rating:{
      marginRight:20,
     },
     money:{
      color:'gold'
     }

})
export default withNavigation(RestaurantItem);
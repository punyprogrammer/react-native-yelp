import { StyleSheet, Text, View,TextInput } from 'react-native'
import  {FontAwesome} from "@expo/vector-icons"
import React ,{useState}from 'react'
import { elevation } from './common/styles'
const Search = ({setTerm}) => {
const [input,setInput]=useState("");
const handleEndEditing=()=>{
     if(!input) return ;
     setTerm(input);
     setInput('')
}

  return (
    <View style={styles.container}>
        <FontAwesome name="search"  size={25}/>
     <TextInput  value={input}selectionColor="black" style={styles.input}placeholder='Search for restaurants '
      onChangeText={(text)=>setInput(text)}
      onEndEditing={handleEndEditing}/>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({

    container:{
         flexDirection:'row',
         marginTop:5,
         marginHorizontal:25,
         backgroundColor:'white',
         padding:15,
         borderRadius:40,
         ...elevation,
        
    },
    
    input:{
    fontSize:20,
    marginLeft:10,
    }
})
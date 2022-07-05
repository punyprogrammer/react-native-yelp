import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View ,SafeAreaView,FlatList} from 'react-native';
import Header from './src/components/Header';
import Search from './src/components/Search';
import SafeAreaAndroid from './src/components/SafeAreaAndroid';
import CategoryItem from './src/components/CategoryItem';
import Restaurants from './src/components/Restaurants';
import { commonCategories } from './src/data';
export default function App() {
  const  [term,setTerm]=useState("Burger")

  return (
    <SafeAreaView style={SafeAreaAndroid.AndroidSafeArea}>
      <Header/>
      <Search setTerm={setTerm}/>
      <FlatList contentContainerStyle={styles.listview} style={styles.flatList}  data={commonCategories} 
       renderItem={({item,index})=>{
          return (
               <CategoryItem src={item.src} name={item.name} index={index} active={item.name===term}
                handlerChange={()=>setTerm(item.name)}/>
          )
          
       }}
       horizontal
       keyExtractor={(category)=>category.name}
       showsHorizontalScrollIndicator={false}/>
      <Restaurants/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

  flatList:{
    height:120,
    flexGrow:0,
   
  },
  listview:{
    alignItems:'center',

  }
});

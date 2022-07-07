import { FlatList, SafeAreaView,StyleSheet } from "react-native";
import SafeAreaAndroid from "../components/SafeAreaAndroid";
import CategoryItem from "../components/CategoryItem";
import Header from "../components/Header";
import Search from "../components/Search";
import { StatusBar } from "expo-status-bar";
import Restaurants from "../components/Restaurants";
import { commonCategories } from "../data";
import { useState } from 'react';

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
        <Restaurants term={term}/>
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
  
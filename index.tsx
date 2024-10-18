import React from "react";
import { SafeAreaView } from "react-native";
import Home from '../../screens/Home';

export default function APP(){
  return(
    <SafeAreaView style={{flex:2}}>
      <Home/>
    </SafeAreaView>
  );
}
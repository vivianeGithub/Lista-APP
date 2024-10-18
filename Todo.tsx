import React from "react";
import{View, Text, StyleSheet, ViewStyle} from 'react-native';

interface ListAPPProps{
    name: string;
    style?: ViewStyle;
}

export default function ListAPP({name, style}:ListAPPProps){
    return (
    <View style={[styles.container,style]}>
        <Text>{name}</Text>
    </View>
    );
}

const styles =StyleSheet.create({
    container :{
        padding : 5
    },
});
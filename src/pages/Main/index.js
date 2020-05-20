import React from 'react';
import {View, TouchableOpacity, FlatList, Text, ScrollView} from 'react-native';
import {styles} from './styles';
import { Entypo } from '@expo/vector-icons'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const GROUPS = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Grupo A',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Grupo B',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Grupo C',
    },
  ];
  
export default function Main({route, navigation}){

    function Group(props){

        return <TouchableOpacity 
                onPress={()=>{
                    navigation.navigate('List',{
                    item_id: props.item.id,
                    item_title: props.item.title
                })}}>
                    <Text style={styles.scroll_item}>{props.item.title}</Text>
                </TouchableOpacity>;
      }


    return (
        <View style={styles.container}>
            <TouchableOpacity
            onPress={()=>{}}
            style={styles.button}>
                <Entypo name="menu" size={40}/>
            </TouchableOpacity>
            <ScrollView style={styles.scroll}>
                <FlatList
                data={GROUPS}
                renderItem={({ item }) => <Group item={item}/>}
                keyExtractor={item => item.id}/>
            </ScrollView>
        </View>
    );
}
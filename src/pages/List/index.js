import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function List({route,  navigation}){
    const {item_id,item_title} = route.params;
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <Text style={{fontSize: 20}}>Back</Text>
            </TouchableOpacity>
            <Text>{item_title}</Text>
        </View>
    );
}
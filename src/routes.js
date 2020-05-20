import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './pages/SignIn/index';
import Main from './pages/Main/index';
import List from './pages/List/index';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen 
                name="SignIn" 
                component={SignIn} />
                <Stack.Screen
                name="Main"
                component={Main} />
                <Stack.Screen
                name="List"
                component={List} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
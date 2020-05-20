import React,{useState} from 'react';
import { Image, Text, View, ScrollView, TextInput, Button, FlatList, StyleSheet, ImageBackground, Alert, TouchableOpacity } from 'react-native';
import imgBack from '../../assets/background-signin.png';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {styles} from './styles';
 
export default function SignIn({navigation}){
  const [name, setName] = useState('');

  function buttonClick(){
    //Alert.alert(`Wellcome to My Supermarket Mr. ${name}`);
    navigation.navigate('Main');
  }

  

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={imgBack}>
        <Text style={styles.pre_title}>Olá, bem vindo(a) ao</Text>
        <Text style={styles.title}>My Supermarket</Text>
        <TextInput onChangeText={text => setName(text)} value={name} placeholder="Digite seu nome aqui" style={styles.input}/>
        <TouchableOpacity style={styles.button} onPress={() => {buttonClick()}}>
          <Text style={styles.text_button}>ENTRAR</Text>
        </TouchableOpacity>
      </ImageBackground>
     </View>
    );
  }
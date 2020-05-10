import React,{useState} from 'react';
import { Image, Text, View, ScrollView, TextInput, Button, FlatList, StyleSheet, ImageBackground, Alert, TouchableOpacity } from 'react-native';
import imgBack from './src/assets/background-signin.png';

export default function App() {

  const [name, setName] = useState('');

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%'
    },
    image: {
      width: '100%',
      height: '100%',
      opacity: 0.7,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    pre_title: {
      fontSize: 16
    },
    title: {
      fontSize: 32
    },
    input: {
      height: 40,
      width: '50%',
      borderColor: 'gray',
      backgroundColor: 'white',
      borderWidth:  1,
      fontSize: 16,
      margin: 10,
      padding: 5
    
    },
    button: {
      alignItems: 'center',
      backgroundColor: 'green',
      padding: 10,
      paddingLeft: 30,
      paddingRight: 30
    },
    text_button : {
      fontWeight: 'bold'
    }
  });

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={imgBack}>
        <Text style={styles.pre_title}>Olá, bem vindo(a) ao</Text>
        <Text style={styles.title}>My Supermarket</Text>
        <TextInput onChangeText={text => setName(text)} value={name} placeholder="Digite seu nome aqui" style={styles.input}/>
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert(`Wellcome to My Supermarket Mr. ${name}`)}>
          <Text style={styles.text_button}>ENTRAR</Text>
        </TouchableOpacity>
      </ImageBackground>
     </View>
    );
}

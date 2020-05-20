import React from 'react'
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
      backgroundColor: '#6DEB60',
      padding: 10,
      paddingLeft: 30,
      paddingRight: 30
    },
    text_button : {
      fontWeight: 'bold'
    }
  });


import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}> This is start game screen! </Text>
      <View style={styles.inputContainer}>
        <Text> Select a number! </Text>
        <TextInput/>
        <View style={styles.buttonContainer}>
          <Button title='Reset'/>
          <Button title='Select'/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  }
});

export default StartGameScreen;
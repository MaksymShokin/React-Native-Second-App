import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}> This is start game screen! </Text>
      <Card style={styles.inputContainer}>
        <Text> Select a number! </Text>
        <TextInput/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Reset' color={Colors.secondary}/>
          </View>
          <View style={styles.button} >
            <Button title='Select' color={Colors.primary}/>
          </View>
        </View>
      </Card>
    </View>
  )
};

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
    alignItems: 'center',

  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between'
  },
  button: {
    width: '40%'
  }
});

export default StartGameScreen;
import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [selectedNumber, setSelectedNumber] = useState();
  const [numberConfirmed, setNumberConfirmed] = useState(false);

  const inputHandler = value => {
    setEnteredValue(value.replace(/[^0-9]/g, ''))
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setNumberConfirmed(false)
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ) {
      Alert.alert(
        'Invalid number',
        'Enter a number between 1 - 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      );
      return;
    }
    setNumberConfirmed(true);
    setEnteredValue('');
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss()
  };

  let confirmedOutput;

  if (numberConfirmed) {
    confirmedOutput = (
      <Card style={styles.confirmedOutputContainer}>
        <Text style={styles.confirmedOutputText}>Number selected</Text>
        <View style={styles.confirmedOutputNumber}>
          <Text style={styles.confirmedOutputNumberText}>{selectedNumber}</Text>
        </View>
        <View style={styles.confirmedOutputButton}>
          <Button title='START!' color={Colors.primary}/>
        </View>
      </Card>
    )
    }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}> This is start game screen! </Text>
        <Card style={styles.inputContainer}>
          <Text> Select a number! </Text>
          <Input
            blurOnSubmit
            style={styles.input}
            keyboardType='number-pad'
            maxLength={2}
            onChangeText={inputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title='Reset'
                color={Colors.secondary}
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title='Select'
                color={Colors.primary}
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  confirmedOutputContainer: {
    marginVertical: 35,
    padding: 30,
    alignItems: 'center'

  },
  confirmedOutputText: {
    fontSize: 18,
    color: Colors.primary
  },
  confirmedOutputNumber: {
    borderColor: Colors.secondary,
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 20,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',

  },
  confirmedOutputNumberText: {
    padding: 10,
    fontSize: 24,
    color: Colors.secondary
  },
  confirmedOutputButton: {
    minWidth: 150,
    maxWidth: '70%'
  }
});

export default StartGameScreen;
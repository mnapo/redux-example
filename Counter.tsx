import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

export default function Counter() {

  const dispatch = useDispatch();

  const counter = useSelector((state) => (state));

  const incrementCounter = () => {
    dispatch({type: "INCREMENT_COUNTER"});
  };

  const decrementCounter = () => {
    dispatch({type: "DECREMENT_COUNTER"});
  };

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <Button onPress={incrementCounter}>Aumentar contador</Button>
      <Button onPress={decrementCounter}>Decrementar contador</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

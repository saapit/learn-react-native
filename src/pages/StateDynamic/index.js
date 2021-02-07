import React, {Component, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Counter = () => {
  const [number, setNumber] = useState(0);
  return (
    <View style={styles.digit}>
      <Text>{number}</Text>
      <Button title="Tambah" onPress={() => setNumber(number + 1)} />
    </View>
  );
};

class Counter2 extends Component {
  state = {
    number: 0,
  };
  render() {
    return (
      <View style={styles.digit}>
        <Text>{this.state.number}</Text>
        <Button
          title="Tambah"
          onPress={() => this.setState({number: this.state.number + 1})}
        />
      </View>
    );
  }
}

const StateDynamic = () => {
  return (
    <View>
      <View style={styles.title}>
        <Text>State Dynamic with State</Text>
      </View>
      <Text style={styles.text}>Functional Component (Hooks)</Text>
      <Counter />
      <Counter />
      <Text style={styles.text}>Class Component </Text>
      <Counter2 />
      <Counter2 />
    </View>
  );
};

export default StateDynamic;

const styles = StyleSheet.create({
  title: {
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 30,
  },
  digit: {alignItems: 'center'},
  text: {textAlign: 'center'},
});

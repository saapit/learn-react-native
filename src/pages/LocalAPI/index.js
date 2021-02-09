import axios from 'axios';
import React, {useState} from 'react';
import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';

const Item = () => {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{uri: 'https://i.pravatar.cc/150'}}
        style={styles.avatar}
      />
      <View style={styles.desc}>
        <Text style={styles.descName}>Full Name</Text>
        <Text style={styles.descEmail}>Email</Text>
        <Text style={styles.descAge}>Age</Text>
      </View>
      <Text style={styles.delete}>X</Text>
    </View>
  );
};

const LocalAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const submit = () => {
    const data = {
      name, // === name: name;
      email, // === name: name;
      age, // === name: name;
    };
    // console.log('data before send: ', data);
    axios.post(' http://10.0.2.2:3004/users', data).then((res) => {
      console.log('res: ', res);
      setName('');
      setEmail('');
      setAge('');
    });
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Local API (JSON Server)</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.tengah}>Enter User Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={(value) => setName(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={age}
          onChangeText={(value) => setAge(value)}
        />
        <Button title="Save" onPress={submit} />
        <View style={styles.line} />
        <Item />
      </View>
    </View>
  );
};

export default LocalAPI;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    marginVertical: 20,
    alignItems: 'center',
  },
  tengah: {textAlign: 'center'},
  title: {textAlign: 'center'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {width: 80, height: 80, borderRadius: 80},
  input: {
    borderWidth: 1,
    marginBottom: 12,
    borderRadius: 25,
    paddingHorizontal: 18,
  },
  body: {padding: 10, marginVertical: 10},
  desc: {marginLeft: 15, flex: 1},
  itemContainer: {flexDirection: 'row', marginBottom: 20},
  descName: {fontSize: 20, fontWeight: 'bold'},
  descEmail: {fontSize: 16},
  descAge: {fontSize: 12, marginTop: 8},
  delete: {fontSize: 20, fontWeight: 'bold', color: 'red'},
});

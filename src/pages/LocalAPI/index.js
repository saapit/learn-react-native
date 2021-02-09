import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Item = ({name, email, age, onPress, id, onDelete}) => {
  //   let rand = Math.floor(Math.random() * 10 + 1);
  //   //   console.log('rand : ', rand);
  //   uri: `https://i.pravatar.cc/150?img=${rand}`,
  // if nak guna random method to generate avatar

  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{
            uri: `https://i.pravatar.cc/150?img=${id}`,
          }}
          style={styles.avatar}
        />
      </TouchableOpacity>
      <View style={styles.desc}>
        <Text style={styles.descName}>{name}</Text>
        <Text style={styles.descEmail}>{email}</Text>
        <Text style={styles.descAge}>{age}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const LocalAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [users, setUsers] = useState([]);
  // button dynamic
  const [button, setButton] = useState('Save');
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const submit = () => {
    const data = {
      name, // === name: name;
      email, // === name: name;
      age, // === name: name;
    };

    if (button === 'Save') {
      // console.log('data before send: ', data);
      axios.post(' http://10.0.2.2:3004/users', data).then((res) => {
        console.log('res: ', res);
        setName('');
        setEmail('');
        setAge('');
        getData();
      });
    } else if (button === 'Update') {
      axios
        .put(`http://10.0.2.2:3004/users/${selectedUser.id}`, data)
        .then((res) => {
          console.log('res update: ', res);
          setName('');
          setEmail('');
          setAge('');
          getData();
          setButton('Save');
        });
    }
  };

  const getData = () => {
    axios.get(' http://10.0.2.2:3004/users').then((res) => {
      console.log('res get data: ', res);
      setUsers(res.data);
    });
  };

  const selectItem = (item) => {
    console.log('selected item: ', item);
    setSelectedUser(item);
    setName(item.name);
    setEmail(item.email);
    setAge(item.age);
    setButton('Update');
  };

  const deleteItem = (item) => {
    console.log('item delete: ', item);
    axios.delete(`http://10.0.2.2:3004/users/${item.id}`).then((res) => {
      console.log('res delete: ', res);
      getData();
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
          placeholder="Email"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={age}
          onChangeText={(value) => setAge(value)}
        />
        <Button title={button} onPress={submit} />
        <View style={styles.line} />
        {users.map((user) => {
          return (
            <Item
              key={user.id}
              name={user.name}
              email={user.email}
              age={user.age}
              onPress={() => selectItem(user)}
              id={user.id}
              onDelete={() =>
                Alert.alert('Reminder', 'Are you sure to delete this user?', [
                  {text: 'No', onPress: () => console.log('No button')},
                  {text: 'Yes', onPress: () => deleteItem(user)},
                ])
              }
            />
          );
        })}
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

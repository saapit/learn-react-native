import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';

// arrow function
const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: '#30336b'}} />
      <Text>Sapit</Text>
      <Pidut />
      <Text>Ikram</Text>
      <Gambar />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Pidut = () => {
  return <Text>Pidut Liverpool</Text>;
};

const Gambar = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

export default App;

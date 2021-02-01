import React, {Component} from 'react';
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
      <BoxGreen />
      <Profile />
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

class BoxGreen extends Component {
  render() {
    return <Text>Ini Component dari Class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: '#4834d4', fontSize: 22}}>Ini Kucing</Text>
      </View>
    );
  }
}

export default App;

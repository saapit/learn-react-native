import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import syther from './syther.png';

class MaterialFlexBlox extends Component {
  render() {
    return (
      <View>
        <View>
          <Text style={{textAlign: 'center', marginBottom: 10}}>
            Material FlexBox
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#747d8c',
            alignItems: 'center', // flex-start(default), flex-end, center
            justifyContent: 'space-between', // f;ex-end , space-between, space-around
          }}>
          <View style={{backgroundColor: '#ff4757', width: 50, height: 50}} />
          <View style={{backgroundColor: '#eccc68', width: 50, height: 50}} />
          <View style={{backgroundColor: '#2ed573', width: 50, height: 50}} />
          <View style={{backgroundColor: '#5352ed', width: 50, height: 50}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Home</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komuniti</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
            marginLeft: 20,
          }}>
          <Image
            source={syther}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              borderWidth: 1,
              borderColor: '#2f3542',
              marginRight: 14,
            }}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sapit</Text>
            <Text>10 Subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default MaterialFlexBlox;

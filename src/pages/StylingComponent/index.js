import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import marvel from '../../assets/images/marvel.jpg';

const StylingComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#95afc0',
          borderWidth: 2,
          borderColor: '#130f40',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2F2F2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={marvel}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          Poster Marvel
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#F2994A',
            marginTop: 16,
          }}>
          RM 75.00
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          Jitra
        </Text>
        <View
          style={{
            backgroundColor: '#6FCF97',
            padddingVertical: 6, // atas-bawah padding sama
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: 'white',
              textAlign: 'center',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#f0932b',
    marginLeft: 20,
    marginTop: 30,
  },
});

export default StylingComponent;

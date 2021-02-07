import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import marvel from '../../assets//images/marvel.jpg';

const Product = (props) => {
  return (
    <View style={styles.wrapper}>
      <Image source={marvel} style={styles.imageProduct} />
      <Text style={styles.text1}>Poster Marvel</Text>
      <Text style={styles.text2}>RM 75.00</Text>
      <Text style={styles.text3}>Jitra</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.wrap2}>
          <Text style={styles.text4}>BELI</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: '#F2F2F2',
    width: 212,
    borderRadius: 8,
  },
  imageProduct: {width: 188, height: 107, borderRadius: 8},
  text1: {fontSize: 14, fontWeight: 'bold', marginTop: 16},
  text2: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#F2994A',
    marginTop: 16,
  },
  text3: {fontSize: 12, fontWeight: '300', marginTop: 12},
  wrap2: {
    backgroundColor: '#6FCF97',
    paddingVertical: 6, // atas-bawah padding sama
    borderRadius: 25,
    marginTop: 20,
  },
  text4: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});

import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import cart from '../../assets/icons/cart.png';

const Position = () => {
  return (
    <View style={styles.wrapper}>
      <View style={{alignItems: 'center', marginBottom: 15}}>
        <Text style={styles.textpadding}>Material Position</Text>
      </View>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Your Shopping Cart</Text>
    </View>
  );
};

export default Position;

const styles = StyleSheet.create({
  textpadding: {borderWidth: 1, paddingHorizontal: 15},
  wrapper: {padding: 20, alignItems: 'center'},
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#1e90ff',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconCart: {width: 60, height: 60},
  text: {fontSize: 12, color: '#777777', fontWeight: '700', marginTop: 8},
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6FCF97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

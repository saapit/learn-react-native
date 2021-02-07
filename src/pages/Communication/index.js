import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Cart from '../../components/Cart';
import Product from '../../components/Product';

const Communication = () => {
  const [totalProduct, setTotalProduct] = useState(0);
  return (
    <View>
      <View style={styles.wrapper}>
        <Text style={styles.text}>
          Communication sending component material
        </Text>
      </View>
      <Cart quantity={totalProduct} />
      <Product onButtonPress={() => setTotalProduct(totalProduct + 1)} />
    </View>
  );
};

export default Communication;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 2,
    alignItems: 'center',
  },
  text: {textAlign: 'center'},
});

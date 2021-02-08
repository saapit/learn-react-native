import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import UndrawMyApp from '../../assets/images/undraw_my_app_re_gxtj.svg';

const ReactNativeSvg = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Using SVG File in React Native</Text>
      </View>
      <View style={styles.svg}>
        <UndrawMyApp width={244} height={125} />
      </View>
    </View>
  );
};

export default ReactNativeSvg;

const styles = StyleSheet.create({
  container: {borderWidth: 1, padding: 20, marginVertical: 20},
  title: {textAlign: 'center'},
  svg: {alignItems: 'center'},
});

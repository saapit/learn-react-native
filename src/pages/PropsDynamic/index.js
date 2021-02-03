import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Story = (props) => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={styles.img}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.tajuk}</Text>
    </View>
  );
};

const PropsDynamic = () => {
  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.t}>Component Dynamic with Props</Text>
      </View>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            tajuk="Youtube Channel"
            gambar="https://placeimg.com/100/100/nature"
          />
          <Story tajuk="Arkitek" gambar="https://placeimg.com/100/100/tech" />
          <Story
            tajuk="Animals"
            gambar="https://placeimg.com/100/100/animals"
          />
          <Story tajuk="Tech" gambar="https://placeimg.com/100/100/tech" />
          <Story tajuk="People" gambar="https://placeimg.com/100/100/people" />
          <Story tajuk="People" gambar="https://placeimg.com/100/100/nature" />
          <Story tajuk="People" gambar="https://placeimg.com/100/100/animal" />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDynamic;

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
    marginVertical: 10,
  },
  t: {paddingHorizontal: 10, borderWidth: 1},
  img: {width: 60, height: 60, borderRadius: 50 / 2},
});

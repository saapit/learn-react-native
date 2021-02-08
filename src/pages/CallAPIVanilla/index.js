import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CallAPIVanilla = () => {
  useEffect(() => {
    //   Call API method GET
    // fetch('https://reqres.in/api/users/2')
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));

    // Call API methid POST
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };

    console.log('data object:', dataForAPI);
    console.log('data stringify:', JSON.stringify(dataForAPI));
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForAPI),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log('post response: ', json);
      });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Call API Vanilla</Text>
    </View>
  );
};

export default CallAPIVanilla;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    marginVertical: 20,
    alignItems: 'center',
  },
  title: {textAlign: 'center'},
});

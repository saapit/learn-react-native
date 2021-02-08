import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Button, Image, Text, View} from 'react-native';

const CallAPIAxios = () => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });

  const getData = () => {
    // fetch('https://reqres.in/api/users/2')
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //     setDataUser(json.data);
    //   });

    //using Axios
    axios
      .get('https://reqres.in/api/users/3')
      .then((result) => {
        setDataUser(result.data.data);
      })
      .catch((err) => console.log('err: ', err));
  };

  const postData = () => {
    // Call API methid POST
    const dataForAPI = {
      name: 'morpheus',
      job: 'leader',
    };

    // console.log('data object:', dataForAPI);
    // console.log('data stringify:', JSON.stringify(dataForAPI));

    // fetch('https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(dataForAPI),
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log('post response: ', json);
    //     setDataJob(json);
    //   });

    //using axios
    axios
      .post('https://reqres.in/api/users', dataForAPI)
      .then((result) => {
        setDataJob(result.data);
      })
      .catch((err) => console.log('err:', err));
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Call API Axios</Text>
      </View>
      <Button title="GET DATA" onPress={getData} />
      <Text style={styles.title}>Response GET Data</Text>
      {dataUser.avatar.length > 0 && (
        <Image source={{uri: dataUser.avatar}} style={styles.avatar} />
      )}
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <View style={styles.line} />
      <Button title="POST DATA" onPress={postData} />
      <Text style={styles.title}>Response POST DATA</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
    </View>
  );
};

export default CallAPIAxios;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderWidth: 1,
    marginVertical: 20,
    alignItems: 'center',
  },
  title: {textAlign: 'center'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {width: 100, height: 100, borderRadius: 100},
});

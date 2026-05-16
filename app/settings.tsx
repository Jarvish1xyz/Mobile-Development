import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';

const settings = () => {

  const [userName, setUserName] = useState('')
  const [randomRepoName, setRandomRepoName] = useState('');

  const router = useRouter();


  const fetchRepo = () => {
    console.log(userName);
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then((res) => res.json())
    .then((data) => setRandomRepoName(data[Math.floor(Math.random() * data.length)].name))
    .catch((err) => {console.log(err)})
  }

  return (
    <View style={styles.container}>
      <Text>settings</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUserName}
        placeholder='Enter your Github Username'
      />
      <Button
        title='Fetch Repo'
        onPress={fetchRepo}
      >
      </Button>
      <Button
        title='Go to Home'
        onPress={() => {router.navigate('/')}}
      >
      </Button>
      <Text
      style={styles.repoName}
      >Rendom Repo: {randomRepoName} </Text>
    </View>
  )
}

export default settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center"
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  repoName: {
    fontSize: 20,
    color: 'black',
    marginTop: 10,
  }
})
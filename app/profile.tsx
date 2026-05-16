import { StyleSheet, Text, View, TextInput, Button, Alert, Switch, Pressable, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const profile = () => {

    const [text, setText] = useState('');
    const [isEnable, setIsEnable] = useState(false);

    const toggel = () => {
        setIsEnable((prv) => !prv)
    }

    const press = () => {
        Alert.alert('Button Pressed');
    }

    const inset = useSafeAreaInsets();

    return (
        <View style={[styles.container, {paddingTop: inset.top}]}>
            <Text>settings</Text>
            <TextInput
                keyboardType='numbers-and-punctuation'
                // style={styles.input}
                onChangeText={setText}
                placeholder='Enter your Github Username'
                multiline
                numberOfLines={5}
            />
            <Button
                title='Press It'
                onPress={press}
            />
            <Pressable
                onLongPress={press}
            // delayLongPress={1000}
            >
                <Text>onLongPress</Text>
            </Pressable>
            <Pressable
                onPressIn={press}
            >
                <Text>onPressIn</Text>
            </Pressable>
            <Pressable
                onPressOut={press}
            >
                <Text>onPressOut</Text>
            </Pressable>
            <Text
                style={styles.repoName}
            >Text: {text} </Text>

            <Switch
                value={isEnable}
                onValueChange={toggel}
            />
{/* /workspaces/Mobile-Development/.gitignore */}
            <ImageBackground
                source={{
                    uri: "https://avatars.githubusercontent.com/u/181248584?v=4"
                }}
                resizeMode='cover'
                style={styles.img}
            >
                <Text style={{
                    color: 'white', flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: 'auto', marginRight: 'auto',
                    fontFamily: 'sans-serif',
                    fontSize: 30,
                }}>Relex</Text>
            </ImageBackground>
        </View>
    )
}

export default profile


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
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
    },
    img: {
        height: 150,
        width: 150,
    }
})
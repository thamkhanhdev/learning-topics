import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';

const TextScreen = () =>
{
    const [ name, setName ] = useState( '' );
    const [ password, setPassword ] = useState( '' );

    return <View>
        <Text style={ styles.textStyle }>Text Screen</Text>
        <TextInput
            style={ styles.textInput }
            autoCapitalize="none"
            autoCorrect={ false }
            value={ name }
            onChangeText={ newValue => setName( newValue ) }
        />
        <Text style={ styles.subHeaderStyle }>My name is { name }</Text>
        <Text style={ styles.subHeaderStyle }>Enter password:</Text>
        <TextInput
            style={ styles.textInput }
            autoCapitalize="none"
            autoCorrect={ false }
            value={ password }
            onChangeText={ newValue => setPassword( newValue ) }
        />
        { password.length < 5 ? <Text> Password must be longer than 5 characters.</Text> : null }
    </View>
};

const styles = StyleSheet.create( {
    textStyle: {
        fontSize: 45
    },
    textInput: {
        margin: 15,
        color: 'black',
        borderWidth: 1
    },
    subHeaderStyle: {
        fontSize: 20
    }
} );

export default TextScreen;
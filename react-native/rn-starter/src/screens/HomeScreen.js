import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) =>
{
    return (
        <View>
            <Text style={ styles.text }>Default home screen</Text>
            <Button
                onPress={() => navigation.navigate('Components')}
                title="Goto Components"
            />
            <Button
                onPress={() => navigation.navigate('List')}
                title="Goto List"
            />
            <Button
                onPress={() => navigation.navigate('Image')}
                title="Goto Image"
            />
            <Button
                onPress={() => navigation.navigate('Counter')}
                title="Goto Counter"
            />
            <Button
                onPress={() => navigation.navigate('Color')}
                title="Goto Color"
            />
            <Button
                onPress={() => navigation.navigate('Square')}
                title="Goto Square"
            />
            <Button
                onPress={() => navigation.navigate('Text')}
                title="Goto Text"
            />
            <Button
                onPress={() => navigation.navigate('Box')}
                title="Goto Box"
            />
        </View>
    );
};

const styles = StyleSheet.create( {
    text: {
        fontSize: 30,
        textShadowColor: 0xFFAB,
        textDecorationColor: 0xFFAB,
    }
} );

export default HomeScreen;

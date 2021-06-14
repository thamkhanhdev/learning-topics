import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () =>
{
    const friends = [
        { name: 'Friend #1', age: 'Age 20' },
        { name: 'Friend #2', age: 'Age 64' },
        { name: 'Friend #3', age: 'Age 60' },
        { name: 'Friend #4', age: 'Age 15' },
        { name: 'Friend #5', age: 'Age 19' },
        { name: 'Friend #6', age: 'Age 43' },
        { name: 'Friend #7', age: 'Age 84' },
        { name: 'Friend #8', age: 'Age 23' },
        { name: 'Friend #9', age: 'Age 57' }
    ];

    return (
        <FlatList
            // horizontal
            showsHorizontalScrollIndicator={ false }
            keyExtractor={ friend => friend.name }
            data={ friends }
            renderItem={ ( { item } ) =>
            {
                return <Text style={ styles.textStyle }>{ item.name + ' - ' + item.age }</Text>;
            } }
        />
    );
};

const styles = StyleSheet.create( {
    textStyle: {
        marginVertical: 2
    }
} );

export default ListScreen;
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import {View,Text,StyleSheet} from 'react-native';

export const Error=()=> {
    return (
        <View style={styles.container}>
            <Icon name="exclamation-triangle" size={35} color="#6a6a6a"/>
            <Text>Something went wrong</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
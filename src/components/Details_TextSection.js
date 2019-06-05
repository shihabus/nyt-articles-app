import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

export const TextSection = ({ content }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.content}>{content}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{ paddingHorizontal: 10 },
    content:{ fontSize: 16,lineHeight: 20,color:'#464646' }
})
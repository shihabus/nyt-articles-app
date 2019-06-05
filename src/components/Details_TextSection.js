import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export const TextSection = ({ content }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.content}>{content}</Text>
        </View>
    )
}

TextSection.propTypes={
    content:PropTypes.string, 
}

const styles=StyleSheet.create({
    container:{ paddingHorizontal: 10 },
    content:{ fontSize: 16,lineHeight: 20,color:'#464646' }
})
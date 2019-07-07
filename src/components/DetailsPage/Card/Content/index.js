import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles=StyleSheet.create({
    container:{ paddingVertical: 10 },
    content:{ 
        fontSize: 16,
        lineHeight: 20,
        color:'#464646',
        textAlign:'justify' 
    }
})

export const Content = ({ content }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.content}>{content}</Text>
        </View>
    )
}

Content.propTypes={
    content:PropTypes.string, 
}

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        borderBottomColor:'#fff',
        borderBottomWidth:0.3
    },
    title: {
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold',
        lineHeight: 30,
        textAlign:'justify'
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10
    },
    author: {
        color: '#000',
    },
})

export const TitleSection = ({ title, author, date }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.rowContainer}>
                <Text style={styles.author}>{author === null ? '--' : author}</Text>
                <Text>{` ${date}`}</Text>
            </View>
        </View>
    )
}

TitleSection.propTypes={
    title:PropTypes.string, 
    author:PropTypes.string, 
    date:PropTypes.string
}


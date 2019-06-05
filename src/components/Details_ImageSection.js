import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export const ImageSection = ({ url }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode='cover'
                source={{ uri: `${url}` }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 5
    },
    image: {
        height: 200,
        width: undefined
    }
})
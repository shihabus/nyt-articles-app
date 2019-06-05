import React from 'react';
import { StatusBar, View } from 'react-native'

export const CustomStatusBar = () => {
    return (
        <View>
            <StatusBar
                backgroundColor='#000'
                barStyle="light-content"
            />
        </View>
    )
}

import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import PropTypes from 'prop-types';

const styles=StyleSheet.create({
    greyText: {
        fontSize: 14,
        color: "gray"
      },
})

const Author = ({byline}) => {
    return (
        <View>
          <Text style={styles.greyText}>{byline}</Text>
        </View>
    )
}

Author.propTypes={
    byline:PropTypes.string.isRequired
}



export default Author

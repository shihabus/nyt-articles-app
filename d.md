import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types';
const styles=StyleSheet.create({

})

const index = () => {
    return (
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.titleText}>
          {title}
        </Text>
    )
}

index.propTypes={
    
}

export default index

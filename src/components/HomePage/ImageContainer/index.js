import React from 'react'
import { View, StyleSheet,Image } from 'react-native'
import PropTypes from 'prop-types';

const styles=StyleSheet.create({
    imageContainer: {
        flexDirection: "row",
        justifyContent: "center",
        width: "20%"
      },
      imageStyle: {
        backgroundColor: "#CED0CE",
        height: 50,
        width: 50,
        alignSelf: "center",
        borderRadius: 25
      },
})
const ImageContainer = ({ urlToImage }) => (
    <View style={styles.imageContainer}>
      <Image
        style={styles.imageStyle}
        resizeMode="contain"
        source={{ uri: urlToImage }}
      />
    </View>
  );

ImageContainer.propTypes={
    urlToImage:PropTypes.string
}

export default ImageContainer

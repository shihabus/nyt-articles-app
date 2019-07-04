import React from "react";
import { View, Image, StyleSheet, ImageBackground } from "react-native";
import PropTypes from "prop-types";

export const ImageSection = ({ url }) => {
  return (
    <Image
      style={styles.image}
      resizeMode="cover"
      source={{ uri: `${url}` }}
    />
  );
};

ImageSection.propTypes = {
  url: PropTypes.string
};

const styles = StyleSheet.create({
  image: {
    height: 290,
    width: undefined,
    backgroundColor:'#d1d1d1'
  }
});

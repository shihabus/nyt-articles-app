import React from "react";
import {  Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  image: {
    height: 290,
    width: undefined,
    backgroundColor:'#d1d1d1'
  }
});

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


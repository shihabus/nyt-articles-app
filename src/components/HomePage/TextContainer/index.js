/* eslint-disable camelcase */
import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Author from './Author'
import Footer from './Footer'
import Title from './Title'

const styles=StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    width: "70%"
  },
  subContainer: {
    paddingVertical: 5
  },
})
const TextContainer = ({ params }) => {
  const { title, byline, published_date, source } = params;
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Title title={title} />
      </View>
      <View style={styles.subContainer}>
        <Author byline={byline} />
        <Footer published_date={published_date} source={source} />
      </View>
    </View>
  );
};

TextContainer.propTypes = {
  params: PropTypes.shape({
    title: PropTypes.string,
    byline: PropTypes.string,
    published_date: PropTypes.string,
    source: PropTypes.string
  })
};

export default TextContainer;

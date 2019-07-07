import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Footer from './Footer'
import Content from './Content'
import Title from './Title'

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    backgroundColor: "hsla(150, 15%, 71%, 0.5)",
    borderRadius: 10,
    top: -30,
    padding: 20
  }
});

export const DetailsCard = ({ params }) => {
  const { title, date, author, content, url, source } = params;
  return (
    <View style={styles.container}>
      <Title title={title} date={date} author={author} />
      <Content content={content} />
      <Footer url={url} source={source} />
    </View>
  );
};

DetailsCard.propTypes = {
  params: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
    url: PropTypes.string,
    source: PropTypes.string
  })
};

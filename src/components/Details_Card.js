import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { TitleSection, TextSection, LinkSection } from "./index";

export const DetailsCard = ({ params }) => {
  const { title, date, author, content, url, source } = params;
  return (
    <View style={styles.container}>
      <TitleSection title={title} date={date} author={author} />
      <TextSection content={content} />
      <LinkSection url={url} source={source} />
    </View>
  );
};

DetailsCard.propTypes = {
  params: PropTypes.object,
  title: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  url: PropTypes.string,
  source: PropTypes.string
};

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

import React from "react";
import { Text,StyleSheet } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  titleText: {
    textAlign: "justify",
    fontSize: 16
  }
});

const Title = ({ title }) => {
  return (
    <Text numberOfLines={2} ellipsizeMode="tail" style={styles.titleText}>
      {title}
    </Text>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;

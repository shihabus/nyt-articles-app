/* eslint-disable camelcase */
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  greyText: {
    fontSize: 14,
    color: "gray"
  },
  dateText: {
    fontSize: 12,
    color: "gray"
  },
  icon:{ alignSelf: "center" }
});

const Footer = ({ source, published_date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greyText} testID='Source Text'>{source}</Text>
      <Text style={styles.dateText} testID='Date container'>
        <Icon
          name="calendar"
          size={10}
          color="gray"
          style={styles.icon}
        />{" "}
        {published_date}
      </Text>
    </View>
  );
};

Footer.propTypes = {
  source: PropTypes.string,
  published_date: PropTypes.string
};

export default Footer;

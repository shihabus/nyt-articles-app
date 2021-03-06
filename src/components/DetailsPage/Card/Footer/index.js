import React from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-around" },
  link: { color: "blue" }
});
const Footer = ({ source, url }) => {
  return (
    <View style={styles.container}>
      <Text>{source}</Text>
      <Text style={styles.link} onPress={() => Linking.openURL(url)}>
        Read more...
      </Text>
    </View>
  );
};

export default Footer;

Footer.propTypes = {
  source: PropTypes.string,
  url: PropTypes.string
};

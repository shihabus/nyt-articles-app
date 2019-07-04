import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export const LinkSection = ({ source,url }) => {
  return (
    <View style={styles.container}>
      <Text>{source}</Text>
      <Text style={styles.link} onPress={() => Linking.openURL(url)}>
        Read more...
      </Text>
    </View>
  );
};

LinkSection.propTypes = {
    source: PropTypes.string,
    url: PropTypes.string,
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-around" },
  link: { color: "blue" }
});

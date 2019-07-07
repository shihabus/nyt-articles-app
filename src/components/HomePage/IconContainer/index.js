import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  container: {
    width: "10%",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center"
  },
  icon: { alignSelf: "center" }
});

const IconContainer = () => {
  return (
    <View style={styles.container}>
      <Icon name="chevron-right" size={15} color="gray" style={styles.icon} />
    </View>
  );
};

export default IconContainer;

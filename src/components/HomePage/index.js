/* eslint-disable react/prop-types */
import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import Card from "./Card";

const styles = StyleSheet.create({
  itemLineSeparator: {
    height: 0.5,
    width: "100%",
    backgroundColor: "#CED0CE",
    marginLeft: 10
  }
});


export const List = ({ article, handleSelection }) => {
  const renderSeparator = () => <View style={styles.itemLineSeparator} />;

  const renderArticle = ({ item }) => {
    const { id } = item;
    return <Card handleSelection={handleSelection} item={item} key={id} />;
  };

  return (
    <View>
      <FlatList
        data={article}
        contentContainerStyle={{ paddingBottom: 5 }}
        ItemSeparatorComponent={renderSeparator}
        renderItem={x => renderArticle(x)}
      />
    </View>
  );
};

List.propTypes = {
  article: PropTypes.arrayOf(PropTypes.object),
  handleSelection: PropTypes.func,
};


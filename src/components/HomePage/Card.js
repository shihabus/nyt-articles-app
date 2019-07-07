/* eslint-disable camelcase */
import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity,StyleSheet } from "react-native";
import ImageContainer from './ImageContainer'
import TextContainer from './TextContainer'
import IconContainer from './IconContainer'

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        backgroundColor: "#fff",
        alignContent: "center"
      },
});

const Card = ({ item,handleSelection }) => {
  const { byline, source, published_date, title, media, id } = item;
  const params = { byline, source, published_date, title };
  const urlToImage = media[0]["media-metadata"]
    .filter(x => x.format === "Large Thumbnail")[0]
    .url.toString();

  const handler=(selection)=>{
    handleSelection(selection)
  }

  return (
    <TouchableOpacity
      key={id}
      style={styles.container}
      onPress={()=>handler(params)}
    >
      <ImageContainer urlToImage={urlToImage} />
      <TextContainer params={params} />
      <IconContainer />
    </TouchableOpacity>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    byline: PropTypes.string,
    source: PropTypes.string,
    published_date: PropTypes.string,
    title: PropTypes.string,
    media: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.number
  }),
  handleSelection:PropTypes.func

};

export default Card;

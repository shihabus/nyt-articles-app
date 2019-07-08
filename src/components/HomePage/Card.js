/* eslint-disable camelcase */
import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, StyleSheet } from "react-native";
import ImageContainer from "./ImageContainer";
import TextContainer from "./TextContainer";
import IconContainer from "./IconContainer";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    backgroundColor: "#fff",
    alignContent: "center"
  }
});

export const ImageExtractor=(media,type)=>(
  media[0]["media-metadata"]
  .filter(x => x.format === type)[0]
  .url.toString()
)

const Card = ({ item,handleSelection }) => {

  const { byline, source, published_date, title, media,abstract,url } = item;

  const urlToImage = ImageExtractor(media,"Large Thumbnail")

  const urlToLargeImage = ImageExtractor(media,"mediumThreeByTwo440")

  const params = { byline, source, published_date, title,abstract,url,imageURL:urlToLargeImage};

  const handler=(selection)=>{
    handleSelection(selection)
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={()=>handler(params)}
    >
      <ImageContainer urlToImage={urlToImage} testID='ImageContainer'/>
      <TextContainer params={params} testID='TextContainer'/>
      <IconContainer testID='IconContainer'/>
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
    id: PropTypes.number,
    abstract: PropTypes.string,
    url: PropTypes.string
  }),
  handleSelection: PropTypes.func
};

export default Card;

import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";

const ImageContainer = ({ urlToImage }) => (
  <View style={styles.imageContainer}>
    <Image
      style={styles.imageStyle}
      resizeMode="contain"
      source={{ uri: urlToImage }}
    />
  </View>
);



const IconContainer = () => (
  <View style={styles.iconContainer}>
    <Icon name="chevron-right" size={15} color="gray" style={styles.icon} />
  </View>
);

const TitleContainer=({params})=>{
  const {title,byline,published_date,source}=params
  return (
  <View style={styles.textContainer}>
          <View style={styles.subSectionContainer}>
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.titleText}
            >
              {title}
            </Text>
          </View>
          <View style={styles.subSectionContainer}>
            <View>
              <Text style={styles.greyText}>{byline}</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.greyText}>{source}</Text>
              <Text style={styles.dateText}>
                <Icon
                  name="calendar"
                  size={10}
                  color="gray"
                  style={{ alignSelf: "center" }}
                />{" "}
                {published_date}
              </Text>
            </View>
          </View>
        </View>
)}
export const NewsCard = ({ article, handleSelection }) => {
  renderSeparator = () => <View style={styles.itemLineSeparator} />;

  renderItem = ({item}) => {
    const { byline, source, published_date, title, media, id } = item;
    const params={ byline, source, published_date, title }
    const urlToImage = media[0]["media-metadata"]
      .filter(item => item.format === "Large Thumbnail")[0]
      ["url"].toString();

    return (
      <TouchableOpacity
        key={id}
        style={styles.cardContainer}
        onPress={() => handleSelection(item)}
      >
        <ImageContainer urlToImage={urlToImage} />
        <TitleContainer params={params}/>
        <IconContainer />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={article}
        contentContainerStyle={{ paddingBottom: 5 }}
        ItemSeparatorComponent={renderSeparator}
        key={item => item.index}
        renderItem={article => this.renderItem(article)}
      />
    </View>
  );
};

NewsCard.propTypes = {
  article: PropTypes.array,
  handleSelection: PropTypes.func
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    backgroundColor: "#fff",
    alignContent: "center"
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    width: "70%"
  },
  subSectionContainer: {
    paddingVertical: 5
  },
  titleText: {
    textAlign: "justify",
    fontSize: 16
  },
  greyText: {
    fontSize: 14,
    color: "gray"
  },
  dateText: {
    fontSize: 12,
    color: "gray"
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "20%"
  },
  imageStyle: {
    backgroundColor: "#CED0CE",
    height: 50,
    width: 50,
    alignSelf: "center",
    borderRadius: 25
  },
  itemLineSeparator: {
    height: 0.5,
    width: "100%",
    backgroundColor: "#CED0CE",
    marginLeft: 10
  },
  iconContainer: {
    width: "10%",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center"
  },
  icon: { alignSelf: "center" }
});

import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {
  ImageSection,
  DetailsCard
} from "../../components";
import {COLORS,STRINGS} from '../../constants'

class DetailsPage extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: STRINGS.detailsPageTitle,
      headerStyle: {
        backgroundColor: COLORS.headerBar
      },
      headerTintColor: COLORS.headerTextColor,
      headerTitleStyle: {
        fontWeight: "normal",
        fontSize: 18
      }
    };
  };

  render() {
    const {
      selectedArticle: {
        abstract,
        byline,
        published_date,
        source,
        title,
        url,
        media
      }
    } = this.props;
    const urlToImage = media[0]["media-metadata"]
      .filter(item => item.format === "mediumThreeByTwo440")[0]
      ["url"].toString();
    const params = {
      title,
      date: published_date,
      author: byline,
      content: abstract,
      url,
      source
    };
    return (
      <View style={{ flex: 1 }}>
        <ImageSection url={urlToImage} />
        <DetailsCard params={params} />
      </View>
    );
  }
}

DetailsPage.propTypes = {
  selectedArticle: PropTypes.object,
  navigation: PropTypes.object
};

const mapStateToProps = ({ selection }) => {
  const { selectedArticle } = selection;
  return { selectedArticle };
};

export default connect(
  mapStateToProps,
  null
)(DetailsPage);

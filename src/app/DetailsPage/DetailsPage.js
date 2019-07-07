/* eslint-disable camelcase */
import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { ImageSection, DetailsCard } from "../../components/DetailsPage";
import { COLORS, STRINGS } from "../../constants";

class DetailsPage extends Component {
  static navigationOptions = () => {
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
        imageURL
      }
    } = this.props;

    const urlToImage = imageURL;

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
        <ImageSection url={urlToImage} testID='ImageSection'/>
        <DetailsCard params={params} testID='DetailsCard'/>
      </View>
    );
  }
}

DetailsPage.propTypes = {
  selectedArticle: PropTypes.shape({
    abstract: PropTypes.string,
    byline: PropTypes.string,
    published_date: PropTypes.string,
    source: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    imageURL: PropTypes.string
  })
};

const mapStateToProps = ({ selection }) => {
  const { selectedArticle } = selection;
  return { selectedArticle };
};

export default connect(
  mapStateToProps,
  null
)(DetailsPage);

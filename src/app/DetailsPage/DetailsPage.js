import React, { Component } from "react";
import { View, ScrollView, Text, Linking } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  ImageSection,
  TitleSection,
  TextSection,
  LinkSection,
  DetailsCard
} from "../../components";
import {COLORS,STRINGS} from '../../constants'

const DATA = {
  selectedArticle: {
    url:
      "https://www.nytimes.com/2019/06/27/us/pregnant-woman-shot-marshae-jones.html",
    adx_keywords:
      "Pregnancy and Childbirth;Murders, Attempted Murders and Homicides;Jones, Marshae;Jemison, Ebony;Alabama;Abortion;Women and Girls;Women's Rights;Jefferson County (Ala);Law and Legislation;Race and Ethnicity",
    column: null,
    section: "U.S.",
    byline: "By SARAH MERVOSH",
    type: "Article",
    title:
      "Alabama Woman Who Was Shot While Pregnant Is Charged in Fetus\u2019s Death",
    abstract:
      "Marshae Jones was five months pregnant when she was shot in the stomach. The police say she initiated a fight that led to the shooting.",
    published_date: "2019-06-27",
    source: "The New York Times",
    id: 100000006583103,
    asset_id: 100000006583103,
    views: 1,
    des_facet: [
      "PREGNANCY AND CHILDBIRTH",
      "MURDERS, ATTEMPTED MURDERS AND HOMICIDES",
      "WOMEN AND GIRLS",
      "WOMEN'S RIGHTS",
      "LAW AND LEGISLATION",
      "RACE AND ETHNICITY"
    ],
    org_facet: ["ABORTION"],
    per_facet: ["JONES, MARSHAE", "JEMISON, EBONY"],
    geo_facet: ["ALABAMA", "JEFFERSON COUNTY (ALA)"],
    media: [
      {
        type: "image",
        subtype: "photo",
        caption: "Marshae Jones",
        copyright: "Jefferson County Jail",
        approved_for_syndication: 1,
        "media-metadata": [
          {
            url:
              "https://static01.nyt.com/images/2019/06/27/multimedia/27xp-alabama1/27xp-alabama1-square320.jpg",
            format: "square320",
            height: 320,
            width: 320
          },
          {
            url:
              "https://static01.nyt.com/images/2019/06/27/multimedia/27xp-alabama1/27xp-alabama1-thumbStandard.jpg",
            format: "Standard Thumbnail",
            height: 75,
            width: 75
          },
          {
            url:
              "https://static01.nyt.com/images/2019/06/27/multimedia/27xp-alabama1/4193802805fd4e0abe4037abb9811ce0-articleInline.jpg",
            format: "Normal",
            height: 238,
            width: 190
          },
          {
            url:
              "https://static01.nyt.com/images/2019/06/27/multimedia/27xp-alabama1/27xp-alabama1-sfSpan.jpg",
            format: "Large",
            height: 263,
            width: 395
          },
          {
            url:
              "https://static01.nyt.com/images/2019/06/27/multimedia/27xp-alabama1/4193802805fd4e0abe4037abb9811ce0-jumbo.jpg",
            format: "Jumbo",
            height: 926,
            width: 740
          },
          {
            url:
              "https://static01.nyt.com/images/2019/06/27/multimedia/27xp-alabama1/4193802805fd4e0abe4037abb9811ce0-superJumbo.jpg",
            format: "superJumbo",
            height: 926,
            width: 740
          },
          {
            url:
              "https://static01.nyt.com/images/2019/06/27/multimedia/27xp-alabama1/27xp-alabama1-square640.jpg",
            format: "square640",
            height: 640,
            width: 640
          },
          {
            url:
              "https://static01.nyt.com/images/2019/06/27/multimedia/27xp-alabama1/27xp-alabama1-thumbLarge.jpg",
            format: "Large Thumbnail",
            height: 150,
            width: 150
          },
          {
            url:
              "https://static01.nyt.com/images/2019/06/27/multimedia/27xp-alabama1/27xp-alabama1-mediumThreeByTwo210.jpg",
            format: "mediumThreeByTwo210",
            height: 140,
            width: 210
          },
          {
            url:
              "https://static01.nyt.com/images/2019/06/27/multimedia/27xp-alabama1/27xp-alabama1-mediumThreeByTwo440.jpg",
            format: "mediumThreeByTwo440",
            height: 293,
            width: 440
          }
        ]
      }
    ]
  }
};

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

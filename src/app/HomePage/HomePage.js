/* eslint-disable react/sort-comp */
/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchNews, selectedArticle } from "./store";
import { Error, Loader } from "../../components/Common";
import { List } from "../../components/HomePage";
import { COLORS, STRINGS } from "../../constants";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

class HomePage extends Component {

  constructor(props) {
    super(props)
}

  static navigationOptions = {
    title: STRINGS.homePageTitle,
    headerRight: (
      <View style={{ paddingHorizontal: 20 }}>
        <Icon name="search" size={20} color={COLORS.headerTextColor} />
      </View>
    ),
    headerLeft: (
      <View style={{ paddingHorizontal: 20 }}>
        <Icon name="bars" size={20} color={COLORS.headerTextColor} />
      </View>
    ),
    headerStyle: {
      backgroundColor: COLORS.headerBar
    },
    headerTintColor: COLORS.headerTextColor,
    headerTitleStyle: {
      fontWeight: "normal",
      fontSize: 18
    }
  };

  componentDidMount() {
    const { fetchNews } = this.props;
    fetchNews();
  }

  selectionHandler = item => {
    const { selectedArticle, navigation } = this.props;
    selectedArticle(item);
    navigation.navigate("Details");
  };

  renderSuspense = () => {
    const { error, loading, articleArray } = this.props;
    if (error) {
      return <Error testID='Error'/>;
    }
    if (loading) {
      return <Loader testID='Loader'/>;
    }
    return (
      <View style={{ flex: 1 }} testID='List'>
        <List
          article={articleArray}
          handleSelection={this.selectionHandler}
        />
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.renderSuspense()}
      </SafeAreaView>
    );
  }
}

HomePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object,
  fetchNews: PropTypes.func,
  articleArray: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.bool,
  loading: PropTypes.bool,
  selectedArticle: PropTypes.func
};

const mapStateToProps = ({ articles }) => {
  const { loading, articleArray, error, success } = articles;
  return { loading, articleArray, error, success };
};

export default connect(
  mapStateToProps,
  { fetchNews, selectedArticle }
)(HomePage);



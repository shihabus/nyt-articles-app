import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet,SafeAreaView } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchNews, selectedArticle } from './store'
import { NewsCard, Error, Loader } from '../../components'
import {COLORS,STRINGS} from '../../constants'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articleArray: []
        }
    }
    static navigationOptions = {
        title: STRINGS.homePageTitle,
        headerRight:(
            <View style={{paddingHorizontal:20}}>
                <Icon name="search" size={20} color={COLORS.headerTextColor} />
            </View>
        ),
        headerLeft:(
            <View style={{paddingHorizontal:20}}>
                <Icon name="bars" size={20} color={COLORS.headerTextColor} />
            </View>
        ),
        headerStyle: {
            backgroundColor: COLORS.headerBar,
        },
        headerTintColor: COLORS.headerTextColor,
        headerTitleStyle: {
            fontWeight: 'normal',
            fontSize: 18
        },
    };

    componentDidMount() {
        const { fetchNews } = this.props
        fetchNews()
    }

    selectionHandler = (item) => {
        const { selectedArticle, navigation } = this.props;
        selectedArticle(item)
        navigation.navigate('Details')
    }


    renderSuspense = () => {
        const { error, loading, articleArray } = this.props;
        if (error) {
            return <Error />
        }
        else if (loading) {
            return <Loader />
        }
        return (
            <View style={{ flex: 1 }} >
                <NewsCard article={articleArray} handleSelection={this.selectionHandler} />
            </View>
        )
    }


    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this.renderSuspense()}
            </SafeAreaView>
        )
    }

}

HomePage.propTypes = {
    fetchNews: PropTypes.func,
    navigation: PropTypes.object,
    articleArray: PropTypes.array,
    error: PropTypes.bool,
    loading: PropTypes.bool,
    success: PropTypes.bool,
}

const mapStateToProps = ({ articles }) => {
    const { loading, articleArray, error, success } = articles
    return { loading, articleArray, error, success }
}


export default connect(mapStateToProps, { fetchNews, selectedArticle })(HomePage)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
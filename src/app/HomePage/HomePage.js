import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { fetchNews, selectedArticle } from './store'
import { NewsCard, Error, Loader, CustomStatusBar } from '../../components'

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articleArray: []
        }
    }
    static navigationOptions = {
        title: 'Home',
        headerRight: (
            <View style={{ padding: 15 }}>
                <Icon name="search" size={15} color="#6a6a6a" />
            </View>

        ),
        headerStyle: {
            backgroundColor: '#000',
        },
        headerTintColor: '#CED0CE',
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
        navigation.navigate('Details', { title: item.title })
    }


    renderSuspense = () => {
        const { error, loading, articleArray } = this.props;
        if (error) {
            return <Error />
        }
        else if (loading) {
            return <Loader />
        }
        return <NewsCard article={articleArray} style={{ flex: 1 }} handleSelection={this.selectionHandler} />
    }


    render() {
        return (
            <View style={styles.container}>
                <CustomStatusBar />
                {this.renderSuspense()}
            </View>
        )
    }

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
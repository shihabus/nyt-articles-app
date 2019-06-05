import React, { Component } from 'react'
import { View, StyleSheet, Text,StatusBar } from 'react-native';
import { connect } from 'react-redux'
import { fetchNews } from './store/actions'
import { NewsCard, Error, Loader } from '../../components'

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
            <View>
                <Text style={{color:'#fff'}}>H</Text>
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

    renderSuspense = () => {
        const { error, loading, articleArray } = this.props;
        if (error) {
            return <Error />
        }
        else if (loading) {
            return <Loader />
        }
        return <NewsCard article={articleArray} style={{ flex: 1 }} />
    }


    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='#000'
                    barStyle="light-content"
                />
                {this.renderSuspense()}
            </View>
        )
    }

}

const mapStateToProps = ({ articles }) => {
    console.log('ppp', articles);
    const { loading, articleArray, error, success } = articles
    return { loading, articleArray, error, success }
}


export default connect(mapStateToProps, { fetchNews })(HomePage)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
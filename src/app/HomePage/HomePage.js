import React, { Component } from 'react'
import { View } from 'react-native';
import {connect} from 'react-redux'
import {fetchNews} from './store'
import NewsCard from '../../components'

class HomePage extends Component {
    componentDidMount(){
        const {fetchNews}=this.props
        fetchNews()
    }

    render() {
        return (
            <View>
                <NewsCard/>
            </View>
        )
    }

}

const mapStateToProps = ({news}) => {
    const {loading,articles,error,success}=news
    return {loading,articles,error,success}
}

export default connect(mapStateToProps, {fetchNews})(HomePage)
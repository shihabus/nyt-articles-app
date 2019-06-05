import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { ImageSection, TitleSection,TextSection,CustomStatusBar } from '../../components'

class DetailsPage extends Component {
   
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title', 'Details Page'),
            headerStyle: {
                backgroundColor: '#fff',
            },
            headerTintColor: '#272927',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20
            },
        }
    };

    render() {
        const { selectedArticle } = this.props
        const { author, content, publishedAt, title, urlToImage } = selectedArticle
        const date = new Date(Date.parse(publishedAt)).toLocaleDateString()
        return (
            <ScrollView contentContainerStyle={{ paddingBottom: 10 }} showsVerticalScrollIndicator={false}>
                <CustomStatusBar/>
                <View style={{ flex: 1 }}>
                    <TitleSection title={title} date={date} author={author} />
                    <ImageSection url={urlToImage} />
                    <TextSection content={content}/>
                </View>
            </ScrollView>
        )
    }
}

DetailsPage.propTypes = {
    selectedArticle: PropTypes.object ,
    navigation: PropTypes.object ,
}

const mapStateToProps = ({ selection }) => {
    const { selectedArticle } = selection
    return { selectedArticle }
}

export default connect(mapStateToProps, null)(DetailsPage);


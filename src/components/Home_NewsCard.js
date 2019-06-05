import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export const NewsCard = ({ article, handleSelection }) => {

    renderSeparator = () => (<View style={styles.itemLineSeparator} />)

    renderHeader = () => (
        <View>
            <Text style={styles.headerText}>Your Daily Read</Text>
            <View style={styles.headerLineSeparator} />
        </View>
    )

    renderItem = news => {
        const { item } = news
        return (
            <TouchableOpacity
                key={news.index.toString()}
                style={styles.cardContainer}
                onPress={() => handleSelection(item)}>
                <View style={styles.textContainer}>
                    <Text
                        numberOfLines={2}
                        ellipsizeMode='tail'
                        style={styles.titleText}>{item.title}</Text>
                    <Text style={styles.authorText}>{item.author}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.imageStyle}
                        resizeMode='contain'
                        source={{ uri: `${item.urlToImage}` }}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <FlatList
                data={article}
                style={styles.listConatiner}
                contentContainerStyle={{ paddingBottom: 5 }}
                ItemSeparatorComponent={renderSeparator}
                keyExtractor={news => (news.index)}
                ListHeaderComponent={renderHeader}
                ListHeaderComponentStyle={styles.listHeaderText}
                renderItem={news => this.renderItem(news)} />
        </View>
    )
}

NewsCard.propTypes = {
    article: PropTypes.array,
    handleSelection: PropTypes.func
}


const styles = StyleSheet.create({
    listHeaderText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        height: 100,
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '60%'
    },
    titleText: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold'
    },
    authorText: {
        fontSize: 12
    },
    imageContainer: {
        justifyContent: 'center',
        width: '40%'
    },
    imageStyle: {
        height: '80%',
        width: '80%',
        alignSelf: 'flex-end',
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        padding: 10
    },
    headerLineSeparator: {
        height: 1,
        width: "100%",
        backgroundColor: "#CED0CE",
        marginLeft: 10
    },
    itemLineSeparator: {
        height: 0.5,
        width: "100%",
        backgroundColor: "#CED0CE",
        marginLeft: 10
    },
})


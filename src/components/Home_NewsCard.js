import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

export const NewsCard = ({ article }) => {

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 0.5,
                    width: "100%",
                    backgroundColor: "#CED0CE",
                    marginLeft: 10
                }}
            />
        );
    };

    renderHeader = () => {
        return (
            <View>
                <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#000', padding: 10 }}>Daily Feed</Text>
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#CED0CE",
                        marginLeft: 10
                    }}
                />
            </View>
        )
    }
    return (
        <View>
            <FlatList
                data={article}
                style={styles.listConatiner}
                contentContainerStyle={{ paddingBottom: 5 }}
                ItemSeparatorComponent={renderSeparator}
                keyExtractor={news => news.index}
                ListHeaderComponent={renderHeader}
                ListHeaderComponentStyle={{ fontSize: 18, fontWeight: 'bold', }}
                renderItem={(news) => {
                    const { item } = news
                    return (
                        <View key={Number(news.index)} style={styles.cardContainer}>
                            <View style={styles.textContainer}>
                                <Text numberOfLines={2} ellipsizeMode='tail' style={{ color: '#000', fontSize: 15, fontWeight: 'bold' }}>{item.title}</Text>
                                <Text style={{ fontSize: 12 }}>{item.author}</Text>
                            </View>
                            <View style={styles.imageContainer}>
                                <Image
                                    style={styles.imageStyle}
                                    resizeMode='cover'
                                    source={{ uri: `${item.urlToImage}` }}
                                />
                            </View>
                        </View>
                    )
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    listConatiner: {
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
    },
    imageContainer: {
        justifyContent: 'center',
        width: '40%'
    },
    imageStyle: {
        height: 80,
        width: 80,
        alignSelf: 'flex-end',
    }
})


import React,{useState} from 'react'
import { View, Image, StyleSheet,TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';



class SearchBar extends React.Component{
    constructor(props){
        super(props)
        this.state={
            query:''
        }
    }
    render(){
        const {query}=this.state
        return (
            <View style={{flexDirection:'row',backgroundColor: 'red',justifyContent:'space-around',height:100 }}>
                <TextInput
                    value={query}
                    placeholder='Search...'
                    onChange={(query)=>this.setState({query})}
                    style={{backgroundColor: '#fff',flex:1}}
    
                />
                <Icon name="search" size={15} color="#6a6a6a" />
            </View>
        )
    }
}

export default SearchBar

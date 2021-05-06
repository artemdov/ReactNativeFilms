import React from 'react';
import {StyleSheet, Image, TouchableOpacity, Text, View, TextInput, Button, Alert} from 'react-native';
import {w} from "./constans";


export const ImageSecondScreen = ({image}) => {
    const {imageBlock, ImageContainer,mainContainer} = styles

    return (
        <View style={mainContainer}>
            <View style={ImageContainer}>
                <Image style={imageBlock}
                       source={{uri: image}}/>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingVertical: 10,

    },
    ImageContainer: {
        marginTop: 10,
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.6,
        borderRadius: 10,
        backgroundColor:'#fff'
    },
    imageBlock: {
        width: w / 1.6,
        height: w * 0.9,
        borderRadius: 10,
    }

});
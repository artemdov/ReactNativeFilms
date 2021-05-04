import React from 'react';
import {StyleSheet, Image, TouchableOpacity, Text, View, TextInput, Button, Alert} from 'react-native';
import {w} from "./constans";


export const ImageBlock = () => {
    const {imageName, imageBlock, ImageContainer, image} = styles
    return (
        <View style={ImageContainer}>
            <View style={image}>
                <Image style={imageBlock}
                       source={{uri: 'https://static.tvmaze.com/uploads/images/original_untouched/6/16463.jpg'}}/>
            </View>
            <Text style={imageName}>Batman</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageName: {
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        width: w / 2.4
    },
    imageBlock: {
        width: w / 2.4,
        height: w * 0.63,
        borderRadius: 10
    },
    ImageContainer: {
        width: w / 2.4
    },
    image: {
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.6,
    }

});
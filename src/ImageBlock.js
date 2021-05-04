import React from 'react';
import {StyleSheet, Image, TouchableOpacity, Text, View, TextInput, Button, Alert} from 'react-native';
import {w} from "./constans";


export const ImageBlock = (props) => {
    const name = props.appState.show.name
    const img = props.appState.show.image.original
    const {imageName, imageBlock, ImageContainer, imageView} = styles

    return (
        <View style={ImageContainer}>
            <View style={imageView}>
                <Image style={imageBlock}
                       source={{uri: img}}/>
            </View>
            <Text style={imageName}>{name.toUpperCase()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageName: {
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        width: w / 2.4,
        marginBottom: 20,
    },
    imageBlock: {
        width: w / 2.4,
        height: w * 0.63,
        borderRadius: 10,
    },
    ImageContainer: {
        width: w / 2.4,

    },
    imageView: {
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.6,
    }

});
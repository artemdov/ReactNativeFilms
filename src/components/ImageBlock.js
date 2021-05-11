import React from 'react';
import {StyleSheet, Image, TouchableOpacity, Text, View} from 'react-native';
import {w} from "./constans";


export const ImageBlock = (props) => {

    const name = props.data.name
    const img = props.data.image === null ? 'error' : props.data.image.original
    const {imageName, imageBlock, ImageContainer, imageView} = styles

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={ImageContainer}>
                <View style={imageView}>
                    <Image style={imageBlock}
                           source={{uri: img}}/>
                </View>
                <Text style={imageName}>{name.toUpperCase()}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ImageContainer: {
        width: w / 2.4,
        paddingVertical: 10
    },
    imageName: {
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        width: w / 2.4,
        marginBottom: 20,
        paddingTop: 10
    },
    imageBlock: {
        width: w / 2.4,
        height: w * 0.63,
        borderRadius: 10,
    },
    imageView: {
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.6,
        backgroundColor: '#fff',
        borderRadius: 10
    }

});
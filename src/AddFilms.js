import React, {useEffect, useState} from 'react';
import {StyleSheet, Image, TouchableOpacity, Text, View, TextInput, Button, Alert} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {getDataTC} from "./redux/addFilmReducer";


export const AddFilms = () => {


    const {viewStyle, input, imageButton} = styles

   /* useEffect(() => {

        try{
            dispatch(getDataTC())
        } catch (error) {
            throw new Error(error)
        }

    }, [])*/

    /*useEffect(() => {
        try {
            axios.get(url)
                .then((res) => {
                        const response = res.data
                        setAppState(response)
                    }
                )
        } catch (error) {
            throw new Error(error)
        }

    }, [])*/


    return (
        <View>
            <View style={viewStyle}>
                <TextInput style={input}/>
                <TouchableOpacity activeOpacity={0.5} onPress={() => Alert.alert('Hello', 'I am developer', [
                    {text: 'OK'}
                ])}>
                    <Image style={imageButton}
                           source={require('./buttonSearch.png')}/>
                </TouchableOpacity>
            </View>
            <View>
                {}
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    viewStyle: {
        height: 120,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: '#30d0fe',
        paddingBottom: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,

    },
    input: {
        width: '80%',
        height: 40,
        borderRadius: 15,
        backgroundColor: '#ffff',
        textAlign: 'center',
        justifyContent: 'center',

    },
    imageButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ffff'
    }
});
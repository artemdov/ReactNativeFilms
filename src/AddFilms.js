import React, {useEffect, useState} from 'react';
import {StyleSheet,ScrollView, Image, TouchableOpacity, Text, View, TextInput, Button, Alert} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {getDataTC} from "./redux/addFilmReducer";
import {ImageBlock} from "./ImageBlock";
import axios from "axios";


export const AddFilms = () => {
    const url = 'https://api.tvmaze.com/search/shows?q=batman'
    const [appState, setAppState] = useState([])

    const {viewStyle, input, imageButton, arrayImages} = styles

    /* useEffect(() => {

         try{
             dispatch(getDataTC())
         } catch (error) {
             throw new Error(error)
         }

     }, [])*/

    useEffect(() => {
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

    }, [])


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
            <ScrollView>
            <View style={arrayImages}>
                {
                    appState.map(item =>
                        <ImageBlock key={item.id} appState={item}/>)
                }
            </View>
            </ScrollView>
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
    },
    arrayImages: {
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 2,
        justifyContent: 'space-around',
        marginBottom: '58%'
    }
});
import React from 'react';
import {StyleSheet, Pressable, ScrollView, Image, TouchableOpacity, Text, View, TextInput, Button, Alert} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {getDataTC} from "../redux/addFilmReducer";
import {ImageBlock} from "../components/ImageBlock";
import axios from "axios";
import {SECOND_SCREEN_VIEW} from "../routes";


export const SecondScreen = ({navigation}) => {
    const {header} = styles



    return (

        <View style={header}>
            <Pressable onPress={()=>{navigation.navigate()}}/>
            <Pressable/>
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
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

    }
})
import React from 'react';
import {StyleSheet,ScrollView, Image, TouchableOpacity, Text, View, TextInput, Button, Alert} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {getDataTC} from "../redux/addFilmReducer";
import {ImageBlock} from "../components/ImageBlock";
import axios from "axios";
import {SECOND_SCREEN_VIEW} from "../routes";


export const SecondScreen = ({navigation}) => {



    return (

        <View>
            <Button onPress={()=>{navigation.navigate()}}/>
           <Text>Hello</Text>
        </View>

    )
}

const styles = StyleSheet.create({

});
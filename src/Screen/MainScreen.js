import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Text,
    View,
    TextInput,
    Button,
    Alert,
    onChangeText, onBlur
} from 'react-native';
import {ImageBlock} from "../components/ImageBlock";
import axios from "axios";
import Ionicons from "react-native-vector-icons/Ionicons";
import {ifIphoneX} from "react-native-iphone-x-helper";
import {onChange} from "react-native-reanimated";
import {w} from "../components/constans";

export const MainScreen = ({navigation}) => {

    const url = 'https://api.tvmaze.com/search/shows?q=batman'
    const [data, setData] = useState([])
    const {viewStyle, input, searchButton, arrayImages, iconSearch} = styles

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
                        setData(response)
                    }
                )
        } catch (error) {
            throw new Error(error)
        }

    }, [])


    return (

        <View>
            <View style={viewStyle}>
                <TextInput style={input}
                placeholder={'Search'}/>
                <TouchableOpacity onPress={() => alert('Hello')}>
                    <View style={searchButton}>
                    <Ionicons name='search-circle' style={iconSearch}/>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={arrayImages}>
                    {
                        data.map(item =>
                            <ImageBlock key={item.show.id}
                                        data={item.show}
                                        onPress={() => {
                                            navigation.navigate('SecondScreen', (item.show))
                                        }}
                            />
                        )
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
        position: 'relative',
        ...ifIphoneX({
            height: 120
        }, {
            height: 110
        }),

    },
    input: {
        width: w-90,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#ffff',
        fontSize: 20,
        paddingLeft: 15,
        position: 'relative',
        marginLeft: 15,
    },
    iconSearch: {
        fontSize: 70,
        top: 20
    },
    arrayImages: {
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 2,
        justifyContent: 'space-around',
        marginBottom: '40%'
    }

})
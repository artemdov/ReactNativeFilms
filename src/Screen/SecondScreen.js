import React from 'react';
import {
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Text,
    View,

} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import {ifIphoneX} from "react-native-iphone-x-helper";
import {w} from "../components/constans";
import {ImageSecondScreen} from "../components/ImageSecondScreen";


export const SecondScreen = ({navigation, route}) => {

    const image = route.params.image.original
    const name = route.params.name
    const summary = route.params.summary
    const {header, backArrowStyle, textArrowStyle, SecondScreenName, SecondScreenText, secondScreenView} = styles

    return (
        <View>
            <View style={header}>


                <TouchableOpacity>
                    <Text onPress={() => {
                        navigation.navigate('MainScreen')
                    }}>
                        <Ionicons name='chevron-back-outline' style={backArrowStyle}/>
                    </Text>
                </TouchableOpacity>
                <Text numberOfLines={1} ellipsizeMode='tail' style={textArrowStyle}>{name}</Text>
            </View>
            <ScrollView>
                <View style={secondScreenView}>
                    <ImageSecondScreen image={image}/>
                    <Text style={SecondScreenName}>{name.toUpperCase()}</Text>
                    <Text style={SecondScreenText}>{summary.replace(/<[^>]+>/g, '')}</Text>
                </View>
            </ScrollView>

        </View>


    )
}

const styles = StyleSheet.create({
    header: {
        height: 120,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        backgroundColor: '#30d0fe',
        ...ifIphoneX({
            height: 116
        }, {
            height: 90
        }),
        paddingBottom: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
    },
    backArrowStyle: {
        ...ifIphoneX({
            paddingTop: 75
        }, {
            paddingTop: 30
        }),
        fontSize: 40,
        color: '#fff',
        marginLeft: 20,
    },
    textArrowStyle: {
        color: '#fff',
        fontSize: 32,
        ...ifIphoneX({
            paddingTop: 75
        }, {
            paddingTop: 50
        }),
        width: w - 50,
    },
    SecondScreenText: {
        fontSize: 15,
        padding: 15,
        paddingHorizontal: 15,
        textAlign: 'center'
    },
    SecondScreenName: {
        fontSize: 25,
        padding: 15,
        textAlign: 'center',
        fontWeight: 'bold'

    },
    secondScreenView: {

        alignItems: 'center',
        marginBottom: 160
    }

})
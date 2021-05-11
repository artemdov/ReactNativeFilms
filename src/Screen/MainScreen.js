import React from 'react';
import {
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    View,
    TextInput,
} from 'react-native';
import {ImageBlock} from "../components/ImageBlock";
import {ifIphoneX} from "react-native-iphone-x-helper";
import {w} from "../constans";
import {useDispatch, useSelector} from "react-redux";
import {changeValueAC, loadData} from "../redux/addFilmReducer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export const MainScreen = ({navigation}) => {
    const data = useSelector(state => state.dataFilms.data)
    const value = useSelector(state => state.dataFilms.value)
    const dispatch = useDispatch()
    const {viewStyle, block, input, searchButton, arrayImages, iconSearch} = styles


    const onChangeHandler = (value) => {
        dispatch(changeValueAC(value))
    }
    const onClickHandler = () => {
        dispatch(loadData(value))
    }

    return (
        <View>
            <View style={viewStyle}>
                <View style={block}>
                    <TextInput style={input}
                               placeholder={'Search'}
                               onChangeText={onChangeHandler}/>
                    <TouchableOpacity onPress={onClickHandler}>
                        <View style={searchButton}>
                            <MaterialCommunityIcons name='magnify' style={iconSearch}/>
                        </View>
                    </TouchableOpacity>
                </View>
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
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#30d0fe',
        paddingHorizontal: 20,
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
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 60,
        width: w - 35,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20
    },
    input: {
        width: w - 90,
        height: 23,
        backgroundColor: '#fff',
        fontSize: 18,
        marginLeft: 15,
    },
    searchButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#000',
    },
    iconSearch: {
        fontSize: 30,
        marginTop: 2,
        color: '#fff'
    },
    arrayImages: {
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 2,
        justifyContent: 'space-around',
        marginBottom: '30%'
    }

})
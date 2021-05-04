import React from 'react';
import {AddFilms} from "./src/AddFilms";
import {StyleSheet, View} from "react-native";
import store from "./src/redux/store";
import { Provider } from 'react-redux';

const AppWrapper = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

export const App = () =>
    <View style={styles.container}>
            <AddFilms/>
    </View>


const styles = StyleSheet.create({})
export default AppWrapper
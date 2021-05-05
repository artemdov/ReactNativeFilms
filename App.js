import React from 'react';
import {MainScreen} from "./src/Screen/MainScreen";
import {StyleSheet, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import store from "./src/redux/store";
import {Provider} from 'react-redux';
import {SecondScreen} from "./src/Screen/SecondScreen";

/*const AppWrapper = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}*/

const Stack = createStackNavigator()

export const App = () => {
    const Main = ({navigation}) => {
        const Press = ()=>{
            navigation.navigate('Second')
        }
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                        name={'Screen'}
                        component={MainScreen}
               />
                <Stack.Screen
                    name={'ScreenTwo'}
                    component={SecondScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}


export default App
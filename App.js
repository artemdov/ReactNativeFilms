import React from 'react';
import {MainScreen} from "./src/Screen/MainScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
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

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                        name={'MainScreen'}
                        component={MainScreen}
                        options={{
                         header: () =>null
                        }}
               />
                <Stack.Screen
                    name={'SecondScreen'}
                    component={SecondScreen}
                    options={{
                        header: () =>null
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default App
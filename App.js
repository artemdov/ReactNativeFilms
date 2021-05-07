import React from 'react';
import Screen from "./src/Screen/Screen";
import {Provider} from "react-redux";
import store from './src/redux/store'


const App = () => {
    return (
        <Provider store={store}>
        <Screen/>
        </Provider>
    )
}
export default App
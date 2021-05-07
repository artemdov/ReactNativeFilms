import React from 'react';
import Screen from "./src/Screen/Screen";
import {Provider} from "react-redux";



const App = () => {

    return (
        <Provider store={store}>
        <Screen/>
        </Provider>
    )
}
console.log('store', store.getState())
export default App
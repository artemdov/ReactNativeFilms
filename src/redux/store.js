import {applyMiddleware, combineReducers, createStore,} from "redux";
import thunkMiddleWare from 'redux-thunk'
import addFilmReducer from "./addFilmReducer";

const rootReducer = combineReducers({
    imageList: addFilmReducer
})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))
export default store

window.store = store
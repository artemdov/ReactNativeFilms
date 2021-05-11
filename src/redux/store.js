import {applyMiddleware, combineReducers, createStore,} from "redux";
import addFilmReducer from "./addFilmReducer";
import createSagaMiddleware from 'redux-saga' ;
import {watcherData} from "./sagas";
import thunkMiddleware from 'redux-thunk'


const sagaMiddleware = createSagaMiddleware()
export const rootReducer = combineReducers({
    dataFilms: addFilmReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, sagaMiddleware))


export default store
window.store = store

sagaMiddleware.run(watcherData)
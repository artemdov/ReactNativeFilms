import {takeEvery, put, call} from 'redux-saga/effects'
import {changeValueAC, getMovies, LOAD_DATA} from "./addFilmReducer";
import {API} from "../api/api";



export function* workerData(action) {
    try{
        let response = yield call( API.getData, action.value)
        yield put(getMovies(response.data))
        yield put(changeValueAC)
    } catch(er){
        er('Error')
    }

}

export function* watcherData() {
    yield takeEvery(LOAD_DATA, workerData)
}
/*
//thunk
export const changeValueTC = (value) => async (dispatch) => {
    const url = `https://api.tvmaze.com/search/shows?q=${value}`
    let response = await axios.get(url)
    dispatch(getMovies(response.data))
    dispatch(changeValueAC(value))
}
*/
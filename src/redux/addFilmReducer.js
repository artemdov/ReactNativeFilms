import axios from "axios";

const CHANGE_VALUE = 'CHANGE-VALUE'
const GET_MOVIES = 'GET-MOVIES'


const initialState = {
    value: '',
    data: []
}
const addFilmReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_VALUE: {
            return {
                ...state, value: action.value
            }
        }
        case GET_MOVIES: {
            return {
                ...state, data: action.data
            }
        }
        default:
            return state
    }
}


export const changeValueAC = (value) => {
    return {type: CHANGE_VALUE, value}
}
export const getMoviesAC = (data) => {
    return {type: GET_MOVIES, data}
}

export const changeValueTC = (value) => async (dispatch) => {
    const url = `https://api.tvmaze.com/search/shows?q=${value}`
    let response = await axios.get(url)
    dispatch(getMoviesAC(response.data))
    dispatch(changeValueAC(value))
}


export default addFilmReducer
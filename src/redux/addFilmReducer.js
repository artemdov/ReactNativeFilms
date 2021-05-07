import axios from "axios";

const CHANGE_VALUE = 'CHANGE-VALUE'


const initialState = {
    value: ''
}
const addFilmReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_VALUE: {
          return   {
              ...state, value: action.value
            }
        }
        default:
            return state
    }
}


export const changeValueAC = (value) => {
    return {type: CHANGE_VALUE, value}
}

export const changeValueTC = (value) => async (dispatch) => {
    const url = `https://api.tvmaze.com/search/shows?q=${value}`
    let response = await axios.get(url)
    dispatch(changeValueAC(response))
}




export default addFilmReducer
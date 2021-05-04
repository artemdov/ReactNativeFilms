import axios from "axios";

const GET_DATA = 'GET-DATA'


const url = 'https://api.tvmaze.com/search/shows?q=batman'
const initialState = {
    data: null
}
const addFilmReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_DATA: {
          return   {
              ...state, data: action.data
            }
        }
        default:
            return state
    }
}



export const getDataTC = () => async (dispatch) => {
    let response = await axios.get(url)
    dispatch(getDataAC(response.data))
}
export const getDataAC = (data) => {
    return {type: GET_DATA, data}
}



export default addFilmReducer
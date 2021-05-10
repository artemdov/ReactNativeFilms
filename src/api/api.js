import axios from "axios";
export const API = {
    getData(value) {
        return axios.get(`https://api.tvmaze.com/search/shows?q=${value}`)
    }
}
import axios from "axios";
import apiUrl from "../apiConfig.js";

//multi search to get movie, show, or people
export const getMultiSearch = (term) => {
    return axios({
        url: `${apiUrl}/search/multi/${term}`,
        method: "GET",
    })
};
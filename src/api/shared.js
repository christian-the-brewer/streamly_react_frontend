import axios from "axios";
import apiUrl from "../apiConfig.js";
import {formatInputForUrl} from "../utilities/util_functions.js";

//multi search to get movie, show, or people
export const getMultiSearch = (term) => {
    term = formatInputForUrl(term)
    return axios({
        url: `${apiUrl}/search/${term}`
    })
};
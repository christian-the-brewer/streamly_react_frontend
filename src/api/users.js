import axios from "axios";
import apiUrl from "../apiConfig.js";

export const getWatchList = (contentType) => {
    return axios({
        url: `${apiUrl}/watch_list/${contentType}`,
        method: "GET",
    })
};
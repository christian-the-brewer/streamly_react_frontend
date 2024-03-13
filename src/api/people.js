import axios from "axios";
import apiUrl from "../apiConfig.js";

export const getPersonById = (id) => {
    return axios({
        url: `${apiUrl}/person/${id}`,
        method: "GET",
    })
};
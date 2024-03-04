import axios from "axios";
import apiUrl from "../apiConfig.js";

//Get index of most popular movies across all platforms in user's region
export const getPopularMovies = (region) => {
    return axios({
        url: `${apiUrl}/movies/${region}`,
        method: "GET",
    })
};
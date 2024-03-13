import axios from "axios";
import apiUrl from "../apiConfig.js";

//Get index of popular shows across all platforms in users region
export const getPopularTV = (region) => {
    return axios({
        url: `${apiUrl}/tv/${region}`,
        method: "GET",
    })
};

//index of popular shows by region and platform
export const getPopularTVByPlatform = (region, platform) => {
    return axios({
        url: `${apiUrl}/tv/${region}/${platform}`,
        method: "GET",
    })
};

//get single tv show
export const getTVById = (showId) => {
    return axios({
        url: `${apiUrl}/tv/show/${showId}`,
        method: "GET",
    })
};
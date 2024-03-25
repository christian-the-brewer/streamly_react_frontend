import axios from "axios";
import apiUrl from "../apiConfig.js";

//Get watchlist
export const getWatchList = (userId) => {
    console.log(`get watchlist of user ${userId}`)
    return axios({
        url: `${apiUrl}/watch_list/${userId}`,
        method: "GET",
        data: {
            userId: userId,
        }
    })
};

//PUT content into watchlist
export const addContentToWatchList = (contentType, userId, contentId) => {
    return axios({
        url: `${apiUrl}/watch_list`,
        method: "PUT",
        data: {
            contentType: contentType,
            userId: userId,
            contentId: contentId,
        },

    })
};
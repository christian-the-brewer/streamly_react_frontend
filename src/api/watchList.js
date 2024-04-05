import axios from "axios";
import apiUrl from "../apiConfig.js";

//Get watchlist
export const getWatchList = (userId, accessToken) => {
    console.log(`get watchlist of user ${userId}`)
    return axios({
        url: `${apiUrl}/watch_list/${userId}`,
        method: "GET",
        // data: {
        //     userId: userId,
        // }
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
};

//PUT content into watchlist
export const addContentToWatchList = (userId, contentId, contentPoster, contentType, accessToken) => {
    console.log("begin add content to watchlist")
    return axios({
        url: `${apiUrl}/watch_list`,
        method: "PUT",
        data: {
            userId: userId,
            contentId: contentId,
            contentPoster: contentPoster,
            contentType: contentType
        },
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
};

//PATCH content out of watchlist
export const removeContentFromWatchList = (userId, contentId, contentPoster, contentType, accessToken) => {
    console.log("begin add content to watchlist")
    return axios({
        url: `${apiUrl}/watch_list`,
        method: "PUT",
        data: {
            userId: userId,
            contentId: contentId,
            contentPoster: contentPoster,
            contentType: contentType
        },
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
};
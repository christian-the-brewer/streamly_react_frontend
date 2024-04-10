import axios from "./axios.js";
import apiUrl from "../apiConfig.js";

//DELETE USER
export const deleteUser = (userId, accessToken) => {
    return axios({
        url: `/admin`,
        method: "DELETE",
        data: {
            userId: userId,
        },
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
};

//PATCH user password
export const changePassword = (userId, accessToken) => {
    return axios({
        url: "/admin",
        method: "PATCH",
        data: {
            userId: userId,
        },
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
};
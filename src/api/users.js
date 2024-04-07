import axios from "axios";
import apiUrl from "../apiConfig.js";

//DELETE USER
export const deleteUser = (userId, accessToken) => {
    return axios({
        url: `${apiUrl}/watch_list`,
        method: "DELETE",
        data: {
            userId: userId,
        },
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
};
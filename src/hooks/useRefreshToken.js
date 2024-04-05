import useAuth from "./useAuth.js";
import axios from "axios";
import apiUrl from "../apiConfig.js";

export default function useRefreshToken() {
    const {setAuth} = useAuth();

    const refresh = async () => {
        console.log("refreshing token");
        const response = await axios.get(`${apiUrl}/refresh`, {
            withCredentials: true
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return {...prev, accessToken: response.data.accessToken}
        });
        return response.data.accessToken;
    };
    return refresh;
};
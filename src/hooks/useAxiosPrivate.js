import {axiosPrivate} from "../api/axios.js";
import {useEffect} from "react";
import useRefreshToken from "./useRefreshToken.js";
import useAuth from "./useAuth.js";

export default function useAxiosPrivate() {
    const refresh = useRefreshToken();
    const {auth} = useAuth();

    useEffect(() => {

        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers["Authorization"]) {
                    console.log("No Auth header")
                    config.headers["Authorization"] = `Bearer ${auth?.accessToken}`;
                }
                console.log("config: ", config)
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) =>{
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    console.log("response interceptor: refreshing...")
                    const newAccessToken = await refresh();
                    prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );
        return () => {
            axiosPrivate.interceptors.response.eject(responseIntercept);
            axiosPrivate.interceptors.request.eject(requestIntercept);
        };
    },[auth, refresh]);

    return axiosPrivate;
}

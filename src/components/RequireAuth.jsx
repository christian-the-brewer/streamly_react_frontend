import {useLocation, Navigate, Outlet} from "react-router-dom";
import useAuth from "../hooks/useAuth.js";

export default function RequireAuth(props) {
    const {auth} = useAuth();
    const location = useLocation();
    console.log(auth)

    return (
        auth?.accessToken ? <Outlet/> :
            <Navigate to="/login" state={{from: location}} replace/>

    );
};
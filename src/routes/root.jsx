import NavBar from "../components/NavBar.jsx";
import {Outlet} from "react-router-dom";


export default function Root() {

    return (
        <>
            <NavBar/>
            <div id="detail">
                <Outlet />
            </div>
        </>
    )
}
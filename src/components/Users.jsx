import {useEffect, useState} from "react";
import axios from "axios";
import ApiConfig from "../apiConfig.js";
import apiUrl from "../apiConfig.js";
import useRefreshToken from "../hooks/useRefreshToken.js";
import useAxiosPrivate from "../hooks/useAxiosPrivate.js";
import {Button} from "react-bootstrap";
import data from "../data.js";
import {deleteUser} from "../api/users.js";
import useAuth from "../hooks/useAuth.js";

export default function Users() {
    const [users, setUsers] = useState();
    const refresh = useRefreshToken();
    const axiosPrivate = useAxiosPrivate();
    const {auth} = useAuth();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get(
                    "/users",
                    {signal: controller.signal});
                console.log(response.data.users);
                isMounted && setUsers(response.data.users);
            } catch (err) {
                console.error(err)
            }
        };
        getUsers();
        //cleanup function
        return () => {
            isMounted = false;
            //cancel any pending requests
            controller.abort();
        };
    }, []);


    const handleClick = async (userId) => {
        try {
            await deleteUser(userId, auth.accessToken)
        }catch (err) {
            console.error(err.message)
        }
    };

    return (
        <article>
            <h2>Users List</h2>
            {users?.length
                ? (
                    <ul className="userList">
                        {users.map((user) =>(
                            <li key={user?.user_id}>{user?.email} user#{user.user_id}<Button
                                onClick={() => handleClick(user.user_id)}
                                className="m-1" size="sm"
                                variant="outline-danger">Delete</Button></li>
                        ))}
                    </ul>
                ) : <p>No users found</p>}

            <button onClick={()=> refresh()}>Refresh</button>
        </article>
    )
};
import {useEffect, useState} from "react";
import axios from "axios";
import ApiConfig from "../apiConfig.js";
import apiUrl from "../apiConfig.js";
import useRefreshToken from "../hooks/useRefreshToken.js";

export default function Users() {
    const [users, setUsers] = useState();
    const refresh = useRefreshToken();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axios.get(
                    `${apiUrl}/users`,
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


    return (
        <article>
            <h2>Users List</h2>
            {users?.length
            ? (
                <ul>
                    {users.map((user) =>(
                        <li key={user?.user_id}>{user?.email}</li>
                    ))}
                </ul>
                ) : <p>No users found</p>}

            <button onClick={()=> refresh()}>Refresh</button>
        </article>
    )
};
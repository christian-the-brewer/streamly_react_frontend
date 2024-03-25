import {Button} from "react-bootstrap";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Modal} from "react-bootstrap";
import {useContext, useState} from "react";
import axios from "axios";
import apiUrl from "../apiConfig.js";
import AuthContext from "../context/AuthProvider.jsx";
import useAuth from "../hooks/useAuth.js";

export default function LoginModal(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {auth, setAuth} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                `${apiUrl}/login`,
                JSON.stringify({email, password}),
                {
                    headers: {"Content-Type": "application/json"},
                    withCredentials: true,
                })
            const accessToken = response?.data?.accessToken;
            const userId = response?.data?.userId;
            setAuth({
                email, password, userId, accessToken,
            });
            //clear inputs after success
            clearFields();
            navigate(from, {replace: true});
        } catch (err) {
            //clear password
            setPassword("");
            console.log(err);
            if (!err?.response) {
                console.log("No Server Response")
            } else if (err.response?.status === 400) {
                console.log("Missing Credentials")
            } else if (err.response?.status === 401) {
                console.log("Unauthorized")
            } else {
                console.log("Login Failed")
            }
        }
    };

    const clearFields = () => {
        setEmail("")
        setPassword("")
    };

    const handleChange = (event, setter) => {
        setter(event.target.value)
    };

    return (

        <Modal show={props.show} onHide={() => props.handleClose(clearFields)}>
            <Modal.Header>
                <Modal.Title>Sign In</Modal.Title>
                <Button variant="outline-danger" onClick={() => props.handleClose(clearFields)}>X</Button>
            </Modal.Header>
            <Modal.Body>
                <form className="" onSubmit={handleSubmit}>
                                       <div className="form-floating mb-3">
                                             <input onChange={(event) => handleChange(event, setEmail)} value={email} type="email" className="form-control rounded-3" id="floatingInput"
                                               placeholder="name@example.com" required/>
                                        <label htmlFor="floatingInput">Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input onChange={(event) => handleChange(event, setPassword)} value={password} type="password" className="form-control rounded-3" id="floatingPassword"
                                               placeholder="Password" required/>
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                    <Button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign in
                                    </Button>
                                    <hr className="my-4"/>
                                    <h2 className="fs-5 fw-bold mb-3">Don't have an account yet? </h2>
                                    <Button onClick={() => props.handleClose(clearFields)} as={Link} to="/register" variant="secondary"
                                            className="w-100 py-2 mb-2 btn rounded-3" type="submit">
                                        Sign up for free
                                    </Button>
                                </form>
            </Modal.Body>
        </Modal>
    )
};
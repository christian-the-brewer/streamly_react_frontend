import {useState} from "react";
import useAuth from "../../hooks/useAuth.js";
import {Link, useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import apiUrl from "../../apiConfig.js";
import {Button} from "react-bootstrap";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const {auth, setAuth} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            //make call to backend with user supplied password and email
            const response = await axios.post(
                `${apiUrl}/login`,
                JSON.stringify({email, password}),
                {
                    headers: {"Content-Type": "application/json"},
                    withCredentials: true,
                }
            );
            const accessToken = response?.data?.accessToken;
            setAuth({email, password, accessToken})
            console.log(response.data)
            clearFields();
            navigate(from, {replace: true});
        } catch (err) {
            //clear password from input
            setPassword("");
            //if no server response
            if (!err?.response) {
                setMessage("No Server Response.");
            }
            //if credentials are missing
            else if (err.response?.status === 400) {
                setMessage("Incomplete or missing credentials.")
            }
            //Invalid credentials
            else if (err.response?.status === 401) {
                setMessage("Unauthorized");
            }
            //catch all other errors
            else {
                setMessage("Login attemp failed")
            }
        }
    }

    const clearFields = () => {
        setEmail("");
        setPassword("");
    };

    const handleChange = (event, setter) => {
        setter(event.target.value);
    };

    return (
        <section>
            <form className="mt-4" onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input onChange={(event) => handleChange(event, setEmail)}
                           type="email" className="form-control rounded-3" value={email} id="email"
                           placeholder="name@example.com" required/>
                    <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={(event) => handleChange(event, setPassword)}
                           type="password" className="form-control rounded-3" id="floatingPassword"
                           placeholder="Password" required/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <Button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign in
                </Button>
                <small className="text-body-secondary">By clicking Sign up, you agree to the terms of
                    use.</small>
            </form>
            <hr className="my-4"/>
            <h2 className="fs-5 fw-bold mb-3">Don't have an account yet? </h2>
            <Button as={Link} to="/register" variant="secondary" className="w-100 py-2 mb-2 btn rounded-3"
                    type="submit">
                Sign up for free
            </Button>
        </section>
    )
};
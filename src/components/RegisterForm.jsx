import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import axios from "axios";
import apiUrl from "../apiConfig.js";
import {Navigate, useNavigate} from "react-router-dom";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export default function RegisterForm(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [inputValid, setInputValid] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        if (password === confirmedPassword) {
            if (password !== "") {
                setPasswordsMatch(true);
            }
        } else setPasswordsMatch(false);
    }, [password, confirmedPassword]);

    useEffect(() => {
        if (PWD_REGEX.test(password) && PWD_REGEX.test(confirmedPassword) && passwordsMatch) {
            setInputValid(true);
        } else {
            setInputValid(false)
        }
    }, [password, confirmedPassword, passwordsMatch]);
    const handleChange = (event, setter) => {
        setter(event.target.value)
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!inputValid) {
            return;
        } else {
            try {
                const response = await axios.post(
                    `${apiUrl}/register`,
                    JSON.stringify({email, password}),
                    {
                        headers: {"Content-Type": "application/json"},
                        withCredentials: true,
            })
                console.log(response.data);
                //TODO clear input fields, show success
                navigate("/");
            } catch (err) {
            console.log(err);
            }
        }
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
                <div className="form-floating mb-3">
                    <input onChange={(event) => handleChange(event, setConfirmedPassword)}
                           type="password" className="form-control rounded-3" id="matchPassword"
                           placeholder="Confirm Password" value={confirmedPassword} required/>
                    <label htmlFor="matchPassword">Confirm Password</label>
                </div>
                <Button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit"
                        disabled={!inputValid}>Sign up
                </Button>
                <small className="text-body-secondary">By clicking Sign up, you agree to the terms of
                    use.</small>
            </form>
            <hr className="my-4"/>
            <h2 className="fs-5 fw-bold mb-3">Already have an account? </h2>
            <Button onClick={props.handleShow} variant="secondary" className="w-100 py-2 mb-2 btn rounded-3"
                    type="submit">
                Sign in
            </Button>
        </section>
    )
};
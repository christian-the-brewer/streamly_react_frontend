import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function RegisterForm(props) {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState(false);

    useEffect(() => {
        if (password === confirmedPassword) {
            if (password !== "") {
                setPasswordsMatch(true);
            }
        }
    }, [password, confirmedPassword]);

    const handleChange = (event, setter) => {
        setter(event.target.value)
    };

    return (
        <section>
            <form className="mt-4">
                <div className="form-floating mb-3">
                    <input onChange={(event) => handleChange(event, setEmail)}
                           type="email" className="form-control rounded-3" id="email"
                           placeholder="name@example.com" required/>
                    <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={(event) => handleChange(event, setUsername)}
                           type="text" className="form-control rounded-3" id="username"
                           placeholder="username" required/>
                    <label htmlFor="username">Username</label>
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
                           placeholder="Confirm Password" required/>
                    <label htmlFor="matchPassword">Confirm Password</label>
                </div>
                <Button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit"
                        disabled={!passwordsMatch}>Sign up
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
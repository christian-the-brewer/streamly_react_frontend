import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function RegisterForm(props) {
    return (
        <form className="mt-4">
            <div className="form-floating mb-3">
                <input type="email" className="form-control rounded-3" id="floatingInput"
                       placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control rounded-3" id="floatingPassword"
                       placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <Button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up
            </Button>
            <small className="text-body-secondary">By clicking Sign up, you agree to the terms of
                use.</small>
            <hr className="my-4"/>
            <h2 className="fs-5 fw-bold mb-3">Already have an account? </h2>
            <Button onClick={props.handleShow} variant="secondary" className="w-100 py-2 mb-2 btn rounded-3" type="submit">
                Sign in
            </Button>
        </form>
    )
};
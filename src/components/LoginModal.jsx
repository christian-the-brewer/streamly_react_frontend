import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Modal} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";
import apiUrl from "../apiConfig.js";

export default function LoginModal(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
            console.log(response.data)
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event, setter) => {
        setter(event.target.value)
    };

    return (

        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header>
                <Modal.Title>Sign In</Modal.Title>
                <Button variant="outline-danger" onClick={props.handleClose}>X</Button>
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
                                    <Button onClick={props.handleClose} as={Link} to="/register" variant="secondary"
                                            className="w-100 py-2 mb-2 btn rounded-3" type="submit">
                                        Sign up for free
                                    </Button>
                                </form>
            </Modal.Body>
        </Modal>



        // <Modal show={props.show} className="modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabIndex="-1"
        //      role="dialog" id="modalSignin">
        //     <Modal.Dialog className="modal-dialog" role="document">
        //         <div className="modal-content rounded-4 shadow">
        //             <Modal.Header className="modal-header p-5 pb-4 border-bottom-0">
        //                 <h1 className="fw-bold mb-0 fs-2">Sign in</h1>
        //                 <Button onClick={()=>props.handleClose()} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></Button>
        //             </Modal.Header>
        //
        //             <Modal.Body className="modal-body p-5 pt-0">
        //                 <form className="">
        //                     <div className="form-floating mb-3">
        //                         <input type="email" className="form-control rounded-3" id="floatingInput"
        //                                placeholder="name@example.com"/>
        //                         <label htmlFor="floatingInput">Email address</label>
        //                     </div>
        //                     <div className="form-floating mb-3">
        //                         <input type="password" className="form-control rounded-3" id="floatingPassword"
        //                                placeholder="Password"/>
        //                         <label htmlFor="floatingPassword">Password</label>
        //                     </div>
        //                     <Button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign in
        //                     </Button>
        //                     <hr className="my-4"/>
        //                     <h2 className="fs-5 fw-bold mb-3">Don't have an account yet? </h2>
        //                     <Button as={Link} to="/register" variant="secondary"
        //                             className="w-100 py-2 mb-2 btn rounded-3" type="submit">
        //                         Sign up for free
        //                     </Button>
        //                 </form>
        //             </Modal.Body>
        //         </div>
        //     </Modal.Dialog>
        // </Modal>
    )
};
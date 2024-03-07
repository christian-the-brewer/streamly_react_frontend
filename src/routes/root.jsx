import NavBar from "../components/NavBar.jsx";
import {Outlet} from "react-router-dom";
import {Container} from "react-bootstrap";
import {useState} from "react";


export default function Root() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <Container className="vh-100">
            <NavBar
            show={show}
            setShow={setShow}
            handleClose={handleClose}
            handleShow={handleShow}
            />
            <div id="detail">
                <Outlet
                    show={show}
                    setShow={setShow}
                    handleClose={handleClose}
                    handleShow={handleShow}
                />
            </div>
        </Container>
    )
}
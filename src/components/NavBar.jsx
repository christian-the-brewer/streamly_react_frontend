import {Col, Button, Form, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState} from "react";
import LoginModal from "./LoginModal.jsx";

export default function NavBar(props) {


    return (

        <Navbar expand="lg" className="mb-4">
                <NavbarBrand href="#home" as={Link} to="/">
                    Streamly
                </NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" as={Link} to="/">Home</Nav.Link>
                        <Nav.Link href="#movies" as={Link} to="/movies">Movies</Nav.Link>
                        <Nav.Link href="#shows">Shows</Nav.Link>
                        <Nav.Link href="#register" as={Link} to="/register">Sign Up</Nav.Link>
                        <Nav.Link onClick={()=>props.setShow(true)} >Sign In</Nav.Link>
                    </Nav>
                    <Form>
                        <Row>
                            <Col xs="auto">
                                <Form.Control type="text" placeholder="Search" className="mn-sm-2"/>
                            </Col>
                            <Col xs="auto">
                                <Button type="submit">Search</Button>
                            </Col>
                        </Row>
                    </Form>
                </NavbarCollapse>
            <LoginModal
            handleClose={props.handleClose}
            handleShow={props.handleShow}
            show={props.show}
            setShow={props.setShow}
            />
        </Navbar>

    )
};
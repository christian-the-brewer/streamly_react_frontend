import {
    Nav,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarToggle,
    NavDropdown
} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import LoginModal from "./LoginModal.jsx";
import SearchBar from "./SearchBar.jsx";
import useAuth from "../hooks/useAuth.js";

export default function NavBar(props) {
    const [expanded, setExpanded] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const {auth} = useAuth();


    useEffect(() => {
        if (auth.userId) {
            setIsLoggedIn(true)
        }
    }, []);



    return (

        <Navbar collapseOnSelect={true} expanded={expanded} expand="lg" className="mb-4">
                <NavbarBrand onClick={()=>setExpanded(false)} href="#home" as={Link} to="/">
                    Streamly
                </NavbarBrand>
                <NavbarToggle onClick={()=>setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=>setExpanded(false)} href="#home" as={Link} to="/">Home</Nav.Link>
                        <NavDropdown title="Movies" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={()=>setExpanded(false)} href="#movies" as={Link} to="/movies">All</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>setExpanded(false)} href="#movies/netflix" as={Link} to="/movies/netflix">Netflix</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>setExpanded(false)} href="#movies" as={Link} to="/movies/hulu">Hulu</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>setExpanded(false)} href="#movies" as={Link} to="/movies/max">Max</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>setExpanded(false)} href="#movies" as={Link} to="/movies/prime">Prime</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>setExpanded(false)} href="#movies" as={Link} to="/movies/disney">Disney+</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="TV" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={()=>setExpanded(false)} href="#tv" as={Link} to="/tv">All</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>setExpanded(false)} href="#tv/netflix" as={Link} to="/tv/netflix">Netflix</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>setExpanded(false)} href="#movies" as={Link} to="/tv/hulu">Hulu</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>setExpanded(false)} href="#movies" as={Link} to="/tv/max">Max</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>setExpanded(false)} href="#movies" as={Link} to="/tv/prime">Prime</NavDropdown.Item>
                            <NavDropdown.Item onClick={()=>setExpanded(false)} href="#movies" as={Link} to="/tv/disney">Disney+</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={()=>setExpanded(false)} href="#watch_list" as={Link} to="/watch_list">Watch List</Nav.Link>
                        <Nav.Link onClick={()=>setExpanded(false)} href="#register" as={Link} to="/register">Sign Up</Nav.Link>
                        <Nav.Link  onClick={()=>{
                            setExpanded(false)
                            props.setShow(true)}} >Sign In</Nav.Link>
                    </Nav>
                    <SearchBar />
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
import {Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
            <Container>
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
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
};
import {Container, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle} from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar expand="lg" classname="bg-body-tertiary">
            <Container>
                <NavbarBrand href="#home">
                    Streamly
                </NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="#movies">Movies</Nav.Link>
                        <Nav.Link href="#Shows">Shows</Nav.Link>
                        <Nav.Link href="/register">Sign Up</Nav.Link>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    )
};
import {
    Col,
    Button,
    Form,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarToggle,
    Row,
    NavDropdown
} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState} from "react";
import LoginModal from "./LoginModal.jsx";

export default function NavBar(props) {
    const [expanded, setExpanded] = useState(false);

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
                        <Nav.Link onClick={()=>setExpanded(false)} href="#shows">Shows</Nav.Link>
                        <Nav.Link onClick={()=>setExpanded(false)} href="#register" as={Link} to="/register">Sign Up</Nav.Link>
                        <Nav.Link  onClick={()=>{
                            setExpanded(false)
                            props.setShow(true)}} >Sign In</Nav.Link>
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
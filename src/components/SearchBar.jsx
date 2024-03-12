import {Button, Col, Form, Row} from "react-bootstrap";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {formatInputForUrl} from "../utilities/util_functions.js";

export default function SearchBar() {

    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        setSearchTerm(formatInputForUrl(searchTerm))
        navigate(`/search/multi/${searchTerm}`)
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    };

    return (
        <Form onSubmit={handleSearch}>
            <Row>
                <Col xs="auto">
                    <Form.Control onChange={handleChange} value={searchTerm} type="text" placeholder="Search" className="mn-sm-2"/>
                </Col>
                <Col xs="auto">
                    <Button type="submit">Search</Button>
                </Col>
            </Row>
        </Form>
    )
};
import {Card, CardGroup, Col, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function CardIndex(props) {

    return (
        <Row xs={1} md={2} lg={4} className="g-4">
            {props.content.map((content, index) => (
                <Col key={index}>
                    <Link to={`/movies/${content.id}`}>
                    <Card className="bg-dark text-white">
                        <Card.Img src={content.image} alt={content.alt}/>
                    </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    )
};
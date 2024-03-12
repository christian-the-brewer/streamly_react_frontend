import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function TVCard(props) {
    const result = props.result;
    return (
        <Link to={`/tv/${result.id}`}>
            <Col>
                <Card className="bg-dark text-white">
                    <Card.Img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt={result.title}/>
                </Card>
            </Col>
        </Link>
    )
};
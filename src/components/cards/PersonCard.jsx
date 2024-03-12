import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function PersonCard(props) {
    const result = props.result;
    return (
        <Link to={`/person/${result.id}`} key={props.index}>
            <Col>
                <Card className="bg-dark text-white">
                    <Card.Img src={`https://image.tmdb.org/t/p/w500${result.profile_path}`} alt={result.name}/>
                </Card>
            </Col>
        </Link>
    )
};
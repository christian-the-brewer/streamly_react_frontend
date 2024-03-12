import {Link, useParams} from "react-router-dom";
import {Card, Col, Row} from "react-bootstrap";
import {useEffect, useState} from "react";

export default function SearchIndex(props) {

    const [results, setResults] = useState(null);
    const { term } = useParams()

    useEffect(() => {
            props.apiCall(term)
                .then(res => setResults(res.data.results))
                .catch(err => {
                    console.log(err)
                })
    }, [term]);

    if (!results) {
        return <h1>Loading</h1>
    }

    const searchCards = results.map((result, index) => (


        <Link to={`/movie/${result.id}`} key={index}>
            <Col key={index}>
                <Card className="bg-dark text-white">
                    <Card.Img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt={result.title}/>
                </Card>
            </Col>
        </Link>
    ));

    return (
        <Row xs={1} md={2} lg={4} className="g-4">

            {searchCards}
        </Row>
    )
};
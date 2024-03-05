import {Card, CardGroup, Col, Nav, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import { getPopularMovies} from "../api/movies.js";
import {useEffect, useState} from "react";

export default function CardIndex() {

    //state
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        getPopularMovies("us")
            .then(res => setMovies(res.data.movies))
            .catch(err => {
                console.log(err)
            })
    }, []);

    if (!movies) {
        return <h1>Loading</h1>
    }

    const movieCards = movies.map((movie, index) => (
        <Link to={`/movie/${movie.id}`} key={index}>
            <Col key={index}>
                <Card className="bg-dark text-white">
                    <Card.Img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                </Card>
            </Col>
        </Link>
    ));

    return (
        <Row xs={1} md={2} lg={4} className="g-4">
            {/*{props.content.map((content, index) => (*/}
            {/*    <Col key={index}>*/}
            {/*        <Link to={`/movies/${content.id}`}>*/}
            {/*        <Card className="bg-dark text-white">*/}
            {/*            <Card.Img src={content.image} alt={content.alt}/>*/}
            {/*        </Card>*/}
            {/*        </Link>*/}
            {/*    </Col>*/}
            {/*))}*/}
            {movieCards}
        </Row>
    )
};
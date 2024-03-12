import {Link, useParams} from "react-router-dom";
import {Card, Col, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import TVCard from "./cards/TVCard.jsx";
import MovieCard from "./cards/MovieCard.jsx"
import PersonCard from "./cards/PersonCard.jsx";

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

    const searchCards = results.map((result, index) => {
        if (result.media_type === "tv") {
            return <TVCard key={index} result={result}/>
        } else if (result.media_type === "movie") {
            return <MovieCard key={index} result={result} />
        }else if (result.media_type === "person") {
            return <PersonCard key={index} result={result} />
        }
        }

    );

    return (
        <Row xs={1} md={2} lg={4} className="g-4">

            {searchCards}
        </Row>
    )
};
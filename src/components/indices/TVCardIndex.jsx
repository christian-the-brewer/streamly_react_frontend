import {Card, CardGroup, Col, Nav, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function TVCardIndex(props) {

    //state
    const [shows, setShows] = useState(null);
    const {platform} = useParams()


    useEffect(() => {
        if (platform !== undefined) {
            props.apiCall("US", platform)
                .then(res => setShows(res.data.shows))
                .catch(err => {
                    console.log(err)
                })
        } else {
            props.apiCall("US")
                .then(res => setShows(res.data.shows))
                .catch(err => {
                    console.log("error in tvcardindex calling: ", props.apiCall)
                    console.log(err)
                })
        }
    }, [platform]);

    if (!shows) {
        return <h1>Loading</h1>
    }

    const tvCards = shows.map((show, index) => (
        <Link to={`/tv/show/${show.id}`} key={index}>
            <Col key={index}>
                <Card className="bg-dark text-white">
                    <Card.Img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} alt={show.title}/>
                </Card>
            </Col>
        </Link>
    ));

    return (
        <Row xs={1} md={2} lg={4} className="g-4">
            {tvCards}
        </Row>
    )
};
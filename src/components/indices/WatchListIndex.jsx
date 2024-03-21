import {useParams} from "react-router-dom";
import {Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import TVCard from "../cards/TVCard.jsx";
import MovieCard from "../cards/MovieCard.jsx"
import PersonCard from "../cards/PersonCard.jsx";
import useAuth from "../../hooks/useAuth.js";
import {getWatchList} from "../../api/users.js";

export default function WatchListIndex(props) {

    const [content, setContent] = useState(null);
    const [contentType, setContentType] = useState("movie");
    const {auth} = useAuth();

    useEffect(() => {
        getWatchList(contentType)
            .then(res => setContent(res.data.content))
            .catch(err => {
                console.error(err)
            })
    }, [contentType]);

    if (!content) {
        return (
            <>
                <h1>Your WatchList</h1>
                <h2>Loading</h2>
            </>
        )
    }

    const contentCards = content.map((item) => {
        if (contentType === "movie") {
            return <MovieCard key={item.id} result={item}/>
        } else {
            return <TVCard key={item.id} result={item}/>
        }
    });


    return (
        <>
            <h1>WatchList</h1>
            <Row xs={1} md={2} lg={4} className="g-4">
                {contentCards}
            </Row>
        </>

    )
        ;
};
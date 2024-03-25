import {useParams} from "react-router-dom";
import {Button, ButtonGroup, Row, ToggleButton} from "react-bootstrap";
import {useEffect, useState} from "react";
import TVCard from "../cards/TVCard.jsx";
import MovieCard from "../cards/MovieCard.jsx"
import PersonCard from "../cards/PersonCard.jsx";
import useAuth from "../../hooks/useAuth.js";
import {getWatchList} from "../../api/watchList.js";

export default function WatchListIndex(props) {

    const [movies, setMovies] = useState([]);
    const [shows, setShows] = useState([])
    const [contentType, setContentType] = useState("movie");
    const [moviesToggled, setMoviesToggled] = useState(true)
    const [radioValue, setRadioValue] = useState("1");
    const {auth} = useAuth();

    useEffect(() => {
        getWatchList(auth.userId)
            .then(res => {
                setMovies(res.data.content.movies)
                setShows(res.data.content.shows)
                console.log(shows)
            })
            .catch(err => {
                console.error(err)
            })
    }, []);

    if (!movies) {
        return (
            <>
                <h1>Your WatchList</h1>
                <h2>Loading</h2>
            </>
        )
    }

    let movieCards;

    if (movies[0] !== "Add some movies to your Watch List!") {
        movieCards = movies.map((movie) => {
            console.log("movieCards movies", movies)
            movie.poster_path = movie.poster;
            return (
                <MovieCard key={movie.id} result={movie}/>
            )
        })
    } else {
        movieCards = movies[0];
    }

    let showCards;

    if (shows[0] !== "Add some shows to your Watch List!") {
        showCards = shows.map((show) => {
            return (
                <TVCard key={show.id} result={show}/>
            )
        })
    } else {
        showCards = shows[0];
    }


    return (
        <>
            <h1>WatchList</h1>
            <ButtonGroup className="mb-4 mt-2">
                <ToggleButton
                    onChange={(event) => setRadioValue(event.currentTarget.value)}
                    variant="outline-info"
                    id="movieToggle" checked={radioValue === "1"} value="1" type="radio" name="radio">
                    Movies
                </ToggleButton>
                <ToggleButton
                    onChange={(event) => setRadioValue(event.currentTarget.value)}
                    variant="outline-info"
                    id="showsToggle" checked={radioValue === "2"} value="2" type="radio" name="radio">
                    Shows
                </ToggleButton>
            </ButtonGroup>
            <div style={{display: radioValue === "1" ? "inline" : "none"}}>
            <Row xs={1} md={2} lg={4} className="g-4">
                {movieCards}
            </Row>
            </div>
            <div style={{display: radioValue === "2" ? "inline" : "none"}}>
            <Row xs={1} md={2} lg={4} className="g-4">
                {showCards}
            </Row>
            </div>
        </>

    )
        ;

};
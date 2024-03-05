import {useParams} from "react-router-dom";
import { getMovieById } from "../api/movies.js";
import {useEffect, useState} from "react";

export default function ShowMovie() {
    const [movie, setMovie] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        console.log("show movie id: ", id)
        getMovieById(id)
            .then(res => {
                setMovie(res.data.movie)
            }).catch(err => {
            console.log(err)
        })
    }, []);

    //get year from movie
    const year = () => {
        const split_date = movie.release_date.split("-");
        return split_date[0];
    }

    //function to show the average rating
    const rating = () => {
        const roundedRating = Math.round(movie.vote_average * 10) / 10
        return `${roundedRating}/10`
    }

    const genresList = () => {
        const list = movie && movie.genres.map((genre, index) => (
            <li key={index}>
                {genre.name}
            </li>
        ))
        return list;
    }

    if (!movie) {
        return <h1>Loading</h1>
    }

    return (
        <div className="container">
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
            </div>
            <div>
                <h2>{movie.title}</h2>
                <h5> {year()}</h5>
                <h5>{rating()}</h5>
                <ul> {genresList()} </ul>
                <h6>{movie.overview}</h6>
                <h5>{movie.runtime} minutes</h5>
                {/*<h3 className="whiteColorOnly">Available for streaming on: {whereStreaming('name')}</h3>*/}
            </div>
        </div>
    );
};
import {useParams} from "react-router-dom";
import movieData from "../data.js";

export default function ShowMovie() {
    const params = useParams()
    const movie = movieData[params.movieId - 1]
    console.log(params.movieId)
    return (
        <>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <p>{movie.rating}</p>
        </>
    )
};
import {useParams} from "react-router-dom";
import { getMovieById } from "../../api/movies.js";
import {useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth.js";
import {Button} from "react-bootstrap";
import axios from "axios";
import apiUrl from "../../apiConfig.js";

export default function ShowMovie() {
    const [movie, setMovie] = useState(null);
    const [watchList, setWatchList] = useState(null);
    const [inWatchList, setInWatchList] = useState(false);
    const {id} = useParams();
    const {auth} = useAuth();

    useEffect(() => {
        getMovieById(id)
            .then(res => {
                setMovie(res.data.movie)
            }).catch(err => {
            console.log(err)
        })
    }, []);

    useEffect(() => {

    });

    const checkWatchList = () => {
        return 0
    };

    const handleClick = async (event) => {
        event.preventDefault();
        //if movie is not currently in watch_list and should be added
        if (!inWatchList) {
            try {
                const response = await axios.put(`${apiUrl}/watch_list`,
                    JSON.stringify({user_id: auth.userId, movie_id: id}),
                    {
                        headers: {"Content-Type": "application/json"},
                        withCredentials: true,
                    });
            } catch (err){
                console.log(err);
            }
        } else {
            //movie is already in watchlist so should be removed

        }
    };

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
                <Button onClick={handleClick} variant="secondary" className="py-2 mb-2 btn rounded-3">{}</Button>
            </div>
        </div>
    );
};
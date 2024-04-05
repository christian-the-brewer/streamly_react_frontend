import {useParams} from "react-router-dom";
import {getMovieById} from "../../api/movies.js";
import {useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth.js";
import {Button} from "react-bootstrap";
import axios from "axios";
import apiUrl from "../../apiConfig.js";
import {addContentToWatchList, getWatchList} from "../../api/watchList.js";

export default function ShowMovie() {
    const [movie, setMovie] = useState(null);
    const [watchList, setWatchList] = useState([]);
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

    //get the movies in user's watchlist. depend on the in watchlist state
    useEffect(() => {
        if (auth.userId) {
            getWatchList(auth.userId, auth.accessToken)
                .then(res => {
                    const splitMovies = res.data.content.movies.map(movie => {
                        const splitArray = movie.split(" ");
                        movie = splitArray[0]
                        return movie;
                    })
                    setWatchList(splitMovies)
                    checkWatchList();
                }).catch(err => {
                console.error(err);
            })
        }
    }, [inWatchList]);

    //check to see if movie is in watchlist only if we have a movie AND watchlist
    useEffect(() => {
        if (movie && watchList) {
            setInWatchList(watchList.some((element) => {
                return element == movie.id
            }))
        }
    }, [movie, watchList, inWatchList]);

    const checkWatchList = () => {
        setInWatchList(watchList.some((element) => {
            return element == movie.id
        }))
    };

    const handleClick = async (event) => {
        event.preventDefault();
        //if movie is not currently in watch_list and should be added
        if (!inWatchList) {
            // try {
            //     const response = await axios.put(`${apiUrl}/watch_list`,
            //         JSON.stringify({
            //             userId: auth.userId,
            //             contentId: movie.id,
            //             contentPoster: movie.poster_path,
            //             contentType: "movie"
            //         }),
            //         {
            //             headers: {
            //                 "Content-Type": "application/json",
            //                 Authorization: `Bearer ${auth.accessToken}`,
            //             },
            //             withCredentials: true,
            //         });
            // } catch (err) {
            //     console.log(err);
            // }
            addContentToWatchList(auth.userId, movie.id, movie.poster_path, "movie", auth.accessToken)
                .then(setInWatchList(true))
                .catch(err => {
                    console.log(err)
                });
           // }
            // setInWatchList(true)
        } else {
            //movie is already in watchlist so should be removed
            try {
                const response = await axios.patch(`${apiUrl}/watch_list`,
                    JSON.stringify({
                        userId: auth.userId,
                        contentId: movie.id,
                        contentPoster: movie.poster_path,
                        contentType: "movie"
                    }),
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${auth.accessToken}`,
                        },
                        withCredentials: true,
                    });
            } catch (err) {
                console.log(err);
            }
            setInWatchList(false)
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
                <Button onClick={handleClick} variant="secondary"
                        style={{display: auth.userId ? "inline-block" : "none"}}
                        className="py-2 mb-2 btn rounded-3">{inWatchList ? "Remove" : "Add"}</Button>
            </div>
        </div>
    );
};


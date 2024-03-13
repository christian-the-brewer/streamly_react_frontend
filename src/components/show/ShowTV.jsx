import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getTVById} from "../../api/tv.js";

export default function ShowTV() {

    const [show, setShow] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        getTVById(id)
            .then(res => {
                setShow(res.data.show)
            }).catch(err => {
            console.log(err)
        })
    }, []);


    //get year from movie
    const year = (date) => {
        const split_date = date.split("-");
        return split_date[0];
    }

    const inProduction = () => {
        return show.in_production ? "Present" : year(show.last_air_date);
    };

    //function to show the average rating
    const rating = () => {
        const roundedRating = Math.round(show.vote_average * 10) / 10
        return `${roundedRating}/10`
    }

    const genresList = () => {
        const list = show && show.genres.map((genre, index) => (
            <li key={index}>
                {genre.name}
            </li>
        ))
        return list;
    }

    if (!show) {
        return <h1>Loading</h1>
    }

    return (
        <div className="container">
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}/>
            </div>
            <div>
                <h2>{show.name}</h2>
                <h5> {year(show.first_air_date)} - {inProduction()}</h5>
                <h5>{rating()}</h5>
                <ul> {genresList()} </ul>
                <h6>{show.overview}</h6>
                <h5>{show.seasons.length} Seasons</h5>
            </div>
        </div>
    )
};
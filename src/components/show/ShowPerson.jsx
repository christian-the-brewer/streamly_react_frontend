import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getPersonById} from "../../api/people.js";

export default function ShowPerson() {

    const [person, setPerson] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        getPersonById(id)
            .then(res => {
                setPerson(res.data.person)
            }) .catch(err => {
            console.log(err)
        });
    }, []);

    if (!person) {
        return <h1>Loading</h1>
    }

    return (
        <div className="container">
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}/>
            </div>
            <div>
                <h2>{person.name}</h2>
                <p>{person.biography}</p>
            </div>
        </div>
    )
};
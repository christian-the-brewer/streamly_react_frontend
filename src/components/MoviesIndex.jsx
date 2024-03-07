import CardIndex from "./CardIndex.jsx";
import movieData from "../data.js";

export default function MoviesIndex() {
    return (
        <>
        <h1>Today's Hot Movies</h1>
            <CardIndex
                content={movieData} />
        </>
    )
};
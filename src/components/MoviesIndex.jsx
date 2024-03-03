import CardIndex from "./CardIndex.jsx";
import movieData from "../data.js";

export default function MoviesIndex() {
    return (
        <>
        <h1>Movies Index</h1>
            <CardIndex
                content={movieData} />
        </>
    )
};
import CardIndex from "./CardIndex.jsx";
import {useParams} from "react-router-dom";


export default function MoviesIndex(props) {
    const {platform} = useParams()

    //conditionally render the proper title.
    const title = platform? `${props.title} ${platform}` : props.title

    return (
        <>
        <h1 className="text-capitalize">{title}</h1>
            <CardIndex
                apiCall={props.apiCall}
            />
        </>
    )
};
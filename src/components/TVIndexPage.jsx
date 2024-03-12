import {useParams} from "react-router-dom";
import TVCardIndex from "./indices/TVCardIndex.jsx";


export default function TVIndexPage(props) {
    const {platform} = useParams()

    //conditionally render the proper title.
    const title = platform? `${props.title} ${platform}` : props.title

    return (
        <>
            <h1 className="text-capitalize">{title}</h1>
            <TVCardIndex
                apiCall={props.apiCall}
            />
        </>
    )
};
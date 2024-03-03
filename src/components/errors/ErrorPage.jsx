import {Link, useRouteError} from "react-router-dom";
import {Button} from "react-bootstrap";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1> Uh oh!</h1>
            <p>Apologies, an error occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/">Go Back</Link>
        </div>
    )
};
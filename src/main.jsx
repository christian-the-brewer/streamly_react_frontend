import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/root.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from "./components/errors/ErrorPage.jsx";
import Register from "./routes/auth/register.jsx";
import MoviesIndexPage from "./components/MoviesIndexPage.jsx";
import ShowMovie from "./components/show/ShowMovie.jsx";
import Login from "./routes/auth/login.jsx";
import {getPopularMovies, getPopularMoviesByPlatform} from "./api/movies.js";
import SearchResultsPage from "./components/SearchResultsPage.jsx";
import TVIndexPage from "./components/TVIndexPage.jsx";
import {getPopularTV, getPopularTVByPlatform} from "./api/tv.js";
import ShowTV from "./components/show/ShowTV.jsx";
import ShowPerson from "./components/show/ShowPerson.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <MoviesIndexPage
                    title={"Today's Hot Movies"}
                    apiCall={getPopularMovies}
                />,
            },
            {
                path: "/login",
                element: <Login/>,
            },
            {
                path: "/logout",
                element: <MoviesIndexPage/>,
            },
            {
                path: "/register",
                element: <Register/>,
            },
            {
                path: "/movies",
                element: <MoviesIndexPage
                    title={"Today's Hot Movies"}
                    apiCall={getPopularMovies}
                />,
            },
            {
                path: "/movies/:platform",
                element: <MoviesIndexPage
                    title={"Popular Movies on"}
                    apiCall={getPopularMoviesByPlatform}
                />,
            },
            {
                path: "/movie/:id",
                element: <ShowMovie/>
            },
            {
                path: "/tv",
                element: <TVIndexPage
                    title={"Today's Hot Shows"}
                    apiCall={getPopularTV}
                />,
            },
            {
                path: "/tv/:platform",
                element: <TVIndexPage
                    title={"Popular Shows on"}
                    apiCall={getPopularTVByPlatform}
                />,
            },
            {
                path: "/tv/show/:id",
                element: <ShowTV/>
            },
            {
                path: "/person/:id",
                element: <ShowPerson/>
            },
            {
                path: "/search/multi/:term",
                element: <SearchResultsPage/>
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)

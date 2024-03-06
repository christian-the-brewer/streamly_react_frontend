import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/root.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from "./components/errors/ErrorPage.jsx";
import Register from "./routes/auth/register.jsx";
import MoviesIndex from "./components/MoviesIndex.jsx";
import ShowMovie from "./components/ShowMovie.jsx";
import Login from "./routes/auth/login.jsx";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <MoviesIndex />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/logout",
                element: <MoviesIndex />,
            },
            {
                path: "/register",
                element: <Register />,
            },

            {
                path: "/movies",
                element: <MoviesIndex />,
            },
            {
                path: "/movie/:id",
                element: <ShowMovie />
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)

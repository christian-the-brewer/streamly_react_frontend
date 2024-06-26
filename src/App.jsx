import {Routes, Route, Outlet} from "react-router-dom";
import './App.css'
import Home from "./components/Home.jsx";
import ErrorPage from "./components/errors/ErrorPage.jsx";
import NavBar from "./components/NavBar.jsx";
import {useState} from "react";
import {getPopularMovies, getPopularMoviesByPlatform} from "./api/movies.js";
import MoviesIndexPage from "./components/MoviesIndexPage.jsx";
import ShowMovie from "./components/show/ShowMovie.jsx";
import ShowTV from "./components/show/ShowTV.jsx";
import ShowPerson from "./components/show/ShowPerson.jsx";
import SearchResultsPage from "./components/SearchResultsPage.jsx";
import TVIndexPage from "./components/TVIndexPage.jsx";
import {getPopularTV, getPopularTVByPlatform} from "./api/tv.js";
import Login from "./routes/auth/login.jsx";
import Register from "./routes/auth/register.jsx";
import Layout from "./components/Layout.jsx";
import RequireAuth from "./components/RequireAuth.jsx";
import WatchListIndex from "./components/indices/WatchListIndex.jsx";
import AdminPage from "./components/AdminPage.jsx";

function App() {

    const [show, setShow] = useState(false);
    const handleClose = (func) => {
        func()
        setShow(false)
    };
    const handleShow = () => setShow(true);

    return (
        <>
            <NavBar
                show={show}
                setShow={setShow}
                handleClose={handleClose}
                handleShow={handleShow}
            />
            <Routes>
                <Route path="/" element={<Layout/>}>
                    {/*  Public Routes  */}
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register
                        handleShow={handleShow}
                        handleClose={handleClose}/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/movies" element={<MoviesIndexPage
                        title={"Today's Hot Movies"}
                        apiCall={getPopularMovies}/>}/>
                    <Route path="/tv" element={<TVIndexPage
                        title={"Today's Hot Shows"}
                        apiCall={getPopularTV}/>}/>
                    <Route path="/movies/:platform" element={<MoviesIndexPage
                        title={"Popular Movies on"}
                        apiCall={getPopularMoviesByPlatform}/>}/>
                    <Route path="/tv/:platform" element={<TVIndexPage
                        title={"Popular Shows on"}
                        apiCall={getPopularTVByPlatform}/>}/>
                    <Route path="/movie/:id" element={<ShowMovie/>}/>
                    <Route path="/tv/show/:id" element={<ShowTV/>}/>
                    <Route path="/person/:id" element={<ShowPerson/>}/>
                    <Route path="/search/multi/:term" element={<SearchResultsPage/>}/>



                    {/*  Protected Routes  */}
                    <Route element={<RequireAuth allowedRoles={[5]} handleShow={handleShow} handleClose={handleClose}/>}>
                        <Route path="/watch_list" element={<WatchListIndex />}/>
                    </Route>
                    <Route element={<RequireAuth allowedRoles={[1]} handleShow={handleShow} handleClose={handleClose}/>}>
                        <Route path="/admin" element={<AdminPage />}/>
                    </Route>

                    {/*  Catch All  */}
                    <Route path="*" element={<ErrorPage/>}/>
                </Route>

            </Routes>
        </>
    );
}

export default App

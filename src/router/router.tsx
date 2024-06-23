import {createBrowserRouter, RouteObject} from "react-router-dom";
import HomePage from "../pages/HomePage";
import MainComp from "../components/mainComp/MainComp";
import MoviesPage from "../pages/MoviesPage";
import GenresPage from "../pages/GenresPage";
import MoviesByGenreComp from "../components/genresComp/MoviesByGenreComp";
import ErrorPage from "../pages/ErrorPage";
import SearchPage from "../pages/SearchPage";

const routes: RouteObject[] = [{
    errorElement: <ErrorPage/>,
    path: '/', element: <MainComp/>, children: [
        {path: '', element: <HomePage/>, index: true},
        {path: 'homePage', element: <HomePage/>},
        {path: 'allMovies', element: <MoviesPage/>},
        {
            path: 'genres', element: <GenresPage/>,
            children: [{path: ':genreId', element: <MoviesByGenreComp/>, index: true,}]
        },
        {path: 'search', element: <SearchPage/>}
        // {path:'popular',element:<PopularMoviePage/>}
    ]
}]
// {path:'popular',element:<PopularMoviePage/>}


export const router = createBrowserRouter(routes)
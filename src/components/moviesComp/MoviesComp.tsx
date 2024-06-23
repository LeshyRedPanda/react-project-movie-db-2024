import React from 'react';
import {useAppSelector} from "../../redux_slices/store";
import MovieComp from "./MovieComp";

const MoviesComp = () => {
    let {movies, page, total_pages, error, loading} = useAppSelector(state => state.movieSlice);
    // console.log(movies)
    // console.log(page)
    // console.log(total_pages)


    // if (loading) return <div>Loading...</div>; // to do if if
    // if (error) return <div>Error: {error}</div>; // to do if if
    return (
        <div className={'allMoviesCompWrap'}>
            {
                movies.map(movie => <MovieComp key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export default MoviesComp;
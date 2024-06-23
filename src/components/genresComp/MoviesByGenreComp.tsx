import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux_slices/store";
import {movieActions} from "../../redux_slices/movieSlice";
import MoviesByGenreListComp from "./MoviesByGenreListComp";
import {PaginationComp} from "../pagination/PaginationComp";
import {IMovieModel} from "../../models/IMovieModel";


const MoviesByGenreComp = () => {

    const {genreId} = useParams<{ genreId: string }>();
    // console.log('genre id : ',genreId)
    const dispatch = useAppDispatch();
    const {movies, loading, error} = useAppSelector(state => state.movieSlice)

    // pagination btn
    let {total_pages} = useAppSelector(state => state.movieSlice);

    const [currentPage, setCurrentPage] = useState<number>(1);
    // console.log('current page:' ,currentPage)


    useEffect(() => {
        if (genreId) {
            dispatch(movieActions.loadMoviesByGenre({genreId: Number(genreId), page: currentPage}));
        }
    }, [genreId, currentPage,]);

    // pagination btn

    useEffect(() => {
        if (genreId) {
            setCurrentPage(1)
        }
    }, [genreId]);
    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage)
    }


    return (
        <div className={'moviesByGenreCompWrap'}>
            {/*{loading && <p> Loading...</p>}*/}
            {/*{error && <p> Error: {error}</p>}*/}
            <div className={'moviesByGenrePageWrap'}>
                <MoviesByGenreListComp movies={movies}/>
            </div>
            <div className={'genresPagePaginationBtn'}>
                <PaginationComp currentPage={currentPage} totalPages={total_pages} pageChange={handlePageChange}/>
            </div>

        </div>
    );
};

export default MoviesByGenreComp;

import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../redux_slices/store";
import {movieActions} from "../redux_slices/movieSlice";
import {PaginationComp} from "../components/pagination/PaginationComp";
import MoviesComp from "../components/moviesComp/MoviesComp";

const MoviesPage = () => {

    // pagination btn
    let {total_pages} = useAppSelector(state => state.movieSlice);

    const [currentPage, setCurrentPage] = useState<number>(1);
    // console.log(currentPage)
    let dispatch = useAppDispatch();

    useEffect(() => {
        if (currentPage) {
            dispatch(movieActions.loadMovies(currentPage))
        }
    }, [currentPage]);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage)
    }


    return (
        <div className={"moviesPageWrap"}>
            <PaginationComp currentPage={currentPage} totalPages={total_pages} pageChange={handlePageChange}/>
            <MoviesComp/>
            <PaginationComp currentPage={currentPage} totalPages={total_pages} pageChange={handlePageChange}/>
        </div>
    );
};

export default MoviesPage;
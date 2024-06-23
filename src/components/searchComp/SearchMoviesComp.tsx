import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux_slices/store";
import {searchActions} from "../../redux_slices/searchMovieSlice";
import {PaginationComp} from "../pagination/PaginationComp";
import SearchResultComp from "./SearchResultComp";

const SearchMoviesComp = () => {

    const dispatch = useAppDispatch();

    const {movies, page, total_pages, loading, error} = useAppSelector(state => state.searchMovieSlice);
    // console.log('MOVIES data SearchMoviesComp :',movies)
    const [query, setQuery] = useState('');

    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        if (query !== '') {
            dispatch(searchActions.searchMovies({query, page: 1}))
        }
    }, [query]);


    useEffect(() => {
        if (query !== '') {
            handleSearch();
        }
    }, [query]);

    useEffect(() => {
        if (currentPage !== 1) {
            dispatch(searchActions.searchMovies({query: 'if', page: currentPage}))
        }
    }, [currentPage]);

    const handleSearch = () => {
        setCurrentPage(1)
        dispatch(searchActions.searchMovies({query, page: 1}))
        // console.log('search comp data: ',query)
    }

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage)
    }


    return (
        <div>
            <div className={'searchBar'}>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}
                       placeholder={'Search a movie '}/>
            </div>
            <div className={'searchMovieWrap'}>

                <PaginationComp currentPage={currentPage} totalPages={total_pages} pageChange={handlePageChange}/>
                {
                    <div className={'allMoviesCompWrap'}>
                        {
                            movies.map(movie => <SearchResultComp key={movie.id} movie={movie}/>)
                        }
                    </div>
                }
                <PaginationComp currentPage={currentPage} totalPages={total_pages} pageChange={handlePageChange}/>
            </div>
        </div>
    );
};

export default SearchMoviesComp;
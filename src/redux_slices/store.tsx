import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {movieSlice} from "./movieSlice";
import {genreSlice} from "./genreSlice";
import {searchMovieSlice} from "./searchMovieSlice";

export const store = configureStore({
    reducer: {
        movieSlice: movieSlice.reducer,
        genreSlice:genreSlice.reducer,
        searchMovieSlice: searchMovieSlice.reducer
    }
})




export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();



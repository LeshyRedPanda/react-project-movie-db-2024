import {IMovieModel} from "../models/IMovieModel";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {searchMovieService} from "../services/searchMovieService";


type searchMovieSliceType = {
    movies: IMovieModel[],
    page: number,
    total_pages: number,
    total_results: number,
    loading: boolean,
    error: string | null
}

const movieInitialState: searchMovieSliceType = {
    movies: [],
    page: 1,
    total_pages: 1,
    total_results: 0,
    loading: false,
    error: null
}

export const searchMovies = createAsyncThunk(
    'searchMovieSlice/searchMovie',
    async ({query, page}: { query: string, page: number }, thunkAPI) => {
        try {
            const response = await searchMovieService.getMovies(query, page);
            // console.log('response searchMovies:',response)
            return thunkAPI.fulfillWithValue(response)
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)


export const searchMovieSlice = createSlice({
    name: 'searchMovie',
    initialState: movieInitialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(searchMovies.fulfilled, (state, action) => {
            state.movies = action.payload.results;
            state.page = action.payload.page;
            state.total_pages = action.payload.total_pages;
            state.loading = false;
            state.error = null;
            // console.log('searchMovieSlice data :',action.payload.results)
        })
        .addCase(searchMovies.rejected, (state, action) => {
            state.error = action.payload as string;
            state.loading = true;
        })
        .addCase(searchMovies.pending, (state) => {
            state.loading = true;
            state.error = null;
        })


})

export const searchActions = {
    ...searchMovieSlice.actions,
    searchMovies

}
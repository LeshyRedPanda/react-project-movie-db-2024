import {IMovieModel} from "../models/IMovieModel";
import {IGenreModel} from "../models/IGenreModel";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../services/movieService";
import {AxiosError} from "axios";

type MovieSliceType = {
    movies: IMovieModel[],
    movieDetails: IMovieModel | null,
    genres: IGenreModel[],
    page: number | null,
    total_pages: number,
    total_results: number,
    loading: boolean,
    error: string | null
}

const movieInitialState: MovieSliceType = {
    movies: [],
    movieDetails: null,
    genres: [],
    page: 1,
    total_pages: 0,
    total_results: 0,
    loading: false,
    error: null
}

const loadMovies = createAsyncThunk(
    'movieSlice/loadMovies',
    async (page: number, thunkAPI) => {
        try {
            const moviesResponse = await movieService.getAllM(page);
            return thunkAPI.fulfillWithValue(moviesResponse);
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message);
        }
    })
// (page:number,genreId:number,thunkAPi)
const loadMoviesByGenre = createAsyncThunk(
    'movieSlice/loadMoviesByGenreId',
    async ({genreId, page}: { genreId: number, page: number }, thunkAPI) => {
        try {
            const moviesByGenreResponse = await movieService.getByGenre(genreId, page);
            return thunkAPI.fulfillWithValue(moviesByGenreResponse)
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

const loadMovieById = createAsyncThunk(
    'movieSlice/loadMovieById',
    async (id: number, thunkAPI) => {
        try {
            const movieByIdResponse = await movieService.getMById(id);
            return thunkAPI.fulfillWithValue(movieByIdResponse)

        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message);
        }
    },
)


export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState: movieInitialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(
            loadMovies.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.page = action.payload.page;
                state.total_pages = action.payload.total_pages;
                state.total_results = action.payload.total_results;
                state.loading = true;
                // console.log('movies loaded data :', action.payload)
            })

        .addCase(loadMovies.rejected, (state, action) => {
            state.error = action.payload as string;
            state.loading = true;
        })
        .addCase(loadMovies.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loadMoviesByGenre.fulfilled, (state, action) => {
            state.movies = action.payload.results;
            state.page = action.payload.page;
            state.total_pages = action.payload.total_pages;
            state.total_results = action.payload.total_results
            state.loading = false;
            // movies by genre id data
            // console.log('movies by genre id :', action.payload)
        })
        .addCase(loadMoviesByGenre.rejected, (state, action) => {
            state.error = action.payload as string;
            state.loading = true;
        })
        .addCase(loadMoviesByGenre.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loadMovieById.fulfilled, (state, action) => {
            state.movieDetails = action.payload;
        })
        .addCase(loadMovieById.rejected, (state, action) => {
            state.error = action.payload as string;
            state.loading = true;
        })
        .addCase(loadMovieById.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
})


export const movieActions = {
    ...movieSlice.actions,
    loadMovies,
    loadMoviesByGenre,
    loadMovieById

}

import {IGenreModel} from "../models/IGenreModel";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../services/genreService";
import {AxiosError} from "axios";

interface genreSliceType {
    genres: IGenreModel[],
    loading: boolean,
    error: string | null
}

const genreInitialState: genreSliceType = {
    genres: [],
    loading: false,
    error: null
}

const loadGenres = createAsyncThunk(
    'moviesSlice/loadGenres',
    async (_, thunkAPI) => {
        try {
            const genresResponse = await genreService.getAllG();
            // const genres:IGenreModel[]=genresResponse.genres.map((res:IGenresResponse) => res.genres).flat()
            return thunkAPI.fulfillWithValue(genresResponse)
        } catch (e) {
            const error = e as AxiosError;
            return thunkAPI.rejectWithValue(error.message);
        }
    })

export const genreSlice = createSlice({
    name: 'genreSlice',
    initialState: genreInitialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(loadGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
            // console.log('genres loaded data: ', action.payload)
        })
        .addCase(loadGenres.rejected, (state, action) => {
            state.error = action.payload as string;
            state.loading = true;
        })

})

export const genreActions = {
    ...genreSlice.actions,
    loadGenres
}


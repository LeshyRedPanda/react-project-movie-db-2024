import {IGenreModel} from "./IGenreModel";

export interface IMovieModel {
    id: number,
    genre_ids: IGenreModel[],
    title: string,
    poster_path: string,
    name: string,
    popularity: number,
    vote_average: number,
    original_language: string,
    release_date: string,
    adult: boolean,
    overview: string,
}

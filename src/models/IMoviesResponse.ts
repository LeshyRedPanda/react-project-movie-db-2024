import {IMovieModel} from "./IMovieModel";

export interface IMoviesResponse {
    page: number,
    results: IMovieModel[],
    total_pages: number,
    total_results: number,

}
import {IMovieModel} from "./IMovieModel";

export interface ISearchMovieModel {
    page: number,
    results: IMovieModel[],
    total_pages: number,
    total_results: number,
}
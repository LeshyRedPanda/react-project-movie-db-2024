export interface IMovieModel {
    id: number,
    genre_ids: number[],
    title: string,
    original_title: string,
    poster_path: string,
    name: string,
    popularity: number,
    vote_average: number,
    vote_count: number,
    original_language: string,
    release_date: string,
    adult: boolean,
    overview: string,
    backdrop_path: string,
    video: boolean,
}

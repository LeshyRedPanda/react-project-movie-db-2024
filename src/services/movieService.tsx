import {IMovieModel} from "../models/IMovieModel";
import {axiosInstance} from "./apiService";
import {urls} from "../constantst/urls";
import {IMoviesResponse} from "../models/IMoviesResponse";


export const movieService = {
    getAllM: async (page: number = 1): Promise<IMoviesResponse> => {
        const response = await axiosInstance.get<IMoviesResponse>(urls.movies.base, {params: {page}});
        return response.data;
    },
    getMById: async (id: number): Promise<IMovieModel> => {
        const response = await axiosInstance.get<IMovieModel>(urls.movieInfo.movieById(id))
        return response.data;
    },
    getByGenre: async (genreId: number, page: number = 1): Promise<IMoviesResponse> => {
        const response = await axiosInstance.get<IMoviesResponse>(urls.movies.moviesByGenre(genreId), {params: {page}});
        return response.data;
    },


}

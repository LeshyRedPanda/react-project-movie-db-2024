import {axiosInstance} from "./apiService";
import {urls} from "../constantst/urls";
import {IGenreModel} from "../models/IGenreModel";


export const genreService = {
    getAllG: async (): Promise<IGenreModel[]> => {
        const response = await axiosInstance.get<{ genres: IGenreModel[] }>(urls.genres.base);
        return response.data.genres;

    },

}

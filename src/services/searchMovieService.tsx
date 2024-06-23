import {IMoviesResponse} from "../models/IMoviesResponse";
import {axiosInstance} from "./apiService";
import {urls} from "../constantst/urls";

export const searchMovieService = {
    getMovies: async (query: string, page: number = 1): Promise<IMoviesResponse> => {
        const response = await axiosInstance.get<IMoviesResponse>(urls.search.base, {
            params: {
                query,
                page,
                // api_key: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzc2MGRkYWUwMzQ0NmE0MDY1MDRjM2I0ZDM4OGViNyIsInN1YiI6IjY2NmVmOWMzMmQwNDc1OTRlMzZiYzU1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P-TIf_1Cnut6IJv0xDqQY-TCi_9-cNAuIq4AQ_MIN4A'
            }
        });
        // console.log('Response data:',response.data)
        return response.data;
    }
}


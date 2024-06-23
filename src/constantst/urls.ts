const baseUrl = 'https://api.themoviedb.org/3'

export const defaultImageUrl = 'https://static5.depositphotos.com/1004590/397/i/450/depositphotos_3974958-stock-photo-film-reel.jpg'

const urls = {
    movies: {
        base: `/discover/movie`,
        moviesByGenre: (genreId: number): string => `discover/movie?with_genres=${genreId}`
    },
    movieInfo: {
        movieById: (id: number): string => `/movie/${id}`
    },
    genres: {
        base: '/genre/movie/list',

    },
    popularMovies: {
        base: '/movie/popular'
    },
    search: {
        base: '/search/movie'
    }
}


export {
    baseUrl,
    urls,

}
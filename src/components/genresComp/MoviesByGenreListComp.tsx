import React, {FC, useState} from 'react';
import {IMovieModel} from "../../models/IMovieModel";
import {defaultImageUrl} from "../../constantst/urls";
import StarRatingComp from "../star-rating/StarRetingComp";

interface IProps {
    movies: IMovieModel[],
}

const MoviesByGenreListComp: FC<IProps> = ({movies}) => {

    //show movie info div
    const [showMovieDetails, setShowMovieDetails] = useState<IMovieModel | null>(null);

    const toggleDetails = (movie: IMovieModel) => {
        setShowMovieDetails(movie)
    }

    const handleClose = () => {
        setShowMovieDetails(null)
    }


    //background card image
    const imageUrl = showMovieDetails?.backdrop_path ? `https://image.tmdb.org/t/p/w500${showMovieDetails.backdrop_path}` : defaultImageUrl;

    return (
        <div className={'moviesByGenreListWrap'}>

            {
                movies.map(movie => (
                    <div
                        className={'movieCard'}
                        key={movie.id}
                        onClick={() => toggleDetails(movie)}
                        style={{
                            backgroundImage: `url(${movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : defaultImageUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        <h3>More info here: {movie.title} </h3>
                    </div>
                ))}
            {
                showMovieDetails && (

                    <div className={'movieCardInfo'}>
                        <div className={'movieCardInfoBg'}
                             style={{
                                 backgroundImage: `url(${imageUrl})`,
                                 backgroundSize: 'cover',
                                 backgroundPosition: 'center'
                             }
                             }>
                            <h3>{showMovieDetails.title}</h3>
                            <p>{showMovieDetails.release_date}</p>
                            <p>{showMovieDetails.popularity}</p>
                            <p>{showMovieDetails.overview}</p>
                            <StarRatingComp rating={showMovieDetails.vote_average}/>
                            <button className={'closeBtn'} onClick={handleClose}> close info</button>

                        </div>
                    </div>

                )}


        </div>
    );
};

export default MoviesByGenreListComp;
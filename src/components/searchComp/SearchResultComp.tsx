import React, {FC, useState} from 'react';
import {IMovieModel} from "../../models/IMovieModel";
import {defaultImageUrl} from "../../constantst/urls";
import StarRatingComp from "../star-rating/StarRetingComp";

interface IProps {
    movie: IMovieModel
}

const SearchResultComp: FC<IProps> = ({movie}) => {
    let {
        id, genre_ids,
        title, original_title,
        poster_path, name,
        popularity, vote_average,
        vote_count, original_language,
        release_date, adult,
        overview, backdrop_path,
        video
    } = movie;
    // console.log(movie)

    //background image
    const imageUrl = backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}` : defaultImageUrl;

    //show movie info div
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails)
    }

    const handleClose = () => {
        setShowDetails(false)
    }


    return (
        <div className={'movieCardWrap'}>
            <div className={'movieCard'} onClick={toggleDetails} style={{backgroundImage: `url(${imageUrl})`}}>
                <h3>More info here: {movie.title} </h3>
            </div>
            {
                showDetails && (

                    <div className={'movieCardInfo'}>
                        <div className={'movieCardInfoBg'}
                             style={{
                                 backgroundImage: `url(${imageUrl})`,
                                 backgroundSize: 'cover',
                                 backgroundPosition: 'center'
                             }
                             }>

                             <h3>{movie.title}</h3>
                        <p>Release Date : {movie.release_date}</p>
                        <p>Original Language : {movie.original_language}</p>
                            <p>Movie Info : </p>
                        <p>{movie.overview}</p>
                            <p>Movie Rating : </p>*
                        <StarRatingComp rating={movie.vote_average}/>
                        <button className={'closeBtn'} onClick={handleClose}> close info</button>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default SearchResultComp;
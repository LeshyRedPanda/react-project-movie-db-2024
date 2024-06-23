import React, {FC, useState} from 'react';
import {IMovieModel} from "../../models/IMovieModel";
import {defaultImageUrl} from "../../constantst/urls";

interface IProps {
    movie: IMovieModel,
}

const MovieComp: FC<IProps> = ({movie}) => {
    // console.log(movie.id)
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
    // console.log(total_pages)


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
                <span>{movie.title}</span>


            </div>
            {
                showDetails && (

                    <div className={'movieCardInfo'}>
                        <h3>{movie.title}</h3>
                        <p>{movie.release_date}</p>
                        <p>{movie.popularity}</p>
                        <p>{movie.overview}</p>
                        <button className={'closeBtn'} onClick={handleClose}> close info</button>

                    </div>
                )}
        </div>
    );
};

export default MovieComp;

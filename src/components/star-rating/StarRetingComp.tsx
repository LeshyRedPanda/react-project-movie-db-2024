import React, {FC} from 'react';

interface IProps{
    rating:number
}

const StarRatingComp:FC<IProps> = ({rating}) => {

    const fullStars = Math.floor(rating / 2);
    const emptyStars = 5 - fullStars;

    return (
        <div className={'starRating'}>
            {Array.from({ length: fullStars }, (_, index) => (
                <span key={index} className="star">★</span>
            ))}
            {Array.from({ length: emptyStars }, (_, index) => (
                <span key={index} className="star empty">★</span>
            ))}

        </div>
    );
};

export default StarRatingComp;
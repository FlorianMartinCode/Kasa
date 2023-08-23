import React from 'react';
import Star1 from '../../../assets/star1.PNG';
import Star2 from '../../../assets/star2.PNG';

const Star = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(i <= rating ? Star1 : Star2);
    }

    return (
        <ul className='stars-container'>
            {stars.map((star, index) => (
                <div className='star' key={`star-${index}`}>
                    <img src={star} alt="Star" />
                </div>
            ))}
        </ul>
    );
};

export default Star;

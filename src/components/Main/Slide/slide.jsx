import React, { useState } from 'react';
import chevronLeft from "../../../assets/forward_left.png"
import chevronRight from "../../../assets/forward_right.png"

const Slide = ({dataLocation}) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const nbPictures = dataLocation.pictures.length

    const isManyPictures = nbPictures > 1

    const goToPrevious = () => {
        const isFirstIndex = currentIndex === 0;
        const newIndex = isFirstIndex ? nbPictures - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    
    const goToNext = () => {
        const isLastIndex = currentIndex === nbPictures - 1; 
        const newIndex = isLastIndex ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <div className='slide'>
            <figure className='slide-location'>
                <img  src={dataLocation.pictures[currentIndex]} alt={dataLocation.title} />
            </figure>
            {isManyPictures ? <button className='btn btn-left' onClick={goToPrevious}><img src={chevronLeft} alt="" /></button> : null}
            {isManyPictures ? <button className='btn btn-right' onClick={goToNext}><img src={chevronRight} alt="" /></button> : null}
        </div>
    );
};
export default Slide;
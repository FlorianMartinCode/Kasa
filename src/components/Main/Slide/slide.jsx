import React, { useState } from 'react';
import chevronLeft from "../../../assets/forward_left.png"
import chevronRight from "../../../assets/forward_right.png"


const Slide = ({dataLocation}) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const nbPictures = dataLocation.pictures.length

    const picturesSlide = nbPictures > 1

    const goToBack = () => {
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
        <section className='slide'>
            <figure className='slide-location'>
                <img  src={dataLocation.pictures[currentIndex]} alt={dataLocation.title} />
            </figure>
            {picturesSlide ? <button className='btn btn-left' onClick={goToBack}><img src={chevronLeft} alt="" /></button> : null}
            {picturesSlide ? <button className='btn btn-right' onClick={goToNext}><img src={chevronRight} alt="" /></button> : null}
            <p className='nb-position'>{currentIndex + 1}/{nbPictures}</p>
        </section>
    );
};
export default Slide;
import React from 'react';

function Banner({ imageSrc, showText, className }) {
  return (
    <div className={`banner ${className}`}>
      <img
        src={imageSrc}
        alt=""
      />
      {showText && <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>}
    </div>
  );
}

export default Banner;

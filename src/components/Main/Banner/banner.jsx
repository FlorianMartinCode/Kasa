import React from 'react';

function Banner({ imageSrc, text, className}) {
  return (
    <section className={`banner ${className}`}>
      <img
        src={imageSrc}
        alt="immage banner"
      />
      {text && <h1 className='banner-title'>{text}</h1>}
    </section>
  );
}

export default Banner;

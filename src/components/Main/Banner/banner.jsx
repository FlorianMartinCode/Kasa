import React, { useState, useEffect } from 'react';

function Banner({ imageSrc, showText, imageHeightDesktop, imageHeightResponsive }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='banner'>
      <img
        src={imageSrc}
        alt=""
        style={{ height: windowWidth > 1000 ? imageHeightDesktop : imageHeightResponsive }}
      />
      {showText && <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>}
    </div>
  )
}

export default Banner;

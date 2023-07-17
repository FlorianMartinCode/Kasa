import React from 'react'
// import banner from '../assets/banner_home.png'
import banner from '../assets/banner.png'

function Banner() {
  return (
    <div className='banner'>
        <img src={banner} alt="" />
        <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner
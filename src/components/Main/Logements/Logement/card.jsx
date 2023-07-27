import React from 'react'
import { Link } from 'react-router-dom';

function Card ({ id,cover,title }) {
  return (
    <Link to= {`/card/${id}`} >
      <figure className='logement'>
        <img className='card-img' src={cover} alt="" />
        <figcaption className='title'>{title}</figcaption>
      </figure>
    </Link>
  )
}

export default Card
import React from 'react'
import { Link } from 'react-router-dom';

function Card ({ dataLocation }) {
  const logement = dataLocation;

  return (
    <Link to= {`/location/${logement.id}`} >
      <figure className='logement'>
        <img className='card-img' src={logement.cover} alt="" />
        <figcaption className='title'>{logement.title}</figcaption>
      </figure>
    </Link>
  )
}

export default Card
import React from 'react'
import { Link } from 'react-router-dom';

function logement() {
  return (
    <Link to='/logement'>
    <div className='logement'>
      
        <p className='title'>Titre de la location</p>
      
    </div>
    </Link>
  )
}

export default logement
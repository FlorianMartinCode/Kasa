import React from 'react';
import logowhite from '../../assets/logo_white.png';

function footer() {
  return (
    <footer className='footer'>
        <figure>
            <img src={logowhite} alt="Logo Kasa" />
        </figure>
        <p className='copyright'>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default footer
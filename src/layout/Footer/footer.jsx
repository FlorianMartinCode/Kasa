import React from 'react';
import logowhite from '../../assets/logo_white.png';

function footer() {
  return (
    <div className='footer'>
        <figure>
            <img src={logowhite} alt="" />
        </figure>
        <p className='copyright'>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default footer
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

function Navbar() {
    return (
      <header className='navbar'>
        <NavLink to='/'>
          <figure className='navbar-logo'>
            <img src={logo} alt="Logo Kasa" />
          </figure>
        </NavLink>
        <div className='acceuiletapropos'>
          <NavLink to='/'>Accueil</NavLink>
          <NavLink to='/about'>À propos</NavLink>
        </div>
      </header>
    )
}

export default Navbar
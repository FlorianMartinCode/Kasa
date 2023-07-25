import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';


export class Navbar extends PureComponent {
  render() {
    return (
      <nav className='navbar'>
        <NavLink to='/'>
          <figure className='navbar-logo'>
            <img src={logo} alt="Logo Kasa" />
          </figure>
        </NavLink>
        <div className='acceuiletapropos'>
          <NavLink to='/'>Accueil</NavLink>
          <NavLink to='/about'>À propos</NavLink>
        </div>
      </nav>
    )
  }
}

export default Navbar
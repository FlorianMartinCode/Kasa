import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';


export class Navbar extends PureComponent {
  render() {
    return (
      <nav className='navbar'>
        <figure className='navbar-logo'>
          <img src={logo} alt="Logo Kasa" />
        </figure>
        <div className='acceuiletapropos'>
          <NavLink to='/' activeclassname='active-link'>Accueil</NavLink>
          <NavLink to='/apropos' activeclassname='active-link'>À propos</NavLink>
        </div>
      </nav>
    )
  }
}

export default Navbar
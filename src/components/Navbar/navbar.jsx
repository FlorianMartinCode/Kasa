import React, { PureComponent } from 'react';
import logo from '../../assets/logo.png';


export class Navbar extends PureComponent {
  render() {
    return (
      <nav className='navbar'>
        <figure className='navbar-logo'>
          <img src={logo} alt="Logo Kasa" />
        </figure>
        <div className='acceuiletapropos'>
          <a href='/'>Acceuil</a>
          <a href=''>A propos</a>
        </div>
      </nav>
    )
  }
}

export default Navbar
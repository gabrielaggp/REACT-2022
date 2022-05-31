import React from 'react';
import './NavBar.css'
//componentes
import CartWidget from './CartWidget/CartWidget';

const NavBar = () => {
  return (
    <>
      <nav className="navb">
        <div className="container-header">
          <h1>
            <a href="*" className="header">
              Librería Claraboya
            </a>
          </h1>
        </div>
        <ul className="nav-List">
          <li className="nav-li">
            <a href="*" className="link-nav">
              Iniciar sesión
            </a>
          </li>
          <li className="nav-li">
            <a href="*" className="link-nav">
              Registrarse
            </a>
          </li>
          <li className="nav-li">
            <a href="*" className="link-nav">
              Contacto
            </a>
          </li>
        </ul>
        <CartWidget />
      </nav>
    </>
  );
};

export default NavBar;
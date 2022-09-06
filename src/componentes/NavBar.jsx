import React from 'react';
import CartWidget from './CartWidget'

// import CartWidget  from '../Components/CartWidget';

const NavBar = () => { 
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
         
          <li className="nav-item">
            <a className="nav-link" href="/">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Productos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
          <li>
          { <CartWidget /> }
       
          </li>
          
        </ul>
        
      </div>
    </div>
  </nav>
    );
}

export default NavBar;

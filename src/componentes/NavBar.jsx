import React from 'react';
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'

// import CartWidget  from '../Components/CartWidget';

const NavBar = () => { 
    return (
      <>
      <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        <a className="nav-link" href="/">
          home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Tequila
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Ron
        </a>
      </li>
   <li className="nav-item">
        <a className="nav-link" href="#">
          Cerveza
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <CartWidget/>
        </a>
      </li>
    </ul>
    </>
    );
}

export default NavBar;

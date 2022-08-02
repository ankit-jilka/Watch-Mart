import React from 'react'
import { Link } from 'react-router-dom';
import CartButton from './buttons/CartButton';
import Login from './buttons/Login';
import Signup from './buttons/Signup';
import Uname from './buttons/Uname';
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
         
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
           
          </div>
          <h1 className='brand'>WATCH MART</h1>
            
          
          <Uname />
          <Login />
          <Signup />
          <CartButton />
        </div>
        
      </nav>
  )
}

export default Header

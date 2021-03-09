import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link 
                to='/' 
                className='nav-links' 
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/charging_stations'
                className='nav-links'
              >
                Stations
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Bills'
                className='nav-links'
              >
                Bills
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/statistics'
                className='nav-links'
              >
                Statistics
              </Link>
            </li>

            <li>
              <Link
                to='/login'
                className='nav-links-mobile'
              >
                LogIN
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
              >
                SignUp
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' type='LOG'>LOG IN</Button>}
          {button && <Button buttonStyle='btn--outline' type='SIGN'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

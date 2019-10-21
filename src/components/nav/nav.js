import React from 'react';
import './nav.scss';
import { Link } from 'gatsby'

const Nav = () => {    
    return(
      <nav>          
        <Link to="/" id="name">Cory Henderson</ Link>
        <div className="links">
          <Link to="aboutme" id="individual-link-about">About</ Link>
          <Link to="aboutme" id="individual-link-about">Contact</ Link>
        </div>
      </nav>
    )
}

export default Nav;
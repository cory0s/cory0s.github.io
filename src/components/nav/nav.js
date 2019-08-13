import React from 'react';
import './nav.scss';
import { Link } from 'gatsby'

const Nav = props => {    
    return(
      <nav>
        <div class="links">
          <Link to="/projects" id="individual-link-projects">Projects</ Link>
          <Link to="/" id="my-name">Cory Henderson</Link>
          <Link to="about" id="individual-link-about">About</ Link>
        </div>
      </nav>
    )
}

export default Nav;
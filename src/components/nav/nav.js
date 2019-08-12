import React from 'react';
import './nav.scss';
import { Link } from 'gatsby'

const Nav = props => {    
    return(
      <nav>
        <div class="links">
          <Link to="/projects" class="individual-link">Projects</ Link>
          <Link to="/" id="my-name">Cory Henderson</Link>
          <Link to="about" class="individual-link">About</ Link>
        </div>
      </nav>
    )
}

export default Nav;
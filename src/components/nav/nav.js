import React from 'react';
import './nav.scss';
import { Link } from 'gatsby'

const Nav = props => {    
    return(
      <nav>
        <div class="links">
          <Link to="/projects" activeStyle={{color: 'orange'}}>Projects</ Link>
          <Link to="about">About</ Link>
          <Link to="life">Life</ Link>
          <Link to="contact">Contact</ Link>
        </div>
      </nav>
    )
}

export default Nav;
import React from 'react';
import './nav.scss';
import { Link } from 'gatsby'

const Nav = props => {
  const style = {
    textDecoration: 'none',
    color: 'black'
  }
    
    return(
      <nav>
        <div class="links">
          <Link to="/projects" style={style} activeStyle={{color: 'orange'}}>Projects</ Link>
          <Link to="about" style={style}>About</ Link>
          <Link to="life" style={style}>Life</ Link>
          <Link to="contact" style={style}>Contact</ Link>
        </div>
      </nav>
    )
}

export default Nav;
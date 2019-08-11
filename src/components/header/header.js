import PropTypes from "prop-types"
import React from "react"
import './header.scss'
import Nav from '../nav/nav'

const Header = ({ siteTitle }) => (
  <header>
    <link href="https://fonts.googleapis.com/css?family=Concert+One|Poiret+One&display=swap" rel="stylesheet"/>
    <Nav />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

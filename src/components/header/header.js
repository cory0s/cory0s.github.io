import PropTypes from "prop-types"
import React from "react"
import Nav from '../nav/nav'

const Header = ({ siteTitle }) => (
  <header>
    <link href="https://fonts.googleapis.com/css?family=Poiret+One&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Righteous&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css?family=Bree+Serif|Righteous|Staatliches&display=swap" rel="stylesheet"/>
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

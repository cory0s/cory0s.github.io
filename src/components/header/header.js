import PropTypes from "prop-types"
import React from "react"
import Nav from '../nav/nav'

const Header = ({ siteTitle }) => (
  <header>
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

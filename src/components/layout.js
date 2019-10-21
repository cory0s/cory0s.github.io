/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Head from "./head/head"
import Header from "./header/header"
import Footer from './footer/footer'
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="content-wrapper">
        <Head />
        <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

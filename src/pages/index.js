import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from '../components/nav/nav'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Cory's Site</h1>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import About from '../components/about'

const About = () => (
  <Layout>
    <SEO title="About Me" />
    <Link to="/">Home</Link>
  </Layout>
)

export default About
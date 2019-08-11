import React from "react"
import { Link } from "gatsby"
import Work from '../components/projects/projects.js'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <Link to="/">Home</Link>
    <Work />
  </Layout>
)

export default Projects
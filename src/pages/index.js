import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Name from '../components/name/name'
import Projects from '../components/projects/projects'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Name />
    <Projects />
  </Layout>
)

export default IndexPage
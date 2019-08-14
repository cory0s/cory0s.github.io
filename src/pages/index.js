import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Name from '../components/name/name'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Name />
  </Layout>
)

export default IndexPage
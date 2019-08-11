import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from '../components/nav/nav'
import Image from '../components/image/image'
import Name from '../components/name/name'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Name />
  </Layout>
)

export default IndexPage
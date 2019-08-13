import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from '../components/about/about'

const About = () => (
  <Layout>
    <SEO title="About Me" />
    <AboutMe />
  </Layout>
)

export default About
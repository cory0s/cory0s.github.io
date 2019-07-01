import React from "react"
import { Link } from "gatsby"
import Curve from '../components/projects/curve.js'
import Bandwagon from '../components/projects/bandwagon.js'
import Chekov from '../components/projects/chekov.js'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <div class="projects">
      <div id="project1">
        <p>Curve</p>
        <Curve />
      </div>
      <div id="project2">
        <p>Bandwagon</p>
        <Bandwagon />
      </div>
      <div id="project3">
        <p>Chekov</p>
        <Chekov />
      </div>
    </div>
    <Link to="/">Home</Link>
  </Layout>
)

export default Projects
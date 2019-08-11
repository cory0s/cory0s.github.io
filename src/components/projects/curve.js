import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Curve = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "curve.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => 
      <div class='curve'>                
        <div id="project1">
          <p>Curve</p>
          <p>Curve is an employee development and metrics application. It was a one week MVP sprint accomplished by a talented team of individuals and written in both ReactJS and C#/.NET. This project gave me an introduction to what working on a real multidisciplinary development team is like. I worked as part of the front end team figuring out how to structure and implement GraphQL queries and creating extensive project documentation using DocZ.</p>
          <h3>Frontend project stack:</h3>
          <ul>
              <li>GatsbyJS</li>
              <li>GraphQL</li>
              <li>D3</li>
              <li>DocZ</li>

          </ul>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        </div>
      </div>
    }
  />
)
export default Curve
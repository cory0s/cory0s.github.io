import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import CurveImage from '../../images/curvelogo.jpeg'

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
          <h2>Curve</h2>
          <p class="project-description">An employee development and metrics application.</p>
          {/* <h3>Project Tools:</h3>
          <ul>
              <li>GatsbyJS</li>
              <li>GraphQL</li>
              <li>D3</li>
              <li>MongoDB</li>

          </ul> */}
          <img src={CurveImage}/>
          {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} /> */}
      </div>
    }
  />
)
export default Curve
import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import CurveImage from '../../images/curve.png'

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
          <p class="project-description">Curve is an employee development and metrics application. It was a one week MVP sprint for 4 teams utilzing both JavaScript and C#/.NET.</p>
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
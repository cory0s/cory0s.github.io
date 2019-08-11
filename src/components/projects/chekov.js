import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Chekov = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "chekov.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => 
      <div class='checkov'>
          <h2>Chekov</h2>
          <p>Chekov is a clean to do list application built in vanilla JavaScript.</p>
          <h3>Project tools:</h3>
          <ul>
              <li>JavaScript (ES5)</li>
              <li>HTML5</li>
              <li>CSS</li>
          </ul>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    }
  />
)
export default Chekov
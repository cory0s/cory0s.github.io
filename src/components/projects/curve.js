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
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    }
  />
)
export default Curve
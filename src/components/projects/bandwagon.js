import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Bandwagon = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bandwagon.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => 
      <div class='bandwagon'>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    }
  />
)
export default Bandwagon
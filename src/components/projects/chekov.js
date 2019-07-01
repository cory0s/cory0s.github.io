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
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    }
  />
)
export default Chekov
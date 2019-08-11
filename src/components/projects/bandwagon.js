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
        <h2>Bandwagon</h2>
        <p>Bandwagon is an application which provides upcoming concert recommendations for bands related to user taste. It utilizes RESTful calls to the TasteDive and Ticketmaster APIs.</p>
        <h3>Project tools:</h3>
        <ul>
            <li>Express.js</li>
            <li>PostgreSQL</li>
            <li>EJS Templates</li>
        </ul>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      </div>
    }
  />
)
export default Bandwagon
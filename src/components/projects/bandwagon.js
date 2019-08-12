import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import BandwagonImage from '../../images/bandwagon.png'

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
        <p class="project-description">Bandwagon is an application which provides upcoming concert recommendations for bands related to user taste. It utilizes RESTful calls to the TasteDive and Ticketmaster APIs.</p>
        <img src={BandwagonImage}/>
        {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} /> */}
      </div>
    }
  />
)
export default Bandwagon
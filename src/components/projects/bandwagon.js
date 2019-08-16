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
      <div className='bandwagon'>
        <h2>Bandwagon</h2>
        <p className="project-description">Find concerts based on user taste.</p>
        <figure>
          <img src={BandwagonImage} alt="bandwagon"/>
        </figure>
        {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} /> */}
      </div>
    }
  />
)
export default Bandwagon
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
        <div id="links">
            <a href="https://github.com/band-camp/301-final-project" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="http://bandwagon.events/" target="_blank" rel="noopener noreferrer">Deployed Site</a>
        </div>
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
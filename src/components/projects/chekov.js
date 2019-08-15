import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import ChekovImage from '../../images/chekov.png'


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
      <div className='checkov'>
          <h2>Chekov</h2>
          <div id="links">
            <a href="https://github.com/abc-s/201-final-project" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://abc-s.github.io/201-final-project/lists.html" target="_blank" rel="noopener noreferrer">Deployed Site</a>
          </div>
          <p className="project-description">A to do list application built in vanilla JavaScript.</p>
          {/* <h3>Project tools:</h3>
          <ul>
              <li>JavaScript (ES5)</li>
              <li>HTML5</li>
              <li>CSS</li>
          </ul> */}
          <figure>
            <img src={ChekovImage} alt="chekov"/>
          </figure>
        {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} /> */}
      </div>
    }
  />
)
export default Chekov
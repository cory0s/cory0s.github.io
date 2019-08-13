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
      <article class='checkov'>
          <h2>Chekov</h2>
          <p class="project-description">A to do list application built in vanilla JavaScript.</p>
          {/* <h3>Project tools:</h3>
          <ul>
              <li>JavaScript (ES5)</li>
              <li>HTML5</li>
              <li>CSS</li>
          </ul> */}
          <figure>
            <img src={ChekovImage}/>
          </figure>
        {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} /> */}
      </article>
    }
  />
)
export default Chekov
import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import CurveImage from '../../images/curvelogo.jpeg'

const Curve = () => {

    return(
        <article className="curve">               
            <h2>Curve</h2>
            <p className="project-description">An employee development and metrics application.</p>
            <figure>
              <img src={CurveImage} alt="curve"/>
            </figure>
            {/* <Img fluid={data.placeholderImage.childImageSharp.fluid} /> */}
        </article>
  )
}

export default Curve
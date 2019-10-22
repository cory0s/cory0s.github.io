import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import CurveImage from '../../images/curve.jpeg'

const Curve = () => {

    return(
      <article className="curve">
        <p>01.</p>
        <p>Curve</p>
        <a href="/curve">   
          <figure>
            <img src={CurveImage} alt="curve"/>
          </figure>
        </a>
      </article>
  )
}

export default Curve
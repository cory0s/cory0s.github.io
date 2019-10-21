import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
import ChekovImage from '../../images/chekov.png'


const Chekov = () => {
  return(
    <article className="chekov">
      <p>03.</p>
      <p>Chekov</p>
      <a href="/chekov">   
        <figure>
          <img src={ChekovImage} alt="chekov"/>
        </figure>
      </a>
    </article>
  )
}
export default Chekov
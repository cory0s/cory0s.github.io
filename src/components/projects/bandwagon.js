import React from "react"
import BandwagonImage from '../../images/bandwagon.png'

const Bandwagon = () => {
  return(
    <article className="bandwagon">
      <p>02.</p>
      <p>Bandwagon</p>
      <a href="/bandwagon">   
        <figure>
          <img src={BandwagonImage} alt="bandwagon"/>
        </figure>
      </a>
    </article>
  )
}
export default Bandwagon
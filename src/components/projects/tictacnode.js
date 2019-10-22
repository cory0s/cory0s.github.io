import React from "react"
import TicTacNodeImage from '../../images/tictacnode.png'

const TicTacNode = () => {

    return(
      <article className="tictacnode">
        <p>04.</p>
        <p>Tic-Tac-Node</p>
        <a href="/tictacnode">   
          <figure>
            <img src={TicTacNodeImage} alt="tictacnode"/>
          </figure>
        </a>
      </article>
  )
}

export default TicTacNode;
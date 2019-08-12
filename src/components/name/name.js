import React from 'react';
import './name.scss';
import Typing from 'react-typing-animation';
import MainImage from '../../images/main-page.jpg'

const Name = props => {
    
    return(
        <div class="name">
          <div class="main-left">
            <div id="intro">
              <p>hi!</p>
              <p>i'm cory henderson</p>
            </div>
            <div id="traits">
              <p>I'm a full stack developer exploring the world of <span id="red">JavaScript</span></p>
            </div>
          </div>
          <div class="main-right">
            {/* <img src={MainImage}/> */}
          </div>
        </div>
    )
}

export default Name;
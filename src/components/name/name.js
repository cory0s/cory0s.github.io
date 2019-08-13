import React from 'react';
import './name.scss';
import Typing from 'react-typing-animation';

const Name = props => {
    
    return(
        <div class="name">
            <div class="intro">
              <p>hi!</p>
              <p>i'm cory</p>
            </div>
            <div class="traits">
              <p>i'm a full-stack developer</p>
              <p>located in seattle, wa</p>
            </div>
        </div>
    )
}

export default Name;
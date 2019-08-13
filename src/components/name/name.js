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
            <Typing speed={50}>
              <Typing.Delay ms={2000} />
              <p>i'm a full-stack developer</p>
              <p>located in seattle, wa</p>
            </Typing>
            </div>
        </div>
    )
}

export default Name;
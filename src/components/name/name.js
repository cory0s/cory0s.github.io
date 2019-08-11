import React from 'react';
import './name.scss';
import Typing from 'react-typing-animation';

const Name = props => {
    
    return(
        <div class="name">
          <Typing startDelay={3000} speed={40}>

          <div id="intro">
            <p>hi!</p>
            <Typing.Delay ms={1000} />
            <p>i'm cory henderson</p>
          
          </div>

          <div id="traits">
            <Typing.Delay ms={1000} />
            <p>I'm a software developer who loves <b>JavaScript</b></p>
            <Typing.Delay ms={1000} />
            <p>...and bicycle adventures.</p>
            <Typing.Delay ms={1000} />
            <p id="tag-line">Let's build something together!</p>
          </div>
          </Typing>
        </div>
    )
}

export default Name;
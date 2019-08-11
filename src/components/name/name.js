import React from 'react';
import './name.scss';
import Typing from 'react-typing-animation';

const Name = props => {
    
    return(
        <div class="name">
          {/* <Typing startDelay={2000} speed={40}> */}

          <div id="intro">
            <p>hi!</p>
            {/* <Typing.Delay ms={1000} /> */}
            <p>i'm cory henderson</p>
          
          </div>
          <Typing startDelay={2000}>
          <div id="traits">
            <p>I'm a software developer in love with <span id="red">JavaScript</span></p>
            <Typing.Delay ms={2000} />
            <p>...and bicycle adventures.</p>
            <Typing.Delay ms={2000} />
            <p>Thanks for checking out my site!</p>
          </div>
          </Typing>
        </div>
    )
}

export default Name;
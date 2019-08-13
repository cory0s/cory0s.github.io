import React from 'react';
import './about.scss';
import Me from '../../images/me.jpg';

const About = props => {
    
    return(
        <div class="about">
            <h2>My Story...</h2>
            <div class="my-story">
                <p>I'm a Washington native and University of Washington graduate. I worked for several years as an engineer designing buildings and machinery before discovering the exciting world of coding via the internet and some good friends. Seriously, this stuff is great. I love it because you can build BIG, AWESOME things...without cranes...and concrete and welding torches and safety equipment and iron workers and etc. Don't get me wrong, my old job was fun, but this is much more exciting. It's new and flexible and I'm oh so excited to see where it takes me!</p>
            </div>
            <h2>Other Things...</h2>
            <div class="other-things">
                <div class="hobbies">
                <p>I love going on outdoor adventures via bicycle.</p>
                <p>I spent some extended time in Europe learning French. J'ai besoin de practique.</p>
                <p>I like reading books. Mostly fiction. Don't judge.</p>
                </div>
                <div class="personal-photo">
                    <img src={Me}/>
                </div>
            </div>
        </div>
    )
}

export default About;
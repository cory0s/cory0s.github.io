import React from 'react';
import Bandwagon from './bandwagon.js';
import Chekov from './Chekov.js';
import Curve from './curve.js';
import './projects.scss';


const Projects = props => {

    return(
        <>
        <h2>Here are some cool software projects I've been a part of.</h2>
        <div class="projects">
            <Curve />
            <Bandwagon />
            <Chekov />
        </div>
        </>
    );
}

export default Projects;
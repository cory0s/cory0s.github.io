import React from 'react';
import Bandwagon from './bandwagon.js';
import Chekov from './Chekov.js';
import Curve from './curve.js';
import './projects.scss';


const Projects = props => {

    return(
        <div class="container1">
            <h1>Projects</h1>
            <p>Here are some cool software projects I've been a part of.</p>
            <div class="projects">
                <Curve />
                <Bandwagon />
                <Chekov />
            </div>
        </div>
    );
}

export default Projects;
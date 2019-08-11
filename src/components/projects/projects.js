import React from 'react';
import Bandwagon from './bandwagon.js';
import Chekov from './Chekov.js';
import Curve from './curve.js';
import './projects.scss';


const Projects = props => {

    return(
        <div class="container1">
            <h1>Projects</h1>
            <div class="projects">
                <div id="project1">
                    <p>Curve</p>
                    <Curve />
                </div>
                <div id="project2">
                    <p>Bandwagon</p>
                    <Bandwagon />
                </div>
                <div id="project3">
                    <p>Chekov</p>
                    <Chekov />
                </div>
            </div>
        </div>
    );
}

export default Projects;
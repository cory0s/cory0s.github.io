import React from 'react';
import Bandwagon from './bandwagon.js';
import Chekov from './Chekov.js';
import Curve from './curve.js';
import './projects.scss';


class Projects extends React.Component{

    constructor(props){
        super(props);
        this.state={
            current: '',
        };
    }

    render(){
        return(
            <div className="work">
                <div className="project-cards">
                    <Curve />
                    <Bandwagon />
                    <Chekov />
                </div>
            </div>
        )
    };
}

export default Projects;
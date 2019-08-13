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

    setCurrent = (e) => {
        e.preventDefault();
        console.log(this.state);
        console.log(e.target.className);
        this.setState({current: e.target.class});
        console.log(this.state);
    }

    render(){
        return(
        <div class="container">
            <div class="projects">
                <a onClick={this.setCurrent} className="curve"><Curve /></a>
                <a onClick={this.setCurrent} className="bandwagon"><Bandwagon /></a>
                <a onClick={this.setCurrent} className="chekov"><Chekov /></a>
            </div>
        </div>
        )
    };
}

export default Projects;
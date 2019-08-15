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
        <div className="container">
            <div className="projects">
                <article className="curve"><Curve /></article>
                <article className="bandwagon"><Bandwagon /></article>
                <article className="chekov"><Chekov /></article>
            </div>
        </div>
        )
    };
}

export default Projects;
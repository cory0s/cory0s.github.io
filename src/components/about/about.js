import React from 'react';
import Img from 'gatsby-image';
import './about.scss';
import Me from '../../images/me.jpg';

const About = (props) => {
  const aboutMeMarkdown = props.info.allMarkdownRemark.edges.reduce((acc,val)=> val.node.frontmatter.title === 'About Me' ? val : null).node;

  return(
    <div>
      <div className="about" dangerouslySetInnerHTML={{__html: aboutMeMarkdown.html}}></div>
    </div>
  )
}

export default About;
import React from 'react';
import './about.scss';
import Me from '../../images/me.jpg';

const About = (props) => {
  const aboutMeMarkdown = props.info.allMarkdownRemark.edges.reduce((acc,val)=> val.node.frontmatter.title === 'About Me' ? val : null).node;

  return(
    <>
      <div className="about" dangerouslySetInnerHTML={{__html: aboutMeMarkdown.html}}></div>
      {/* <img src={Me}/> */}
    </>
  )
}

export default About;
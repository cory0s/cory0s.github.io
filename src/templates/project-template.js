import React from 'react';
import { graphql } from 'gatsby';

export default function Template({ data }){
    const project = data.markdownRemark;

    return(
        <div>
            <h2>{project.frontmatter.title}</h2>
            <div dangerouslySetInnerHTML={{__html: project.html}} />
        </div>
    )
}

export const projectQuery = graphql`
    query ProjectByPath($path: String!){
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter{
                path
                title
            }
        }
    }
`
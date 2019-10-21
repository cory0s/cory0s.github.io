---
title: "Markdown in GatsbyJS"
path: "/blog/markdown-in-gatsby"
date: "8/22/2019"
---

## Rendering Markdown in Gatsby
---
A powerful feature of the JAMstack approach to development is the usage of dynamically rendered markdown files. This enables developers to create page content from simple text files which can be created/edited by their clients. This gives the client flexibility in editing their sites and avoids any need for changes to the page's HTML. In this post I will highlight how to accomplish this with your own GatsbyJS website.

## Gatsby Features
---
Gatsby is a static site generator layered on top of React. It offers the speed and performance of a preloaded static site, but still enables the rich dynamic experience of your typical React application. It also comes with some pretty neat plugins which make markdown injection into your website a breeze.

In order to read in content files (.md) we will need to use two Gatsby plugins. First we will need to install two packages:    

`npm install gatsby-transformer-remark gatsby-source-filesystem`    

 The filesystem will enable us to target where our desired content is stored and the transformer-remark plugin will create node objects for each content/.md file it finds in the locations specified by the filesystem. Once the content nodes are created, we can query for the markdown data upfront using GraphQL, and inject it into our React components.

## Setting up gatsby-source-filesystem
---
In our gatsby-config.js folder, we can specify where we want our filesystem to search. 

```javascript
plugins: [
    {
    resolve: `gatsby-source-filesystem`,
    options: {
        name: `images`,
        path: `${__dirname}/src/images`,
    },
    },
    {
    resolve: `gatsby-source-filesystem`,
    options: {
        name: `content`,
        path: `${__dirname}/content`,
    },
    },
],
```

The above script will tell our filesystem to create directories for our images and content which will tell the markdown transformer where to look for content files. After scrubbing these filepaths for relevant file types, the transformer will create a node object for each file which can then be queried and used in our React components.

## Querying Resources into a Template
---
A simple example of how to implement this "injection" was used to generate project pages for this website.

```javascript
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout.js';
import './project-template.scss'

export default function Template({ data }){
    const project = data.markdownRemark;

    return(
        <Layout>
            <div class="container">
                <div dangerouslySetInnerHTML={{__html: project.html}} />
            </div>
        </ Layout>
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
```

In the above code snippet, I create a generic template used to render each project post. The template is a div element which we can inject data from the content nodes created by the markdown transformer.  Let's take a closer look at the GraphQL query:

```javascript
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
```

We are creating a GraphQL query, ProjectByPath, which will be executed at build time. The markdown transformer creates markdownRemark objects containing relevant information from our markdown files. In the above query, I am creating individual data requests for each path found in my content directory. The object frontmatter contains basic information about the post which I will use to create the page title and path. In addition, the html attribute creates preformatted HTML which can be directly injected into my template. Once the query is complete, the Template component can utilize the data to dynamically create page content:

```javascript
export default function Template({ data }){
    const project = data.markdownRemark;

    return(
        <Layout>
            <div class="container">
                <div dangerouslySetInnerHTML={{__html: project.html}} />
            </div>
        </ Layout>
    )
}
```

## Creating pages from Templates
---
The final step in the process is utilizing your created templates to create new page routes. To do this, we need to execute a script in the gatsby-node.js file which should live in the root of your directory. In the gatsby-node.js file, the following script will use Gatsby's createPages() function to dynamically create pages from your markdown.

```javascript
const path = require('path');

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions;

    const projectTemplate = path.resolve('src/templates/project-template.js');
}
```

This pulls in the createPage and graphql functions from Gatsby along with the project tempate we created earlier. Next, we want to make a GraphQL query and pull in our page content. The gatsby-transformer-remark plugin will store our markdown a node called allMarkdownRemark.

```javascript
const path = require('path');

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions;

    const projectTemplate = path.resolve('src/templates/project-template.js');

    return graphql(`{
        allMarkdownRemark{
            edges{
                node{
                    html
                    id
                    frontmatter{
                        title
                        path
                    }
                }
            }
        }
    }`)
    .then(res => {
        if(res.errors){
            return Promise.reject(res.errors);
        }

        res.data.allMarkdownRemark.edges.forEach( ({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: projectTemplate,
            })
        })
    })
```
    
Once we receive the response object from our GraphQL query, we can pull out the edges attribute of the allMarkdownRemark object. This will be an array containing node objects for each markdown file found. Finally, we can call the createPage() function using each node's path and the desired rendered componenet. The desired path (i.e. /blog, /projects, etc.) should be specified at the top of each markdown file. This can be done by simply adding the line `path: /desiredpathname` to the top of your markdown page as seen below:

```javascript
---
title: "Markdown in GatsbyJS"
path: "/blog/markdown-in-gatsby"
date: "8/22/2019"
---
```
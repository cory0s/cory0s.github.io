import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from '../components/about/about'
import PropTypes from 'prop-types';

const About = ({ data }) => (
  <Layout>
    <AboutMe info={data}/>
  </Layout>
)

About.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query AboutQuery{
    allMarkdownRemark{
      edges{
        node{
          id
          html
          frontmatter{
            title
            path
          }
          excerpt
        }
      }
    }
  }
`;

export default About
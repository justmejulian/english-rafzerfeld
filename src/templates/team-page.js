import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const TeamPageTemplate = ({ title, bev, angela }) => {
  return (
    <div>
      <h1>{title}</h1>
      {console.log(bev)}
      <h1>{bev.description}</h1>
      <h1>{angela.description}</h1>
    </div>
  );
};

TeamPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  bev: PropTypes.object.isRequired,
  angela: PropTypes.object.isRequired,
};

const TeamPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <TeamPageTemplate {...frontmatter} />
    </Layout>
  );
};

TeamPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TeamPage;

export const teamPageQuery = graphql`
         query TeamPage($id: String!) {
           markdownRemark(id: { eq: $id }) {
             frontmatter {
               title
               bev {
                 image {
                   childImageSharp {
                     fluid(maxWidth: 2048, quality: 100) {
                       ...GatsbyImageSharpFluid
                     }
                   }
                 }
                 description
                 nationality
                 certificates
               }
               angela {
                 image {
                   childImageSharp {
                     fluid(maxWidth: 2048, quality: 100) {
                       ...GatsbyImageSharpFluid
                     }
                   }
                 }
                 description
                 nationality
                 certificates
               }
             }
           }
         }
       `;

import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const FeesPageTemplate = ({ title, groupLessons, privateLessons }) => {
  return (
    <div>
      <h1>{title}</h1>
      {console.log(groupLessons)}
      {console.log(privateLessons)}
    </div>
  );
};

FeesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  groupLessons: PropTypes.object.isRequired,
  privateLessons: PropTypes.object.isRequired,
};

const FeesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <FeesPageTemplate {...frontmatter} />
    </Layout>
  );
};

FeesPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FeesPage;

export const feesPageQuery = graphql`
  query FeesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        groupLessons {
          lessons {
            name
          }
        }
        privateLessons {
          lessons {
            name
          }
        }
      }
    }
  }
`;

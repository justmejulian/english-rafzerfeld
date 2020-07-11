import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Content, { HTMLContent } from "../components/Content";

import Layout from "../components/Layout";

export const IndexPageTemplate = ({ title, content, contentComponent }) => {
  const BodyComponent = contentComponent || Content;
  return (
    <div>
      <h1>{title}</h1>
      <cite>
        <i />
        Well planned, varied and stimulating, using relevant themes and
        supporting resource materials.
        <i />
        <footer>- Student of english in the rafzerfeld</footer>
      </cite>
      <BodyComponent content={content} />
    </div>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
};

const IndexPage = ({ data }) => {
  const { markdownRemark } = data;

  return (
    <Layout>
      <IndexPageTemplate
        title={markdownRemark.frontmatter.title}
        content={markdownRemark.html}
        contentComponent={HTMLContent}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

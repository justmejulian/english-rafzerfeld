import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Content, { HTMLContent } from "../components/Content";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";

export const IndexPageTemplate = ({ title, content, contentComponent }) => {
  const BodyComponent = contentComponent || Content;
  return (
    <div>
      <h1>{title}</h1>
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
      <div
        style={{
          margin: "40px 0px",
          height: 1,
          backgroundColor: "grey",
        }}
      />
      <h2>Latest Posts</h2>
      <BlogRoll />
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

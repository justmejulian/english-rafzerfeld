import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Content, { HTMLContent } from "../components/Content";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";

import styles from "./index-page.module.css";

export const IndexPageTemplate = ({
  title,
  content,
  contentComponent,
  quote,
}) => {
  const BodyComponent = contentComponent || Content;
  return (
    <div>
      <h1>{title}</h1>
      <cite className={styles.cite}>
        {quote.text}
        <footer className={styles.quoteFooter}>- {quote.footer}</footer>
      </cite>
      <BodyComponent content={content} />
    </div>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  quote: PropTypes.shape({
    text: PropTypes.string.isRequired,
    footer: PropTypes.string.isRequired,
  }),
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
};

const IndexPage = ({ data }) => {
  const { markdownRemark } = data;

  return (
    <Layout>
      <IndexPageTemplate
        title={markdownRemark.frontmatter.title}
        quote={markdownRemark.frontmatter.quote}
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
        quote {
          text
          footer
        }
      }
    }
  }
`;

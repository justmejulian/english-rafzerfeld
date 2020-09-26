import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const ContactPageTemplate = ({ title, bev, angela }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h1>{bev.tel}</h1>
      <h1>{angela.tel}</h1>
    </div>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  bev: PropTypes.object.isRequired,
  angela: PropTypes.object.isRequired,
};

const ContactPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ContactPageTemplate {...frontmatter} />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        bev {
          tel
          email
        }
        angela {
          tel
          email
        }
      }
    }
  }
`;

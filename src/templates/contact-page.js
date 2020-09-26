import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

export const ContactPageTemplate = ({
  title,
  bevTel,
  bevEmail,
  angelaTel,
  angelaEmail,
  info,
  locations,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <h1>{bevTel}</h1>
      <h1>{bevEmail}</h1>
      <h1>{angelaTel}</h1>
      <h1>{angelaEmail}</h1>
      <h1>{info}</h1>
      <h1>{title}</h1>
      <h1>{locations}</h1>
    </div>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  bevTel: PropTypes.string.isRequired,
  bevEmail: PropTypes.string.isRequired,
  angelaTel: PropTypes.string.isRequired,
  angelaEmail: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  locations: PropTypes.string.isRequired,
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
        bevTel
        bevEmail
        angelaTel
        angelaEmail
        info
        locations
      }
    }
  }
`;

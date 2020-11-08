import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

import styles from "./contact-page.module.css";

const detailCompontent = (detailName, detail) => (
  <div className={styles.detail}>
    <span className={styles.detailName}>{detailName}</span>
    {detail}
  </div>
);

export const ContactPageTemplate = ({ title, info, email, bev, angela }) => {
  return (
    <div>
      <h1>{title}</h1>

      <div>
        <div className={styles.name}>Info</div>
        <div className={styles.info}>{info}</div>
        {detailCompontent("E-Mail:", email)}
      </div>

      <div className={styles.teachers}>
        <div className={styles.teacher}>
          <div className={styles.name}>Angela Eibner</div>
          {detailCompontent("Tel:", angela.tel)}
          {detailCompontent("E-Mail:", angela.email)}
        </div>
        <div className={styles.teacher}>
          <div className={styles.name}>Bev Visser</div>
          {detailCompontent("Tel:", bev.tel)}
          {detailCompontent("E-Mail:", bev.email)}
        </div>
      </div>

      <div>
        <div className={styles.name}>Location</div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.782554249761!2d8.533204815630642!3d47.610917679185064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479079e69a8f4f79%3A0x7cf05e8e1231ed5a!2sStr%C3%A4ssler%2030%2C%208197%20Rafz!5e0!3m2!1sen!2sch!4v1601807020747!5m2!1sen!2sch'
          width='100%'
          height='400'
          frameborder='0'
          style={{ border: 0 }}
          allowfullscreen=''
          aria-hidden='false'
          tabindex='0'
        ></iframe>
      </div>
    </div>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
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
        info
        email
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

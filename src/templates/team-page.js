import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";

import classnames from "classnames";

import styles from "./team-page.module.css";

export const TeamPageTemplate = ({ title, bev, angela }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className={styles.row}>
        <div className={classnames(styles.rowElement, styles.name)}>
          Angela Eibner
        </div>
        <div className={classnames(styles.rowElement, styles.name)}>
          Bev Visser
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.image}>
          <Img fluid={angela.image.childImageSharp.fluid} alt='Angela Image' />
        </div>
        <div className={styles.image}>
          <Img fluid={bev.image.childImageSharp.fluid} alt='Angela Image' />
        </div>
      </div>

      <div className={styles.row}>
        <div className={classnames(styles.rowElement, styles.description)}>
          {angela.description}
        </div>
        <div className={classnames(styles.rowElement, styles.description)}>
          {bev.description}
        </div>
      </div>

      <div className={styles.row}>
        <div className={classnames(styles.rowElement, styles.nationality)}>
          <div className={styles.rowName}>Nationality:</div>
          {angela.nationality}
        </div>
        <div className={classnames(styles.rowElement, styles.nationality)}>
          <div className={styles.rowName}>Nationality:</div>
          {bev.nationality}
        </div>
      </div>

      <div className={styles.row}>
        <div className={classnames(styles.rowElement, styles.certificates)}>
          <div className={styles.rowName}>Certificates:</div>
          <div>
            {angela.certificates.map((certificate) => (
              <div>{certificate}</div>
            ))}
          </div>
        </div>
        <div className={classnames(styles.rowElement, styles.certificates)}>
          <div className={styles.rowName}>Certificates:</div>
          <div>
            {bev.certificates.map((certificate) => (
              <div>{certificate}</div>
            ))}
          </div>
        </div>
      </div>
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
              fluid(maxWidth: 300) {
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
              fluid(maxWidth: 1821) {
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

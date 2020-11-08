import React from "react";
import PropTypes from "prop-types";

import { useStaticQuery, graphql } from "gatsby";

import Img from "gatsby-image";

import Nav from "./Nav";

import styles from "./Header.module.css";

const Header = ({ langUrl }) => {
  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <header className={styles.header}>
      <Img fluid={logo.childImageSharp.fluid} className={styles.img} />
      <Nav langUrl={langUrl} />
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  langUrl: PropTypes.string.isRequired,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

import React from "react";
import PropTypes from "prop-types";

import { useStaticQuery, graphql } from "gatsby";

import Img from "gatsby-image";

import Nav from "./Nav";

const Header = () => {
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
    <header
      style={{
        height: `90px`,
        display: "flex",
        alignItems: "baseline",
      }}
    >
      <Img
        fluid={logo.childImageSharp.fluid}
        style={{
          height: 75,
          width: 550,
        }}
      />
      <Nav />
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

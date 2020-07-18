/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import BackgroundImage from "gatsby-background-image";

import Header from "./Header";
import "../all.css";

const Layout = ({ children }) => {
  const { bgImage } = useStaticQuery(graphql`
    query {
      bgImage: file(relativePath: { eq: "bgVineyard.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1821) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage
      style={{
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        minWidth: 950,
        minHeight: 600,
        height: "100vh",
      }}
      fluid={bgImage.childImageSharp.fluid}
    >
      <div
        style={{
          margin: `0 auto`,
          padding: `30px 0px`,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Header />
        <div
          style={{
            width: 845,
            backgroundColor: "rgba(255,255,255,0.9)",
            padding: `20px 10px`,
            color: "#000",
          }}
        >
          <main>{children}</main>
        </div>
      </div>
    </BackgroundImage>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

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
import LanguageSelector from "./LanguageSelector";

import styles from "./Layout.module.css";
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

  let currentLanguage;
  let urlContainsLang = false;
  let path;

  if (typeof window !== "undefined") {
    const { pathname } = window.location;

    const language = pathname.slice(0, 3);
    path = pathname.slice(3, pathname.length);
    console.log(pathname);

    // Get lang from url or from localStorage

    if (language === "/en" || language === "/de") {
      localStorage.setItem("language", language);
      currentLanguage = language;
      urlContainsLang = true;
    } else {
      currentLanguage = localStorage.getItem("language") ?? "/en";
    }
  }

  return (
    <BackgroundImage
      style={{
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        minWidth: 950,
        minHeight: 600,
        height: "100%",
      }}
      fluid={bgImage.childImageSharp.fluid}
    >
      <div className={styles.container}>
        <Header langUrl={currentLanguage} />
        <div className={styles.mainBody}>
          <div className={styles.border} />
          <div className={styles.mainContainer}>
            <main>{children}</main>
          </div>
          <div className={styles.border} />
          <LanguageSelector
            langUrl={currentLanguage}
            path={path}
            urlContainsLang={urlContainsLang}
          />
        </div>
      </div>
    </BackgroundImage>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

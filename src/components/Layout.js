/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import BackgroundImage from "gatsby-background-image";

import Header from "./Header";
import LanguageSelector from "./LanguageSelector";

import styles from "./Layout.module.css";
import "../all.css";

const Layout = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(null);
  const [path, setPath] = useState(null);
  const [urlContainsLang, setUrlContainsLang] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const { pathname } = window.location;

      const language = pathname.slice(1, 3);
      setPath(pathname.slice(3, pathname.length));

      // Get lang from url or from localStorage

      if (language === "en" || language === "de") {
        localStorage.setItem("language", language);
        setCurrentLanguage(language);
        setUrlContainsLang(true);
      } else {
        setCurrentLanguage(localStorage.getItem("language") ?? "en");
        setUrlContainsLang(false);
      }
    }
  }, []);

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
    <div className={styles.layout}>
      <BackgroundImage
        style={{
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "top center",
          backgroundSize: "cover",
          height: "100%",
        }}
        fluid={bgImage.childImageSharp.fluid}
      >
        <div className={styles.container}>
          <Header currentLanguage={currentLanguage} />
          <div className={styles.mainBody}>
            <div className={styles.border} />
            <div className={styles.mainContainer}>
              <main>{children}</main>
            </div>
            <div className={styles.border} />
            <LanguageSelector
              currentLanguage={currentLanguage}
              path={path}
              urlContainsLang={urlContainsLang}
            />
          </div>
        </div>
      </BackgroundImage>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

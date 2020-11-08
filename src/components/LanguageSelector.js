import React from "react";

import { navigate, useStaticQuery, graphql } from "gatsby";

import Img from "gatsby-image";

import classNames from "classnames";

import styles from "./LanguageSelector.module.css";

const LanguageSelector = ({ langUrl, path, urlContainsLang }) => {
  const { iconDe, iconEn } = useStaticQuery(graphql`
    query {
      iconDe: file(relativePath: { eq: "icon-de.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      iconEn: file(relativePath: { eq: "icon-en.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const handleClick = (lang) => {
    if (langUrl === lang) {
      return null;
    }

    if (urlContainsLang) {
      navigate(lang + path);
    }
  };

  return (
    <div
      className={classNames(styles.languageSelector, {
        [styles.disabled]: !urlContainsLang,
      })}
    >
      <div
        className={classNames(styles.imageContainer, {
          [styles.active]: langUrl === "/de" && urlContainsLang,
        })}
        onClick={() => handleClick("/de")}
      >
        <Img fluid={iconDe.childImageSharp.fluid} className={styles.img} />
      </div>
      <div
        className={classNames(styles.imageContainer, {
          [styles.active]: langUrl === "/en" && urlContainsLang,
        })}
        onClick={() => handleClick("/en")}
      >
        <Img fluid={iconEn.childImageSharp.fluid} className={styles.img} />
      </div>
    </div>
  );
};

export default LanguageSelector;

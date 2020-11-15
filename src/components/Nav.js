import React from "react";
import PropTypes from "prop-types";

import { Link } from "gatsby";

import styles from "./Nav.module.css";

const Nav = ({ currentLanguage }) => {
  const navNames =
    currentLanguage === "de"
      ? {
          home: "Home",
          blog: "Blog",
          courses: "Kurse",
          fees: "Preis",
          team: "Team",
          contact: "Kontakt",
        }
      : {
          home: "Home",
          blog: "Blog",
          courses: "Courses",
          fees: "Fees",
          team: "Team",
          contact: "Contact",
        };

  const languageUrl = "/" + currentLanguage;

  return (
    <nav className={styles.nav}>
      <Link activeClassName={styles.active} to={languageUrl + "/"}>
        {navNames.home}
      </Link>
      <Link activeClassName={styles.active} to={"/blog"}>
        {navNames.blog}
      </Link>
      <Link activeClassName={styles.active} to={languageUrl + "/courses"}>
        {navNames.courses}
      </Link>
      <Link activeClassName={styles.active} to={languageUrl + "/team"}>
        {navNames.team}
      </Link>
      <Link activeClassName={styles.active} to={languageUrl + "/fees"}>
        {navNames.fees}
      </Link>
      <Link activeClassName={styles.active} to={languageUrl + "/contact"}>
        {navNames.contact}
      </Link>
    </nav>
  );
};

Nav.defaulProps = {
  currentLanguage: null,
};

Nav.propTypes = {
  currentLanguage: PropTypes.string,
};

export default Nav;

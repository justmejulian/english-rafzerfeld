import { Link } from "gatsby";

import React from "react";

import styles from "./Nav.module.css";

const Nav = () => {
  const { pathname } = window.location;

  const language = pathname.slice(0, 3);

  // Get lang from url or from localStorage
  let langUrl;
  if (language === "/en" || language === "/de") {
    localStorage.setItem("language", language);
    langUrl = language;
  } else {
    langUrl = localStorage.getItem("language") ?? "/en";
  }

  return (
    <nav className={styles.nav}>
      <Link activeClassName={styles.active} to={langUrl + "/"}>
        Home
      </Link>
      <Link activeClassName={styles.active} to={"/blog"}>
        Blog
      </Link>
      <Link activeClassName={styles.active} to={langUrl + "/courses"}>
        Courses
      </Link>
      <Link activeClassName={styles.active} to={langUrl + "/team"}>
        Team
      </Link>
      <Link activeClassName={styles.active} to={langUrl + "/fees"}>
        Fees
      </Link>
      <Link activeClassName={styles.active} to={langUrl + "/contact"}>
        Contact
      </Link>
    </nav>
  );
};

export default Nav;

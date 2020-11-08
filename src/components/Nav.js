import React from "react";
import PropTypes from "prop-types";

import { Link } from "gatsby";

import styles from "./Nav.module.css";

const Nav = ({ langUrl }) => (
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

Nav.defaulProps = {
  langUrl: null,
};

Nav.propTypes = {
  langUrl: PropTypes.string,
};

export default Nav;

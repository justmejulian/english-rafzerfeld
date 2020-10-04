import { Link } from "gatsby";

import React from "react";

import styles from "./Nav.module.css";

const Nav = () => (
  <nav className={styles.nav}>
    <Link activeClassName={styles.active} to='/'>
      Home
    </Link>
    <Link activeClassName={styles.active} to='/blog'>
      Blog
    </Link>
    <Link activeClassName={styles.active} to='/courses'>
      Courses
    </Link>
    <Link activeClassName={styles.active} to='/team'>
      Team
    </Link>
    <Link activeClassName={styles.active} to='/fees'>
      Fees
    </Link>
    <Link activeClassName={styles.active} to='/contact'>
      Contact
    </Link>
  </nav>
);

export default Nav;

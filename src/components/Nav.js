import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Nav = () => (
  <nav
    style={{
      fontSize: 28,
      width: 400,
      color: "white",
      fontSize: 20,
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <Link to='/'>Home</Link>
    <Link to='/blog'>Blog</Link>
    <Link to='/courses'>Courses</Link>
    <Link to='/team'>Team</Link>
    <Link to='/fees'>Fees</Link>
    <Link to='/contact'>Contact</Link>
  </nav>
);

Nav.propTypes = {};

Nav.defaultProps = {};

export default Nav;

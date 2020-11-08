import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

import styles from "./fees-page.module.css";

export const FeesPageTemplate = ({ title, groupLessons, privateLessons }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className={styles.name}>Group courses (4 to 8 participants)</div>
      <div className={styles.row}>
        <div className={styles.col} />
        <div className={styles.col}>Normal rate per Semester</div>
        <div className={styles.col}>Reduced rate per Semester</div>
      </div>
      {groupLessons.map((lesson) => (
        <div className={styles.row} key={lesson.name}>
          <div className={styles.col}>{lesson.name}</div>
          <div className={styles.col}>{lesson.normalRateSemester}</div>
          <div className={styles.col}>{lesson.reducedRateSemester}</div>
        </div>
      ))}

      <ul className={styles.list}>
        <li>All fees are per lesson and per person.</li>
        <li>
          Semester length February to July and August to January, excluding
          school holidays.
        </li>
        <li>You can join a group during the semester.</li>
        <li>Fees are reduced for late entry.</li>
        <li>Reduced rates for seniors, students and couples on request.</li>
      </ul>

      <div className={styles.name}>Private courses</div>
      <div className={styles.row}>
        <div className={styles.col} />
        <div className={styles.col}>1 person</div>
        <div className={styles.col}>2 persons</div>
        <div className={styles.col}>3 persons</div>
      </div>
      {privateLessons.map((lesson) => (
        <div className={styles.row} key={lesson.name}>
          <div className={styles.col}>{lesson.name}</div>
          <div className={styles.col}>{lesson.one}</div>
          <div className={styles.col}>{lesson.two}</div>
          <div className={styles.col}>{lesson.three}</div>
        </div>
      ))}

      <ul className={styles.list}>
        <li>All fees are per lesson and per person.</li>
        <li>Private lessons can be scheduled at flexible times to suit you.</li>
        <li>You pay only for the number of lessons booked.</li>
        <li>Reduced rates for seniors, students and couples on request.</li>
      </ul>
    </div>
  );
};

FeesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  groupLessons: PropTypes.object.isRequired,
  privateLessons: PropTypes.object.isRequired,
};

const FeesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <FeesPageTemplate {...frontmatter} />
    </Layout>
  );
};

FeesPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FeesPage;

export const feesPageQuery = graphql`
  query FeesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        groupLessons {
          name
          normalRateSemester
          reducedRateSemester
        }
        privateLessons {
          name
          one
          two
          three
        }
      }
    }
  }
`;

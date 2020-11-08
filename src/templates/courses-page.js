import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

import styles from "./courses-page.module.css";

export const CoursesPageTemplate = ({ title, days }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p className={styles.description}>
        One to one courses and further group courses can be arranged.
      </p>
      <div className={styles.table}>
        {days.map((day, index) => (
          <React.Fragment key={day.name}>
            <div className={styles.row}>
              <div className={styles.day}>{day.name}</div>
              {/* Only show level in fists header */}
              {index === 0 && <div className={styles.level}>*CEF level</div>}
            </div>
            {day.courses.map((cours) => (
              <div className={styles.row} key={cours.name}>
                <div className={styles.time}>{cours.name}</div>
                <div>{cours.level}</div>
                <div className={styles.level}>{cours.cefLevel}</div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

CoursesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  days: PropTypes.array.isRequired,
};

const CoursesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <CoursesPageTemplate {...frontmatter} />
    </Layout>
  );
};

CoursesPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CoursesPage;

export const coursesPageQuery = graphql`
  query CoursesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        days {
          name
          courses {
            name
            level
            cefLevel
          }
        }
      }
    }
  }
`;

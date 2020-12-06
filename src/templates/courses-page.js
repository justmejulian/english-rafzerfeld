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
        <table>
          {days.map((day, index) => (
            <React.Fragment>
              <tr>
                <th>{day.name}</th>
                <th></th>
                <th></th>
                <th></th>
                <th>{index === 0 && "*CEF level"}</th>
              </tr>
              {day.courses.map((cours) => (
                <tr key={cours.name}>
                  <td className={styles.time}>{cours.name}</td>
                  <td>{cours.level}</td>
                  <td>{cours.cefLevel}</td>
                  <td>{cours.location}</td>
                  <td>{cours.level}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </table>
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
            location
          }
        }
      }
    }
  }
`;

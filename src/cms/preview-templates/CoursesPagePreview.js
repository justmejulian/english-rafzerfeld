import React from "react";
import PropTypes from "prop-types";
import { CoursesPageTemplate } from "../../templates/courses-page";

import "../../all.css";

const CoursesPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <CoursesPageTemplate
        title={data.title}
        days={data.days}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

CoursesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default CoursesPagePreview;

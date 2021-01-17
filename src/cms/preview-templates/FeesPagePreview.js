import React from "react";
import PropTypes from "prop-types";
import { FeesPageTemplate } from "../../templates/fees-page";

import "../../all.css";

const FeesPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <FeesPageTemplate
        title={data.title}
        groupLessons={data.groupLessons}
        privateLessons={data.privateLessons}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

FeesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default FeesPagePreview;

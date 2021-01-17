import React from "react";
import PropTypes from "prop-types";
import { TeamPageTemplate } from "../../templates/team-page";

import "../../all.css";

const TeamPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  console.log('data: ', data);

  if (data) {
    return (
      <TeamPageTemplate
        title={data.title}
        bev={data.bev}
        angela={data.angela}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

TeamPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default TeamPagePreview;

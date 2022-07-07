import React from "react";
import PropTypes from "prop-types";

export const PhotoPreview = ({ dataUri }) => {
  return (
    <div>
      <img style={{ width: "100%", height: "auto" }} src={dataUri} />
    </div>
  );
};

export default PhotoPreview;

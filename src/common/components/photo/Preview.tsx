import React from "react";
import PropTypes from "prop-types";
import styles from "./styles";

export const PhotoPreview = ({
  dataUri,
  tagNo,
  photoTakenAt,
}: {
  dataUri: string;
  tagNo: string;
  photoTakenAt: string;
}) => {
  return (
    <div>
      <img style={{ width: "100%", height: "auto" }} src={dataUri} />
      <div style={styles.photoPreviewTagNo}>Tag No# {tagNo}</div>
      <div style={styles.photoPreviewDt}>{photoTakenAt}</div>
    </div>
  );
};

export default PhotoPreview;

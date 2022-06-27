import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import styles from "./styles";

type FormValues = {
  patientName: string;
};

type FormProps = {
  formId: string;
  tagNo: string;
};

const CapturePhoto = (props: FormProps) => {
  const [startCamera, setStartCamera] = React.useState<boolean>(false);

  const toggleCamera = () => {
    setStartCamera((old) => !old);
  };

  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log("takePhoto");
  }

  if (startCamera) {
    return (
      <Camera
        onTakePhoto={(dataUri) => {
          handleTakePhoto(dataUri);
        }}
      />
    );
  }

  return (
    <div style={styles.container}>
      <div style={{ textAlign: "center" }}>
        <Button variant="contained" onClick={toggleCamera}>
          take photo
        </Button>
      </div>
    </div>
  );
};

export default CapturePhoto;

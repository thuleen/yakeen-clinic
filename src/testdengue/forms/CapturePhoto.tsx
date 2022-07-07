import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Camera, { FACING_MODES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import styles from "./styles";
import PhotoPreview from "../../common/components/photo/Preview";
import { setSamplePhotoDataUri } from "../redux-saga/actions";

type FormValues = {
  patientName: string;
};

type FormProps = {
  formId: string;
  tagNo: string;
};

const CapturePhoto = (props: FormProps) => {
  const [startCamera, setStartCamera] = React.useState<boolean>(false);
  // const [dataUri, setDataUri] = React.useState<string | null>(null);

  const { selectSmplPhoto } = useSelector((state: DengueState) => state.dengue);
  const dispatch = useDispatch();
  const setDataUri = (payload: any) => dispatch(setSamplePhotoDataUri(payload));

  const toggleCamera = () => {
    setStartCamera((old) => !old);
  };

  function handleTakePhoto(dataUri: string) {
    setDataUri({ tagNo: props.tagNo, dataUri: dataUri });
  }

  if (selectSmplPhoto) {
    return <PhotoPreview dataUri={selectSmplPhoto} />;
  }

  if (startCamera) {
    return (
      <Camera
        idealFacingMode={FACING_MODES.ENVIRONMENT}
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

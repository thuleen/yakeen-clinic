import React from "react";
import { useForm, Controller } from "react-hook-form";
import Alert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Camera, { FACING_MODES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import styles from "./styles";
import PhotoPreview from "../../common/components/photo/Preview";
import { setSamplePhotoDataUri } from "../redux-saga/actions";
import { DengueState } from "../../redux-saga/store";
import { DengueSample } from "../redux-saga/payload-type";
import { mysqlDateFormatter } from "../../utils/datetime-formatter";

type FormValues = {
  patientName: string;
};

type FormProps = {
  formId: string;
};

const CapturePhoto = (props: FormProps) => {
  const [startCamera, setStartCamera] = React.useState<boolean>(false);
  const [localDataUri, setLocalDataUri] = React.useState<string | null>(null);
  const [photoTakenAt, setPhotoTakenAt] = React.useState<string>(
    mysqlDateFormatter(new Date())
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({});

  const { selectSmplPhoto, activeSample } = useSelector(
    (state: DengueState) => state.dengue
  );
  const { tagNo } = activeSample;
  const dispatch = useDispatch();
  const setDataUri = (payload: any) => dispatch(setSamplePhotoDataUri(payload));

  const toggleCamera = () => {
    setStartCamera((old) => !old);
  };

  const onSubmit = handleSubmit((data: any) => {
    setDataUri({
      tagNo: tagNo,
      dataUri: localDataUri,
      photoTakenAt: photoTakenAt,
    });
  });

  function handleTakePhoto(dataUri: string) {
    setLocalDataUri(dataUri);
    setPhotoTakenAt(mysqlDateFormatter(new Date()));
  }

  if (localDataUri) {
    return (
      <div>
        <PhotoPreview
          dataUri={localDataUri}
          tagNo={tagNo}
          photoTakenAt={photoTakenAt}
        />
        <div style={{ margin: "0.5rem", textAlign: "center" }}>
          <Button variant="outlined" onClick={() => setLocalDataUri(null)}>
            retake
          </Button>
        </div>
        <form id={props.formId} onSubmit={onSubmit}></form>
      </div>
    );
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
      <div style={{ marginBottom: "1rem" }}>
        <Alert icon={false}>
          Take a photo of the test kit clearly showing results (at 20 mins mark)
          with the written tag no.
        </Alert>
      </div>
      <Button onClick={toggleCamera} variant="contained">
        start camera
      </Button>
      <div style={{ height: "290px" }} />
    </div>
  );
};

export default CapturePhoto;

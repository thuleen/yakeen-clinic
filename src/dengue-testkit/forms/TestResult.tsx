import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import RedoIcon from "@mui/icons-material/Redo";
import Button from "@mui/material/Button";
import styles from "./styles";
import Testkit from "./Testkit";
import Info from "../../common/components/alert/Info";
import PreviewDlg from "../../common/components/photo/PreviewDlg";
import { DengueState } from "../../redux-saga/store";
import { DengueSample } from "../redux-saga/payload-type";
import { nextStep } from "../redux-saga/actions";

type FormProps = {
  formId: string;
};

const TestResult = (props: FormProps) => {
  const { formId } = props;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { selectSmplPhoto, activeSample } = useSelector(
    (state: DengueState) => state.dengue
  );
  const { tagNo } = activeSample;
  const [openPreview, setOpenPreview] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const next = (sample: DengueSample) => dispatch(nextStep(sample));

  const onSubmit = () => {
    next(activeSample);
  };

  const togglePreview = () => {
    setOpenPreview((old) => !old);
  };

  return (
    <div style={styles.formContainer}>
      <PreviewDlg
        open={openPreview}
        handleClose={togglePreview}
        photoDataUri={selectSmplPhoto}
      />
      <Testkit tagNo={tagNo} />
      <Info sample={activeSample} />
      <div style={{ display: "flex", flexDirection: "row", marginTop: "1rem" }}>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<InsertPhotoIcon />}
          onClick={togglePreview}
        >
          evidence {tagNo}
        </Button>
      </div>
      <form id={formId} onSubmit={handleSubmit(onSubmit)}>
        <input hidden />
      </form>
    </div>
  );
};

export default TestResult;

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
import { nextStep } from "../redux-saga/actions";

type FormProps = {
  formId: string;
  tagNo: string;
};

const TestResult = (props: FormProps) => {
  const { tagNo, formId } = props;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { samples, selectSmplPhoto } = useSelector(
    (state: DengueState) => state.dengue
  );
  const [openPreview, setOpenPreview] = React.useState<boolean>(false);

  const dispatch = useDispatch();
  const next = () => dispatch(nextStep());

  const onSubmit = () => {
    next();
  };

  const togglePreview = () => {
    setOpenPreview((old) => !old);
  };

  const sample = samples.filter((s) => s.tagNo === tagNo);

  return (
    <div style={styles.formContainer}>
      <PreviewDlg
        open={openPreview}
        handleClose={togglePreview}
        photoDataUri={selectSmplPhoto}
      />
      <Testkit tagNo={tagNo} />
      <Info sample={sample[0]} />
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

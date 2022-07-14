import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import RedoIcon from "@mui/icons-material/Redo";
import Button from "@mui/material/Button";
import styles from "./styles";
import Testkit from "./Testkit";
import Info from "../../common/components/alert/Info";
import PreviewDlg from "../../common/components/photo/PreviewDlg";
import { DengueState } from "../../redux-saga/store";
import { DengueSample } from "../redux-saga/payload-type";
import { nextStep } from "../../app/redux-saga/actions";
import ConfirmSubmitDlg from "./ConfirmSubmitDlg";

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
  const [openConfDlg, setOpenConfDlg] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const next = (sample: DengueSample) => dispatch(nextStep(sample));

  const onConfirm = () => {
    // next(activeSample);
    setOpenConfDlg(true);
  };

  const onSubmit = () => {
    setOpenConfDlg(false);
    next(activeSample);
  };

  const togglePreview = () => {
    setOpenPreview((old) => !old);
  };

  return (
    <div style={styles.formContainer}>
      <ConfirmSubmitDlg
        open={openConfDlg}
        handleClose={() => setOpenConfDlg((old) => !old)}
        handleSubmit={onSubmit}
      />
      <PreviewDlg
        open={openPreview}
        handleClose={togglePreview}
        photoDataUri={selectSmplPhoto}
      />
      <Testkit tagNo={tagNo} togglePreview={togglePreview} />
      <Info sample={activeSample} />
      <form id={formId} onSubmit={handleSubmit(onConfirm)}>
        <input hidden />
      </form>
    </div>
  );
};

export default TestResult;

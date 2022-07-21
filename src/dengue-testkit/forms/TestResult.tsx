import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import RedoIcon from "@mui/icons-material/Redo";
import Button from "@mui/material/Button";
import styles from "./styles";
import Testkit from "./Testkit";
import Info from "../../common/components/alert/Info";
import PreviewDlg from "../../common/components/photo/PreviewDlg";
import { DengueState } from "../../store";
import { DengueSample } from "../redux-saga/payload-type";
import { nextStep } from "../../redux-saga/actions";
import { interpretTest } from "../redux-saga/actions";
import ConfirmSubmitDlg from "./ConfirmSubmitDlg";
import { Indicator, IndicatorValues } from "./Testkit";

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
  const { activeSample } = useSelector((state: DengueState) => state.dengue);
  const { tagNo, photoTakenAt } = activeSample;
  const [openPreview, setOpenPreview] = React.useState<boolean>(false);
  const [openConfDlg, setOpenConfDlg] = React.useState<boolean>(false);
  const dispatch = useDispatch();
  const next = (sample: DengueSample) => dispatch(nextStep(sample));
  const interpret = (payload: any) => dispatch(interpretTest(payload));

  const [indicators, setIndicators] = useState<IndicatorValues>({
    c: activeSample.c,
    igM: activeSample.igM,
    igG: activeSample.igG,
    cC: activeSample.cC,
    ns1Ag: activeSample.ns1Ag,
  });

  const onConfirm = () => {
    toggleInterpret();
    setOpenConfDlg(true);
  };

  const onSubmit = () => {
    setOpenConfDlg(false);
    next(activeSample);
  };

  const togglePreview = () => {
    setOpenPreview((old) => !old);
  };

  const toggleInterpret = () => {
    interpret({ ...indicators, tagNo: activeSample.tagNo });
  };

  const toggle = (i: Indicator) => {
    if (i === Indicator.C) setIndicators((old) => ({ ...old, c: !old.c }));
    if (i === Indicator.IGG)
      setIndicators((old) => ({ ...old, igG: !old.igG }));
    if (i === Indicator.IGM)
      setIndicators((old) => ({ ...old, igM: !old.igM }));
    if (i === Indicator.CC) setIndicators((old) => ({ ...old, cC: !old.cC }));
    if (i === Indicator.NS1AG)
      setIndicators((old) => ({ ...old, ns1Ag: !old.ns1Ag }));
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
        photoDataUri={activeSample.photoUri}
        tagNo={tagNo}
        photoTakenAt={photoTakenAt}
      />
      <Testkit
        toggle={toggle}
        toggleInterpret={toggleInterpret}
        togglePreview={togglePreview}
        sample={activeSample}
        indicators={indicators}
      />
      <Info sample={activeSample} />
      <form id={formId} onSubmit={handleSubmit(onConfirm)}>
        <input hidden />
      </form>
    </div>
  );
};

export default TestResult;

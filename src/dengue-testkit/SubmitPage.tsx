import React from "react";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MenuAppBar from "../appbar";
import SubmissionSteps from "./forms/SubmissionSteps";
import TxnDetails from "./TxnDetails";
import { createSample, restartStep } from "./redux-saga/actions";
import { logout } from "../app/redux-saga/actions";
import { DengueState } from "../redux-saga/store";

type SubmitPageProps = {};

const SubmitPage = (props: SubmitPageProps) => {
  const navigate = useNavigate();
  const { uriTagNo, pending } = useParams();
  const { formActiveStep, samples } = useSelector(
    (state: DengueState) => state.dengue
  );
  const dispatch = useDispatch();
  const createNewSample = () => dispatch(createSample());
  const handleLogout = () => dispatch(logout());
  const restart = () => dispatch(restartStep());

  const handleNew = () => {
    navigate("/");
    restart();
    createNewSample();
  };

  const handleBack = () => {
    // if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  if (uriTagNo) {
    return (
      <>
        <MenuAppBar handleNew={handleNew} handleLogout={handleLogout} />
        <TxnDetails tagNo={uriTagNo} pending={pending ? pending : "false"} />
      </>
    );
  }

  if (samples.length > 0) {
    const s = samples[samples.length - 1];
    return (
      <>
        <MenuAppBar handleNew={handleNew} handleLogout={handleLogout} />
        <SubmissionSteps
          tagNo={s.tagNo}
          handleBack={handleBack}
          activeStep={formActiveStep}
        />
      </>
    );
  }

  return (
    <>
      <MenuAppBar handleNew={handleNew} handleLogout={handleLogout} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <Button size="large" variant="contained" onClick={createNewSample}>
          start
        </Button>
      </div>
    </>
  );
};

export default SubmitPage;

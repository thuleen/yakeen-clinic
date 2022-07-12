import React from "react";
import Button from "@mui/material/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MenuBar from "../common/components/menubar";
import SampleDetails from "../common/components/samples/Details";
import {
  createSample,
  restartStep,
} from "../dengue-testkit/redux-saga/actions";
import { logout } from "../app/redux-saga/actions";
// import { DengueState } from "../redux-saga/store";

type StartPageProps = {};

const StartPage = (props: StartPageProps) => {
  const navigate = useNavigate();
  const { uriTagNo, pending } = useParams();
  const dispatch = useDispatch();
  const createNewSample = () => dispatch(createSample());
  const handleLogout = () => dispatch(logout());

  const handleNew = () => {
    // restart();
    createNewSample();
    navigate("/dengue");
  };

  const handleBack = () => {
    // if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  return (
    <>
      <MenuBar handleNew={handleNew} handleLogout={handleLogout} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <Button size="large" variant="contained" onClick={handleNew}>
          dengue test kit
        </Button>
        (more test kits in the future)
      </div>
    </>
  );
};

export default StartPage;

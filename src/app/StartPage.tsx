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
  // const { formActiveStep, samples } = useSelector(
  //   (state: DengueState) => state.dengue
  // );
  const dispatch = useDispatch();
  const createNewSample = () => dispatch(createSample());
  const handleLogout = () => dispatch(logout());
  // const restart = () => dispatch(restartStep());

  const handleCreateNew = () => {
    // restart();
    createNewSample();
    navigate("/dengue");
  };

  const handleBack = () => {
    // if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  // if (uriTagNo) {
  //   return (
  //     <>
  //       <MenuBar handleNew={handleNew} handleLogout={handleLogout} />
  //       <SampleDetails tagNo={uriTagNo} pending={pending ? pending : "false"} />
  //     </>
  //   );
  // }

  return (
    <>
      <MenuBar handleNew={handleCreateNew} handleLogout={handleLogout} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <Button size="large" variant="contained" onClick={handleCreateNew}>
          dengue test kit
        </Button>
        (more test kits in the future)
      </div>
    </>
  );
};

export default StartPage;

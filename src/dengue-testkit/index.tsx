import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Menubar from "../common/components/menubar";
import { DengueState } from "../redux-saga/store";
import SubmissionSteps from "./forms/SubmissionSteps";
import { logout } from "../app/redux-saga/actions";

const Dengue = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());

  const handleNew = () => {
    navigate("/");
  };
  const { formActiveStep, samples } = useSelector(
    (state: DengueState) => state.dengue
  );

  if (samples.length === 0) {
    return (
      <div>
        <Menubar handleNew={handleNew} handleLogout={handleLogout} />
        <div>Loading...</div>
      </div>
    );
  }

  const sample = samples[samples.length - 1];
  return (
    <div>
      <Menubar handleNew={handleNew} handleLogout={handleLogout} />
      <SubmissionSteps activeStep={formActiveStep} tagNo={sample.tagNo} />
    </div>
  );
};
export default Dengue;

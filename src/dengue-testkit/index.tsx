import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DengueState } from "../redux-saga/store";
import { logout } from "../app/redux-saga/actions";
import Menubar from "../common/components/menubar";
import StepsForm from "./forms/StepsForm";
import { DengueSample } from "./redux-saga/payload-type";

type DengueFormProps = {
  sample?: DengueSample;
};

const DengueForm = (props: DengueFormProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logout());

  const handleNew = () => {
    navigate("/");
  };

  const { formActiveStep, samples } = useSelector(
    (state: DengueState) => state.dengue
  );

  let activeStep = formActiveStep;

  let selSample = samples[samples.length - 1];
  if (props.sample) {
    selSample = props.sample;
    activeStep = props.sample.lastActiveStep;
  }

  if (!selSample) {
    return (
      <div>
        <Menubar handleNew={handleNew} handleLogout={handleLogout} />
        <div>No sample created</div>
      </div>
    );
  }

  return (
    <div>
      <Menubar handleNew={handleNew} handleLogout={handleLogout} />
      <StepsForm activeStep={activeStep} sample={selSample} />
    </div>
  );
};
export default DengueForm;

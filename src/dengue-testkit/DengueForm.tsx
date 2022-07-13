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
  const { activeSample } = useSelector((state: DengueState) => state.dengue);

  if (!activeSample) {
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
      <StepsForm sample={activeSample} />
    </div>
  );
};
export default DengueForm;

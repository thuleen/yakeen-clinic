import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Menubar from "../menubar";
import { logout } from "../../../app/redux-saga/actions";
// dengue
import DengueForm from "../../../dengue-testkit/DengueForm";
import { DengueState } from "../../../redux-saga/store";

const EditForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { activeSample } = useSelector((state: DengueState) => state.dengue);
  const handleLogout = () => dispatch(logout());

  const handleNew = () => {
    navigate("/");
  };

  if (!activeSample) {
    return (
      <>
        <Menubar handleNew={handleNew} handleLogout={handleLogout} />
        No sample found.
      </>
    );
  }

  // if(sample.testType==="Dengue/NS1")
  return <DengueForm sample={activeSample} />;
};
export default EditForm;

import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Menubar from "../menubar";
import { logout } from "../../../app/redux-saga/actions";
// dengue
import DengueForm from "../../../dengue-testkit";
import { DengueState } from "../../../redux-saga/store";

const EditForm = () => {
  const { tagNo } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { samples } = useSelector((state: DengueState) => state.dengue);
  const handleLogout = () => dispatch(logout());

  const handleNew = () => {
    navigate("/");
  };

  const sample = samples.filter((s) => s.tagNo === tagNo)[0];
  if (!sample) {
    return (
      <>
        <Menubar handleNew={handleNew} handleLogout={handleLogout} />
        No sample found.
      </>
    );
  }

  // if(sample.testType==="Dengue/NS1")
  return <DengueForm sample={sample} />;
};
export default EditForm;

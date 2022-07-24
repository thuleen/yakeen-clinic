import { useDispatch, useSelector } from "react-redux";
// dengue
import DenguePage from "../../../dengue-testkit/DenguePage";
import { DengueState } from "../../../store";

const EditPage = () => {
  const dispatch = useDispatch();
  const { activeSample } = useSelector((state: DengueState) => state.dengue);

  if (!activeSample) {
    return (
      <>
        No sample found.
      </>
    );
  }

  // if(sample.testType==="Dengue/NS1")
  return <DenguePage sample={activeSample} />;
};
export default EditPage;

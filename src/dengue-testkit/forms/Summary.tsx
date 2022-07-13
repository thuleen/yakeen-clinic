import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import styles from "./styles";
import { DengueState } from "../../redux-saga/store";
import PatientDetails from "../../common/components/patient/List";
import Info from "../../common/components/alert/Info";
import { DengueSample } from "../redux-saga/payload-type";

type TagNoProps = {
  formId: string;
};

const Summary = (props: TagNoProps) => {
  const { formId } = props;
  const { activeSample } = useSelector((state: DengueState) => state.dengue);
  const { name, mobileNo, socialId, idType } = activeSample;

  return (
    <div style={styles.container}>
      <PatientDetails
        name={name ? name : "-"}
        socialId={socialId}
        mobileNo={mobileNo}
        idType={idType}
      />
      <Info textOnly sample={activeSample} />
    </div>
  );
};

export default Summary;

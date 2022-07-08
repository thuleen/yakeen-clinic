import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import styles from "./styles";
import { DengueState } from "../../store";
import PatientDetails from "../../common/components/patient/List";
import Info from "../../common/components/alert/Info";

type TagNoProps = {
  tagNo: string;
};

const Summary = (props: TagNoProps) => {
  const { tagNo } = props;
  const { samples } = useSelector((state: DengueState) => state.dengue);
  const sample = samples.filter((s) => s.tagNo === tagNo)[0];
  return (
    <div style={styles.container}>
      <PatientDetails
        name={sample.name}
        socialId={sample.socialId}
        mobileNo={sample.mobileNo}
        idType={sample.idType}
      />
      <Info textOnly sample={sample} />
    </div>
  );
};

export default Summary;

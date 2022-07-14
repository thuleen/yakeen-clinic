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
  const { name, mobileNo, socialId, idType, tagNo, photoTakenAt } =
    activeSample;

  return (
    <div style={styles.summaryContainer}>
      <div style={{ margin: "0rem", marginBottom: "0.5rem" }}>
        <Typography variant="caption" color="primary">
          Patient name:
        </Typography>
        <Typography variant="body1">{activeSample.name}</Typography>
        <Typography variant="caption" color="primary">
          {activeSample.idType}
        </Typography>
        <Typography variant="body1">{activeSample.socialId}</Typography>
        <Typography variant="caption" color="primary">
          Tested on:
        </Typography>
        <Typography variant="body1">05 Apr 2022 09:45:12AM</Typography>
        <Typography variant="caption" color="primary">
          Test site:
        </Typography>
        <Typography variant="body1">
          Klinic 1MDB, Pekan Rasuah, Pahang.
        </Typography>
        <Typography variant="caption" color="primary">
          Test kit:
        </Typography>
        <Typography variant="body1">
          Dengue Virus Antigen Rapid Test kit
        </Typography>
      </div>
      <Info textOnly sample={activeSample} />
      <div style={{ marginTop: "1rem" }}>
        <img
          style={{ width: "100%", height: "auto" }}
          src={activeSample.samplePhotoDataUri}
        />
      </div>
      <div style={styles.summaryPhotoTagNo}>Tag No#{tagNo}</div>
      <div style={styles.summaryPhotoTakenAt}>{photoTakenAt}</div>
    </div>
  );
};

export default Summary;

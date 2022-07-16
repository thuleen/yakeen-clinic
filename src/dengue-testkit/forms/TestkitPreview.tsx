import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import styles from "./styles";
import testKit from "../../asset/img/dengue-testkit-diagram.jpg";
import { DengueState } from "../../redux-saga/store";
import { DengueSample } from "../redux-saga/payload-type";
import Info from "../../common/components/alert/Info";

interface TestkitPreviewProps {
  sample: DengueSample;
}

const TestkitPreview = (props: TestkitPreviewProps) => {
  const { sample } = props;
  if (!sample) {
    return <div>Error</div>;
  }
  const {
    c,
    cC,
    igG,
    igM,
    ns1Ag,
    name,
    idType,
    mobileNo,
    socialId,
    tagNo,
    photoTakenAt,
  } = sample;
  return (
    <div style={{ margin: "1rem" }}>
      <Alert icon={false}>Please confirm the followings before submit</Alert>
      <div
        style={{
          marginTop: "1rem",
          marginBottom: "0.5rem",
        }}
      >
        <div style={c ? styles.previewC : styles.c_off} />
        <div style={igM ? styles.previewM : styles.m_off} />
        <div style={igG ? styles.previewG : styles.g_off} />
        <div style={cC ? styles.previewCc : styles.cC_off} />
        <div style={ns1Ag ? styles.previewT : styles.t_off} />
        <img src={testKit} style={styles.testKit} />
      </div>
      <div style={{ marginTop: "1rem" }}>
        <div style={styles.previewTagNo}>Tag# {tagNo}</div>
        <div style={styles.previewPhotoTakenAt}>{photoTakenAt}</div>
        <img
          style={{ width: "100%", height: "auto" }}
          src={sample.samplePhotoDataUri ? sample.samplePhotoDataUri : ""}
        />
      </div>
      <div style={{ marginTop: "1rem" }} />
      <Info sample={sample} />
      <div
        style={{ margin: "0.5rem", marginTop: "1rem", marginBottom: "3rem" }}
      >
        <Typography variant="caption" color="primary">
          Patient name:
        </Typography>
        <Typography variant="body1">{name}</Typography>
        <Typography variant="caption" color="primary">
          Mobile number
        </Typography>
        <Typography variant="body1">{mobileNo}</Typography>
        <Typography variant="caption" color="primary">
          {idType}
        </Typography>
        <Typography variant="body1">{socialId}</Typography>
      </div>
    </div>
  );
};
export default TestkitPreview;

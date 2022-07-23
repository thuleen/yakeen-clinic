import * as React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoneIcon from "@mui/icons-material/Done";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import Menubar from "../menubar";
import { DengueState } from "../../../store";
import { DengueSample } from "../../../dengue-testkit/redux-saga/payload-type";
import styles from "./styles";
import { formatFromMysqlDtString } from "../../../utils/datetime-formatter";
import {
  logout,
  selectSample,
  getSamples,
} from "../../../common/redux-saga/actions";

type ListProps = {};

type ItemProps = {
  pending: boolean;
  patientName: string;
  idType: string;
  socialId: string;
  tagNo: string;
  testType: string;
  mysqlDatetime: string;
  interpretation: string;
  toggleDetails: (tagNo: string, pending: boolean) => void;
};

const Item = ({
  testType,
  pending,
  patientName,
  idType,
  socialId,
  tagNo,
  interpretation,
  mysqlDatetime,
  toggleDetails,
}: ItemProps) => {
  return (
    <ListItem button onClick={() => toggleDetails(tagNo, pending)}>
      <div style={styles.listItem}>
        <div style={styles.listItemFirstCol}>
          <Typography variant="body1" style={styles.listItemPatientName}>
            {patientName ? patientName : "-"}
          </Typography>
          <Typography variant="body2" style={styles.listItemTestSocialId}>
            {idType} {socialId}
          </Typography>
          <Typography variant="body2" style={styles.listItemInterpret}>
            {interpretation}
          </Typography>
        </div>
        <div style={styles.listItemSecondCol}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {pending ? (
              <AccessTimeIcon
                fontSize="small"
                style={{
                  color: "#e1b12c",
                  marginTop: "3.4px",
                  marginRight: "0.3rem",
                }}
              />
            ) : (
              <DoneIcon
                fontSize="small"
                style={{
                  color: "#079992",
                  marginTop: "3.4px",
                  marginRight: "3px",
                }}
              />
            )}
            <Typography
              variant="body2"
              style={
                pending ? styles.listItemTagNoPending : styles.listItemTagNo
              }
            >
              {tagNo}
            </Typography>
          </div>
          <Typography variant="caption" color="primary">
            {testType}
          </Typography>
          <Typography variant="caption" style={styles.listItemTestType}>
            {mysqlDatetime}
          </Typography>
        </div>
      </div>
    </ListItem>
  );
};

export default function SampleList(props: ListProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { samples } = useSelector((state: DengueState) => state.dengue);
  const handleLogout = () => dispatch(logout());
  const handleSelect = (tagNo: any) => dispatch(selectSample(tagNo));
  const handleGetSamples = () => dispatch(getSamples());

  React.useEffect(() => {
    handleGetSamples();
  }, []);

  const handleNew = () => {
    navigate("/");
  };

  const toggleDetails = (tagNo: string) => {
    handleSelect(tagNo);
    navigate(`/edit/${tagNo}`);
  };

  if (samples.length === 0) {
    return (
      <>
        <Menubar handleNew={handleNew} handleLogout={handleLogout} />
        <div style={styles.container}>
          <Typography variant="body1">No sample</Typography>
        </div>
      </>
    );
  }

  let sampleList = samples.map((s: DengueSample, index: number) => {
    return (
      <div key={index}>
        <Item
          testType={s.testType}
          toggleDetails={() => toggleDetails(s.tagNo)}
          pending={s.pending}
          tagNo={s.tagNo}
          patientName={s.name ? s.name : "-"}
          idType={s.idType}
          socialId={s.socialId}
          mysqlDatetime={s.createdAt}
          interpretation={s.interpretation.length > 0 ? s.interpretation : "-"}
        />
        <Divider />
      </div>
    );
  });

  return (
    <>
      <Menubar handleNew={handleNew} handleLogout={handleLogout} />
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {sampleList}
      </List>
    </>
  );
}

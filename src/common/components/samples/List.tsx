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
import { DengueState } from "../../../redux-saga/store";
import {
  logout,
  selectSample,
  SelectSamplePayload,
} from "../../../app/redux-saga/actions";
import { DengueSample } from "../../../dengue-testkit/redux-saga/payload-type";
import styles from "./styles";
import { formatFromMysqlDtString } from "../../../utils/datetime-formatter";

const Pending = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <AccessTimeIcon
      fontSize="small"
      style={{ marginRight: "0.3rem", color: "#e1b12c" }}
    />
    <Typography variant="caption" color="primary">
      Pending
    </Typography>
  </div>
);

const Done = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <DoneIcon
      fontSize="small"
      color="primary"
      style={{ marginRight: "0.3rem" }}
    />
    <Typography variant="caption" color="primary">
      Done
    </Typography>
  </div>
);

type ListProps = {};

type ItemProps = {
  pending: boolean;
  patientName: string;
  idType: string;
  socialId: string;
  tagNo: string;
  testType: string;
  mysqlDatetime: string;
  toggleDetails: (tagNo: string, pending: boolean) => void;
};

const Item = ({
  testType,
  pending,
  patientName,
  idType,
  socialId,
  tagNo,
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
          <Typography variant="body2">
            {idType} {socialId}
          </Typography>
          {pending ? <Pending /> : <Done />}
        </div>
        <div style={styles.listItemSecondCol}>
          <Typography
            variant="body2"
            style={pending ? styles.listItemTagNoPending : styles.listItemTagNo}
          >
            {tagNo}
          </Typography>
          <Typography variant="caption" color="primary">
            {testType}
          </Typography>
          <Typography variant="caption" style={styles.listItemTestType}>
            {formatFromMysqlDtString(mysqlDatetime)}
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
          mysqlDatetime={s.createAt}
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

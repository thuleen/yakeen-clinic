import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import DeleteIcon from "@mui/icons-material/Delete";
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
import theme from "../../../theme";

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

import { AppState, DengueState } from "../../../store";
import { DengueSample } from "../../../dengue-testkit/redux-saga/payload-type";
import styles from "./styles";
import {
  logout,
  selectSample,
  getSamples,
  deleteSample,
} from "../../../common/redux-saga/actions";
import { formatUTC } from "../../../utils/datetime-formatter";

const LeadActionContent = () => (
  <div style={{ display: "flex", flexDirection: "column" }}>LA</div>
);

const DeleteActionContent = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      background: "#c23616",
      alignItems: "center",
    }}
  >
    <DeleteIcon style={{ color: "white" }} />
  </div>
);

const leadingActions = () => (
  <LeadingActions>
    <SwipeAction onClick={() => console.info("swipe action triggered")}>
      <LeadActionContent />
    </SwipeAction>
  </LeadingActions>
);

const trailingActions = (props: { handleDelete: () => void }) => (
  <TrailingActions>
    <SwipeAction destructive={false} onClick={props.handleDelete}>
      <DeleteActionContent />
    </SwipeAction>
  </TrailingActions>
);

type ListProps = {};

type ItemProps = {
  id?: number;
  pending: boolean;
  patientName: string;
  idType: string;
  socialId: string;
  tagNo: string;
  testType: string;
  mysqlDatetime: string;
  interpretation: string;
  toggleDetails: (tagNo: string, pending: boolean) => void;
  handleDelete: () => void;
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
  id,
  handleDelete,
}: ItemProps) => {
  return (
    <SwipeableListItem
      // leadingActions={leadingActions()}
      trailingActions={trailingActions({
        handleDelete: handleDelete,
      })}
      scrollStartThreshold={10}
      swipeStartThreshold={10}
      threshold={0.5}
    >
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
            onClick={() => toggleDetails(tagNo, pending)}
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
    </SwipeableListItem>
  );
};

export default function SamplesPage(props: ListProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pending, samples } = useSelector(
    (state: DengueState) => state.dengue
  );
  const { clinic } = useSelector((state: AppState) => state.app);
  const handleSelect = (tagNo: any) => dispatch(selectSample(tagNo));
  const handleGetSamples = () => dispatch(getSamples());
  const handleDelete = (id: number) => dispatch(deleteSample({ id: id }));

  React.useEffect(() => {
    handleGetSamples();
  }, []);

  const toggleDetails = (tagNo: string) => {
    handleSelect(tagNo);
    navigate(`/edit/${tagNo}`);
  };

  if (!pending && samples.length === 0) {
    return (
      <>
        <div style={styles.container}>
          <Typography variant="body1">No sample</Typography>
        </div>
      </>
    );
  }

  let sampleList = samples.map((s: DengueSample, index: number) => {
    let interpretation: string = "-";
    let res = s.result;
    if (res) {
      interpretation = JSON.parse(res).interpretation;
    }
    return (
      <div key={index} style={{ margin: "0.5rem" }}>
        <Item
          id={s.id}
          testType={s.testType}
          toggleDetails={() => toggleDetails(s.tagNo)}
          pending={s.pending}
          tagNo={s.tagNo}
          patientName={s.name ? s.name : "<Pending>"}
          idType={s.idType}
          socialId={s.socialId}
          mysqlDatetime={formatUTC(s.createdAt)}
          interpretation={interpretation}
          handleDelete={() => handleDelete(s.id ? s.id : -999)}
        />
        <Divider />
      </div>
    );
  });

  return (
    <>
      {pending ? <LinearProgress /> : null}
      <SwipeableList
        scrollStartThreshold={10}
        swipeStartThreshold={10}
        threshold={0.5}
      >
        {sampleList}
      </SwipeableList>
    </>
  );
}

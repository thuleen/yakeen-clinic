import * as React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import Menubar from "../menubar";
import { DengueState } from "../../../redux-saga/store";
import { logout } from "../../../app/redux-saga/actions";

type ListProps = {};

type ItemProps = {
  pending: boolean;
  patientName: string;
  tagNo: string;
  toggleDetails: (tagNo: string, pending: boolean) => void;
};

const Item = ({ pending, patientName, tagNo, toggleDetails }: ItemProps) => {
  return (
    <ListItem button onClick={() => toggleDetails(tagNo, pending)}>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          margin: "0rem",
        }}
      >
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="body2">
            {format(new Date(), "do LLL yyyy hh:mm:ssa")}
          </Typography>
          {!pending ? (
            <Typography variant="caption" style={{ color: "#16a085" }}>
              COMPLETED
            </Typography>
          ) : (
            <Typography variant="caption" color="error">
              PENDING
            </Typography>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
          }}
        >
          <Typography
            variant="body2"
            style={{ fontFamily: "Abel", fontWeight: 600 }}
          >
            {tagNo}
          </Typography>
          <Typography variant="caption">{patientName}</Typography>
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

  const handleNew = () => {
    // createNewSample();
  };

  const toggleDetails = (tagNo: string, pending: boolean) => {
    navigate(`/transaction/${tagNo}/${pending}`);
  };

  let sampleList = samples.map((s, index) => {
    return (
      <div key={index}>
        <Item
          toggleDetails={() => toggleDetails(s.tagNo, s.pending)}
          pending={s.pending}
          tagNo={s.tagNo}
          patientName={s.name}
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

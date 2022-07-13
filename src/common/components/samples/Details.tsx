import * as React from "react";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BiotechIcon from "@mui/icons-material/Biotech";
import EditIcon from "@mui/icons-material/Edit";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { QRCodeCanvas } from "qrcode.react";
import Menubar from "../menubar";
import { logout } from "../../../app/redux-saga/actions";
import styles from "./styles";
import { DengueState } from "../../../redux-saga/store";
import { Sample } from "../../constants/payload-type";

const SampleDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { activeSample } = useSelector((state: DengueState) => state.dengue);
  const handleLogout = () => dispatch(logout());
  const { tagNo, name, testType, pending } = activeSample;

  // for now assume it is dengue/ns1 test
  let result = "";
  if (!pending) {
    result = "Key in the correct results here!";
  }

  const handleNew = () => {
    navigate("/");
  };

  return (
    <>
      <Menubar handleNew={handleNew} handleLogout={handleLogout} />
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemAvatar>
            <LocalOfferIcon color="primary" />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography color="primary">Tag no#</Typography>}
            secondary={
              <Typography style={styles.detailsItemTagNo}>{tagNo}</Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <AccountCircleIcon color="primary" />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography color="primary">Patient name</Typography>}
            secondary={
              <Typography style={styles.detailsItemPatientName}>
                {name ? name : "-"}
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <BiotechIcon color="primary" />
          </ListItemAvatar>
          <ListItemText
            primary={<Typography color="primary">Test type</Typography>}
            secondary={
              <Typography style={styles.detailsItemTestType}>
                {testType}
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText
            primary={
              <Typography color="primary" style={{ fontSize: "1em" }}>
                Interpretation of results
              </Typography>
            }
            secondary={
              <Typography style={styles.detailsItemTestResult}>
                {pending ? "Pending" : result}
              </Typography>
            }
          />
        </ListItem>
      </List>
      <Divider />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={`/edit/${tagNo}`}
        >
          Resume...
        </Button>
      </div>
    </>
  );
};

export default SampleDetails;

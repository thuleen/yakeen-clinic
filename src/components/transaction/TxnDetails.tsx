import * as React from "react";
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
import { QRCodeCanvas } from "qrcode.react";

type TxnDetailsProps = {
  tagNo: string;
};

const TxnDetails = (props: TxnDetailsProps) => {
  const { tagNo } = props;

  return (
    <div style={{ width: "100%" }}>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemAvatar>
            <LocalOfferIcon color="primary" />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography color="primary" style={{ fontSize: "1em" }}>
                Tag no#
              </Typography>
            }
            secondary={
              <Typography style={{ fontFamily: "Abel", fontSize: "1.2em" }}>
                {tagNo}
              </Typography>
            }
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <AccountCircleIcon color="primary" />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography color="primary" style={{ fontSize: "1em" }}>
                Patient name
              </Typography>
            }
            secondary="TODO"
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <BiotechIcon color="primary" />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography color="primary" style={{ fontSize: "1em" }}>
                Diagnostic result
              </Typography>
            }
            secondary="TODO"
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemAvatar>
            <EditIcon color="primary" />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography color="primary" style={{ fontSize: "1em" }}>
                Notes
              </Typography>
            }
            secondary="TODO"
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
        <QRCodeCanvas size={286} value={tagNo} />
        <Divider style={{ height: "1rem" }} />
        <Typography variant="body1" color="primary">
          Share the code above with patient
        </Typography>
        <Typography variant="caption" color="error">
          TODO: Code is dummy! Does not do anything!
        </Typography>
      </div>
    </div>
  );
};

export default TxnDetails;

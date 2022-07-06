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
import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";

type TxnDetailsProps = {
  tagNo: string;
  pending: string;
};

const TxnDetails = (props: TxnDetailsProps) => {
  const { tagNo, pending } = props;
  const navigate = useNavigate();

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
                Tag no# {pending === "true" ? `(Pending...)` : null}
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
        {pending === "false" ? (
          <div onClick={() => navigate("/transactions")}>
            <QRCodeCanvas size={286} value={tagNo} />
            <Divider style={{ height: "1rem" }} />
            <Typography variant="body1" color="primary">
              Share the code above with patient
            </Typography>
            <Typography variant="caption" color="error">
              TODO: Code is dummy! Does not do anything!
            </Typography>
          </div>
        ) : (
          <>
            <Alert
              severity="warning"
              style={{ marginTop: "1rem", marginBottom: "1rem" }}
            >
              Pending...
            </Alert>
            <Button
              variant="outlined"
              onClick={() => navigate("/transactions")}
            >
              Test completed and submit
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default TxnDetails;

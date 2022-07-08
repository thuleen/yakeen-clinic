import * as React from "react";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import PrimaryText from "../patient/PrimaryText";
import SecondaryText from "../patient/SecondaryText";

const Chips = (props: any) => {
  const { igM, igG, ns1Ag } = props;
  return (
    <div>
      {igM ? (
        <Chip
          size="small"
          variant="outlined"
          label="IgM"
          icon={<AddCircleIcon style={{ color: "#ED4C67" }} />}
        />
      ) : (
        <Chip
          size="small"
          variant="outlined"
          label="IgM"
          icon={<RemoveCircleIcon />}
        />
      )}
      {igG ? (
        <Chip
          size="small"
          variant="outlined"
          label="IgG"
          icon={<AddCircleIcon style={{ color: "#ED4C67" }} />}
        />
      ) : (
        <Chip
          size="small"
          variant="outlined"
          label="IgG"
          icon={<RemoveCircleIcon />}
        />
      )}
      {ns1Ag ? (
        <Chip
          size="small"
          variant="outlined"
          label="NS1Ag"
          icon={<AddCircleIcon style={{ color: "#ED4C67" }} />}
        />
      ) : (
        <Chip
          size="small"
          variant="outlined"
          label="NS1Ag"
          icon={<RemoveCircleIcon />}
        />
      )}
    </div>
  );
};

const Info = (props: any) => {
  const { sample, textOnly } = props;
  if (!sample) {
    return (
      <Alert variant="filled" severity="warning" icon={false}>
        <Typography color="white" variant="body1">
          Click the bands on the test kit diagram above.
        </Typography>
      </Alert>
    );
  }
  return (
    <Alert variant="outlined" severity="success" icon={false}>
      <Typography color="primary" variant="body2" style={{ fontWeight: 600 }}>
        Interpretation:
      </Typography>
      <div>
        <Typography variant="body1">{sample.interpretation}</Typography>
      </div>
      {textOnly ? (
        <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
          <ListItem>
            <ListItemText
              primary={<PrimaryText label="IgG" />}
              secondary={
                <SecondaryText value={sample.igG ? "Positive" : "Negative"} />
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<PrimaryText label="IgM" />}
              secondary={
                <SecondaryText value={sample.igM ? "Positive" : "Negative"} />
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary={<PrimaryText label="NS1 Ag" />}
              secondary={
                <SecondaryText value={sample.ns1Ag ? "Positive" : "Negative"} />
              }
            />
          </ListItem>
        </List>
      ) : (
        <Chips igG={sample.igG} igM={sample.igM} ns1Ag={sample.ns1Ag} />
      )}
    </Alert>
  );
};
export default Info;

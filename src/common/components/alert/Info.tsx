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

  const { c, igG, igM, cC, ns1Ag, interpretation, result } = sample;
  let l_c = c;
  let l_igG = igG;
  let l_igM = igM;
  let l_cC = cC;
  let l_ns1Ag = ns1Ag;
  let l_intr = interpretation;

  if (result) {
    const r = JSON.parse(result);
    l_c = r.c;
    l_igG = r.igG;
    l_igM = r.igM;
    l_cC = r.cC;
    l_ns1Ag = r.ns1Ag;
    l_intr = r.interpretation;
  }

  return (
    <Alert variant="outlined" severity="success" icon={false}>
      <Typography color="primary" variant="body2" style={{ fontWeight: 600 }}>
        Interpretation:
      </Typography>
      <div>
        <Typography variant="body1">{l_intr}</Typography>
      </div>
      {textOnly ? (
        <div>
          <Typography variant="body1">
            IgG: {l_igG ? "Positive" : "Negative"}{" "}
          </Typography>
          <Typography variant="body1">
            IgM: {l_igM ? "Positive" : "Negative"}{" "}
          </Typography>
          <Typography variant="body1">
            NS1Ag: {l_ns1Ag ? "Positive" : "Negative"}{" "}
          </Typography>
        </div>
      ) : (
        <Chips igG={l_igG} igM={l_igM} ns1Ag={l_ns1Ag} />
      )}
    </Alert>
  );
};
export default Info;

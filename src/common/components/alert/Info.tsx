import * as React from "react";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const Info = (props: any) => {
  const { sample } = props;
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
      <div style={{ minHeight: "47px" }}>
        <Typography variant="body1">{sample.interpretation}</Typography>
      </div>
      <Divider style={{ height: "1rem" }} />
      {sample.igM ? (
        <Chip
          size="sm"
          variant="outlined"
          label="IgM"
          icon={<AddCircleIcon style={{ color: "#ED4C67" }} />}
        />
      ) : (
        <Chip
          size="sm"
          variant="outlined"
          label="IgM"
          icon={<RemoveCircleIcon />}
        />
      )}
      {sample.igG ? (
        <Chip
          size="sm"
          variant="outlined"
          label="IgG"
          icon={<AddCircleIcon style={{ color: "#ED4C67" }} />}
        />
      ) : (
        <Chip
          size="sm"
          variant="outlined"
          label="IgG"
          icon={<RemoveCircleIcon />}
        />
      )}
      {sample.ns1Ag ? (
        <Chip
          size="sm"
          variant="outlined"
          label="NS1Ag"
          icon={<AddCircleIcon style={{ color: "#ED4C67" }} />}
        />
      ) : (
        <Chip
          size="sm"
          variant="outlined"
          label="NS1Ag"
          icon={<RemoveCircleIcon />}
        />
      )}
    </Alert>
  );
};
export default Info;

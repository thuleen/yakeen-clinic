import * as React from "react";
import Alert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const Info = (props: any) => {
  const { interpretation } = props;
  if (!interpretation) {
    return (
      <Alert variant="outlined" severity="warning" icon={false}>
        <Typography color="primary" variant="body1" style={{ fontWeight: 600 }}>
          Click the bands on the test kit diagram and click interpret.
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
        <Typography variant="body1">{interpretation.result}</Typography>
      </div>
      <Divider style={{ height: "1rem" }} />
      {interpretation.igM ? (
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
      {interpretation.igG ? (
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
      {interpretation.ns1Ag ? (
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

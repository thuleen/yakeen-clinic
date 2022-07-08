import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import PrimaryText from "./PrimaryText";
import SecondaryText from "./SecondaryText";

type PatientDetailsProps = {
  name: string;
  socialId: string;
  mobileNo: string;
  idType: string;
};

export default function PatientDetails(props: PatientDetailsProps) {
  const { name, socialId, idType, mobileNo } = props;
  return (
    <List dense sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemText
          primary={<PrimaryText label="Patient name" />}
          secondary={<SecondaryText value={`${name}`} />}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={<PrimaryText label={`${idType.toUpperCase()}`} />}
          secondary={<SecondaryText value={`${socialId}`} />}
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={<PrimaryText label="Mobile number" />}
          secondary={<SecondaryText value={`${mobileNo}`} />}
        />
      </ListItem>
    </List>
  );
}

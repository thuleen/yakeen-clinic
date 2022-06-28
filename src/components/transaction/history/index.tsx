import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { format } from 'date-fns'

const ranVerificationCode = () => {
  return Math.floor(1000000 + Math.random() * 9000000).toString();
};

type VerifyItemProps = {
  pending?: boolean;
  patientName: string;
  tagNo: string;
};

const TnxItem = ({ pending, patientName, tagNo }: VerifyItemProps) => {
  return (
  <ListItem button>
    <div style={{ width: "100%", display: "flex", flexDirection: "row", margin: "0rem" }}>
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="body2">{ format(new Date(), "do LLL yyyy hh:mm:ssa") }</Typography>
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
        style={{ display: "flex", flexDirection: "column", alignItems: "end" }}
      >
        <Typography variant="body2" style={{ fontFamily: "Abel", fontWeight: 600}}>{tagNo}</Typography>
        <Typography variant="caption">{patientName}</Typography>
      </div>
    </div>
    </ListItem>
  );
};

export default function TransactionsList() {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <TnxItem pending={true} tagNo={ranVerificationCode()} patientName="Korap Bin Rasoohah" />
      <Divider />
      <TnxItem pending={true} tagNo={ranVerificationCode()} patientName="On Eng Dee Bee" />
      <Divider />
      <TnxItem pending={true} tagNo={ranVerificationCode()} patientName="Alloysious Cindy Apel" />
      <Divider />
      <TnxItem pending={true} tagNo={ranVerificationCode()} patientName="Jen Osten binti Sheikh Paya" />
      <Divider />
      <TnxItem pending={true} tagNo={ranVerificationCode()} patientName="On Eng Dee Bee" />
      <Divider />
      <TnxItem pending={false} tagNo={ranVerificationCode()} patientName="YB Semua Boleh Makan" />
      <Divider />
      <TnxItem pending={false} tagNo={ranVerificationCode()} patientName="Moontal bin Mooncake" />
      <Divider />
      <TnxItem pending={false} tagNo={ranVerificationCode()} patientName="Hajee Holier Dan Dau" />
      <Divider />
      <TnxItem pending={false} tagNo={ranVerificationCode()} patientName="Bozo Ann Fekblon" />
      <Divider />
      <TnxItem pending={false} tagNo={ranVerificationCode()} patientName="Saiko a/l Narsistik" />
      <Divider />
      <TnxItem pending={false} tagNo={ranVerificationCode()} patientName="Ms Insta Snoflaque" />
      <Divider />
    </List>
  );
}

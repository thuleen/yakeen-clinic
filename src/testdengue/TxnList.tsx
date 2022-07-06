import * as React from "react";
import MenuAppBar from "../appbar";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { format } from "date-fns";

const ranVerificationCode = () => {
  return Math.floor(1000000 + Math.random() * 9000000).toString();
};

type TxnListProps = {
    handleNew: () => void;
}

type VerifyItemProps = {
  pending: boolean;
  patientName: string;
  tagNo: string;
  toggleDetails: (tagNo: string, pending: boolean) => void;
};

const TnxItem = ({
  pending,
  patientName,
  tagNo,
  toggleDetails,
}: VerifyItemProps) => {
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

export default function TxnList( props: TxnListProps ) {
const { handleNew} = props;
  const navigate = useNavigate();

  const toggleDetails = (tagNo: string, pending: boolean) => {
    navigate(`/transaction/${tagNo}/${pending}`);
  };

  return (
  <>
      <MenuAppBar handleNew={handleNew} />
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <TnxItem
        toggleDetails={toggleDetails}
        pending={true}
        tagNo={ranVerificationCode()}
        patientName="Korap Bin Rasoohah"
      />
      <Divider />
      <TnxItem
        toggleDetails={toggleDetails}
        pending={true}
        tagNo={ranVerificationCode()}
        patientName="On Eng Dee Bee"
      />
      <Divider />
      <TnxItem
        toggleDetails={toggleDetails}
        pending={true}
        tagNo={ranVerificationCode()}
        patientName="Alloysious Cindy Apel"
      />
      <Divider />
      <TnxItem
        toggleDetails={toggleDetails}
        pending={true}
        tagNo={ranVerificationCode()}
        patientName="Jen Osten binti Sheikh Paya"
      />
      <Divider />
      <TnxItem
        toggleDetails={toggleDetails}
        pending={true}
        tagNo={ranVerificationCode()}
        patientName="On Eng Dee Bee"
      />
      <Divider />
      <TnxItem
        toggleDetails={toggleDetails}
        pending={false}
        tagNo={ranVerificationCode()}
        patientName="YB Semua Boleh Makan"
      />
      <Divider />
      <TnxItem
        toggleDetails={toggleDetails}
        pending={false}
        tagNo={ranVerificationCode()}
        patientName="Moontal bin Mooncake"
      />
      <Divider />
      <TnxItem
        toggleDetails={toggleDetails}
        pending={false}
        tagNo={ranVerificationCode()}
        patientName="Hajee Holier Dan Dau"
      />
      <Divider />
      <TnxItem
        toggleDetails={toggleDetails}
        pending={false}
        tagNo={ranVerificationCode()}
        patientName="Bozo Ann Fekblon"
      />
      <Divider />
      <TnxItem
        toggleDetails={toggleDetails}
        pending={false}
        tagNo={ranVerificationCode()}
        patientName="Saiko a/l Narsistik"
      />
      <Divider />
      <TnxItem
        toggleDetails={toggleDetails}
        pending={false}
        tagNo={ranVerificationCode()}
        patientName="Ms Insta Snoflaque"
      />
      <Divider />
    </List>
    </>
  );
}

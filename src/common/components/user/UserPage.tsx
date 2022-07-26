import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Button from "@mui/material/Button";

import { useForm, Controller } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { AppState } from "../../../store";

import ChangePassword from "./ChangePassword";
import EditName from "./EditName";
import EditClinicNme from "./EditClinicNme";
import EditClinicAddr from "./EditClinicAddr";
import EditClinicPostcd from "./EditClinicPostcd";

const Primary = ({ label }: { label: string }) => {
  return (
    <Typography component={"span"} variant="caption" color="primary">
      {label}
    </Typography>
  );
};

const Secondary = ({ value }: { value: string }) => {
  return (
    <Typography component={"span"} variant="body1">
      {value}
    </Typography>
  );
};

const UserPage = () => {
  const [editName, setEditName] = React.useState<boolean>(false);
  const [changePassword, setChangePassword] = React.useState<boolean>(false);
  const [editClinicNme, setEditClinicNme] = React.useState<boolean>(false);
  const [editClinicAddr, setEditClinicAddr] = React.useState<boolean>(false);
  const [editClinicPostcd, setEditClinicPostcd] =
    React.useState<boolean>(false);
  const { clinic, user } = useSelector((state: AppState) => state.app);

  const toggleNameEdit = () => setEditName((en) => !en);
  const toggleChangePassword = () => setChangePassword((cp) => !cp);
  const toggleClinicNmeEdit = () => setEditClinicNme((cp) => !cp);
  const toggleClinicAddrEdit = () => setEditClinicAddr((cp) => !cp);
  const toggleClinicPostcdEdit = () => setEditClinicPostcd((cp) => !cp);

  if (editName) {
    return <EditName toggleNameEdit={toggleNameEdit} />;
  }

  if (changePassword) {
    return <ChangePassword toggleChangePassword={toggleChangePassword} />;
  }

  if (editClinicNme) {
    return <EditClinicNme toggleClinicNmeEdit={toggleClinicNmeEdit} />;
  }

  if (editClinicAddr) {
    return <EditClinicAddr toggleClinicAddrEdit={toggleClinicAddrEdit} />;
  }

  if (editClinicPostcd) {
    return <EditClinicPostcd toggleClinicPostcdEdit={toggleClinicPostcdEdit} />;
  }

  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton onClick={toggleClinicNmeEdit}>
          <ListItemText
            primary={<Primary label="Clinic" />}
            secondary={<Secondary value={clinic.name} />}
          />
          <ChevronRightIcon color="primary" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={toggleClinicAddrEdit}>
          <ListItemText
            primary={<Primary label="Address" />}
            secondary={<Secondary value={clinic.address} />}
          />
          <ChevronRightIcon color="primary" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton onClick={toggleClinicPostcdEdit}>
          <ListItemText
            primary={<Primary label="Postcode" />}
            secondary={<Secondary value={clinic.postcode} />}
          />
          <ChevronRightIcon color="primary" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText
            primary={<Primary label="Email" />}
            secondary={<Secondary value={user.email} />}
          />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton onClick={toggleNameEdit}>
          <ListItemText
            primary={<Primary label="Name" />}
            secondary={<Secondary value={user.name} />}
          />
          <ChevronRightIcon color="primary" />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton onClick={toggleChangePassword}>
          <ListItemText
            primary={<Primary label="Password" />}
            secondary={<Secondary value="Change password..." />}
          />
          <ChevronRightIcon color="primary" />
        </ListItemButton>
      </ListItem>
      <Divider />
    </List>
  );
};
export default UserPage;

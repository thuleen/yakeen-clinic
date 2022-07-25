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

import ChangePassword from "./ChangePassword";
import EditName from "./EditName";

const Primary = ({ label }) => {
  return (
    <Typography component={"span"} variant="caption" color="primary">
      {label}
    </Typography>
  );
};

const Secondary = ({ value }) => {
  return (
    <Typography component={"span"} variant="body1">
      {value}
    </Typography>
  );
};

const UserPage = () => {
  const [editName, setEditName] = React.useState<boolean>(false);
  const [changePassword, setChangePassword] = React.useState<boolean>(false);

  const toggleNameEdit = () => setEditName((en) => !en);
  const toggleChangePassword = () => setChangePassword((cp) => !cp);

  if (editName) {
    return <EditName toggleNameEdit={toggleNameEdit} />;
  }

  if (changePassword) {
    return <ChangePassword toggleChangePassword={toggleChangePassword} />;
  }

  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText
            primary={<Primary label="Email" />}
            secondary={<Secondary value="email@com.my" />}
          />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton onClick={toggleNameEdit}>
          <ListItemText
            primary={<Primary label="Name" />}
            secondary={<Secondary value="" />}
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

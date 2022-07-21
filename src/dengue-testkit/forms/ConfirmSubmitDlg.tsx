import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useSelector } from "react-redux";
import TestkitPreview from "./TestkitPreview";
import { DengueSample } from "../redux-saga/payload-type";
import { DengueState } from "../../store";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface ConfirmSubmitDlgProps {
  open: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
}

export default function ConfirmSubmitDlg(props: ConfirmSubmitDlgProps) {
  const { open, handleClose, handleSubmit } = props;
  const { activeSample } = useSelector((state: DengueState) => state.dengue);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Confirm {activeSample.tagNo}
          </Typography>
          <Button autoFocus color="inherit" onClick={handleSubmit}>
            submit
          </Button>
        </Toolbar>
      </AppBar>
      <TestkitPreview sample={activeSample} />
    </Dialog>
  );
}

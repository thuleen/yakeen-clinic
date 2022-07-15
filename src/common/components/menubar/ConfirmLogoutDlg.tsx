import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface ConfirmLogoutDlgProps {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
}

export default function ConfirmLogoutDlg(props: ConfirmLogoutDlgProps) {
  const { open, handleClose, handleConfirm } = props;
  return (
    <Dialog
      fullWidth={true}
      maxWidth="lg"
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" color="primary">
        Sign out
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Confirm sign out?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          cancel
        </Button>
        <Button variant="contained" onClick={handleConfirm} autoFocus>
          yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

interface LoaderProps {
  open: boolean;
  handleClose?: () => void;
}

const Loader = (props: LoaderProps) => (
  <Backdrop
    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={props.open}
    onClick={props.handleClose}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
);
export default Loader;

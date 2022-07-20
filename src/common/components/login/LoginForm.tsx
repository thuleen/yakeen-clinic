import React from "react";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";
import { useForm, Controller } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux-saga/actions";
import { Login } from "../../constants/payload-type";
import { AppState } from "../../../redux-saga/store";

interface LoaderProps {
  open: boolean;
  handleClose: () => void;
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

type FormValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  toggleForm: () => void;
};

const LoginForm = (props: LoginFormProps) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const { toggleForm } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    // resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const loginUser = (payload: Login) => dispatch(login(payload));
  const { pending } = useSelector((state: AppState) => state.app);

  const toggleShowPassword = () => {
    setShowPassword((prevVal) => !prevVal);
  };

  const onSubmit = handleSubmit((data) => {
    loginUser(data);
  });

  return (
    <div style={{ margin: "1rem" }}>
    <Loader open={pending} handleClose={ () => console.log("close backdrop!")} />

      <form id="login-form" onSubmit={onSubmit}>
        <FormControl fullWidth margin="normal" variant="outlined">
          <Controller
            name="email"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <OutlinedInput
                placeholder="Email"
                sx={{
                  border: "1pt solid white",
                }}
                inputProps={{
                  style: {
                    color: "white",
                  },
                }}
                id="email"
                label="Email"
                {...field}
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="normal" variant="outlined">
          <Controller
            name="password"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <OutlinedInput
                placeholder="Password"
                sx={{
                  border: "1pt solid white",
                }}
                inputProps={{
                  style: {
                    color: "white",
                  },
                }}
                id="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <Button form="show.password" onClick={toggleShowPassword}>
                      {showPassword ? (
                        <VisibilityIcon sx={{ color: "yellow" }} />
                      ) : (
                        <VisibilityOffIcon sx={{ color: "yellow" }} />
                      )}
                    </Button>
                  </InputAdornment>
                }
                {...field}
              />
            )}
          />
        </FormControl>
      </form>
      <div>
        <Button
          form="login-form"
          type="submit"
          color="secondary"
          variant="contained"
          style={{ marginRight: "0.5rem" }}
        >
          Login
        </Button>
        <Button color="secondary" variant="outlined" onClick={toggleForm}>
          sign up
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;

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
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../common/redux-saga/actions";
import { Login } from "../../constants/payload-type";
import { AppState } from "../../../store";
import Loader from "../loader/Loader";

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
      <Loader
        open={pending}
        handleClose={() => console.log("close backdrop!")}
      />
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
                        <VisibilityIcon style={{ color: "white" }} />
                      ) : (
                        <VisibilityOffIcon style={{ color: "white" }} />
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

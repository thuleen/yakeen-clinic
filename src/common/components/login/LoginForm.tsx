import React from "react";
import { alpha, styled } from "@mui/material/styles";
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

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "yellow",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "yellow",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "yellow",
    },
  },
});

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
        <Controller
          name="email"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <FormControl
              color="secondary"
              fullWidth
              margin="normal"
              variant="outlined"
            >
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                placeholder="Email"
                id="email"
                label="Email"
                {...field}
              />
            </FormControl>
          )}
        />
        <Controller
          name="password"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <FormControl
              color="secondary"
              fullWidth
              margin="normal"
              variant="outlined"
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                placeholder="Password"
                id="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                style={{ color: "white" }}
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
            </FormControl>
          )}
        />
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

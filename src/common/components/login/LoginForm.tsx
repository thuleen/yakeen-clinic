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

type FormValues = {
  clinicId: string;
  password: string;
};

type LoginFormProps = {
  handleDummyLogin: () => void;
};

const LoginForm = (props: LoginFormProps) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const { handleDummyLogin } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    // resolver: yupResolver(schema),
  });

  const toggleShowPassword = () => {
    setShowPassword((prevVal) => !prevVal);
  };

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    handleDummyLogin();
  });

  return (
    <div style={{ margin: "1rem" }}>
      <form id="login-form" onSubmit={onSubmit}>
        <FormControl fullWidth margin="normal" variant="outlined">
          <Controller
            name="clinicId"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <TextField
                focused
                inputProps={{
                  style: {
                    color: "white",
                    fontSize: "1.5em",
                  },
                }}
                placeholder="12345"
                color="secondary"
                id="clinicId"
                label="Clinic Id"
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
                  border: "2pt solid #fbc531",
                }}
                inputProps={{
                  style: {
                    color: "white",
                    fontSize: "1.5em",
                  },
                }}
                id="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <Button form="show.password" onClick={toggleShowPassword}>
                      {showPassword ? (
                        <VisibilityIcon color="secondary" />
                      ) : (
                        <VisibilityOffIcon color="secondary" />
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
      <Button
        form="login-form"
        type="submit"
        color="secondary"
        variant="contained"
      >
        Login
      </Button>
    </div>
  );
};

export default LoginForm;

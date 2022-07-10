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
import { login, LoginPayload } from "../../../app/redux-saga/actions";

type FormValues = {
  email: string;
  clinicName: string;
  clinicAddress: string;
  clinicPostcode: string;
};

type RegisterFormProps = {
  toggleForm: () => void;
};

const RegisterForm = (props: RegisterFormProps) => {
  const { toggleForm } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    // resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  // const loginUser = (payload: LoginPayload) => dispatch(login(payload));

  const onSubmit = handleSubmit((data) => {
    // console.log(data);
    // handleDummyLogin();
    // loginUser(data);
  });

  return (
    <div style={{ margin: "1rem" }}>
      <form id="register-form" onSubmit={onSubmit}>
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
            name="clinicName"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <OutlinedInput
                placeholder="Name of your clinic"
                sx={{
                  border: "1pt solid white",
                }}
                inputProps={{
                  style: {
                    color: "white",
                  },
                }}
                id="clinicName"
                label="Clinic name"
                {...field}
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="normal" variant="outlined">
          <Controller
            name="clinicAddress"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <OutlinedInput
                multiline
                rows={4}
                placeholder="Address of your clinic"
                sx={{
                  border: "1pt solid white",
                }}
                inputProps={{
                  style: {
                    color: "white",
                  },
                }}
                id="clinicAddress"
                label="Clinic address"
                {...field}
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="normal" variant="outlined">
          <Controller
            name="clinicPostcode"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <OutlinedInput
                placeholder="Post code"
                sx={{
                  border: "1pt solid white",
                }}
                inputProps={{
                  type: "number",
                  inputMode: "numeric",
                  style: {
                    color: "white",
                  },
                }}
                id="clinicPostcode"
                label="Post code"
                {...field}
              />
            )}
          />
        </FormControl>
      </form>
      <div>
        <Button
          form="register-form"
          type="submit"
          color="secondary"
          variant="contained"
        >
          sign up
        </Button>
        <Button color="secondary" variant="outlined" onClick={toggleForm}>
          cancel
        </Button>
      </div>
    </div>
  );
};

export default RegisterForm;

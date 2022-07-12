import React from "react";
import Paper from "@mui/material/Paper";
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
    <Paper sx={{ padding: "1rem" }}>
      <form id="register-form" onSubmit={onSubmit}>
        <FormControl fullWidth margin="normal" variant="outlined">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                id="email"
                label="Email of a contact person"
                placeholder="tipahcun89@yuhoo.com"
                InputLabelProps={{
                  shrink: true,
                }}
                {...field}
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="normal" variant="outlined">
          <Controller
            name="clinicName"
            control={control}
            render={({ field }) => (
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                placeholder="Klinik Sihat"
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
              <TextField
                multiline
                rows={4}
                placeholder="Lot 10A, Blok B, Bangunan Setia Kasih,                                        
                Jalan Seklinik, Taman Naluri,                                                  
                Nilai, Negeri Sembilan"
                InputLabelProps={{
                  shrink: true,
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
              <TextField
                placeholder="71700"
                InputLabelProps={{
                  shrink: true,
                }}
                id="clinicPostcode"
                label="Postcode"
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
          style={{ marginRight: "0.5rem" }}
        >
          sign up
        </Button>
        <Button variant="outlined" onClick={toggleForm}>
          cancel
        </Button>
      </div>
    </Paper>
  );
};

export default RegisterForm;

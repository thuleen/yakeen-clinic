import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

type FormValues = {
  clinicId: string;
};

type LoginFormProps = {
  handleDummyLogin: () => void;
};

const LoginForm = (props: LoginFormProps) => {
  const { handleDummyLogin } = props;
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    // resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    handleDummyLogin();
  });

  return (
    <div>
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
                color="secondary"
                id="clinicId"
                label="Clinic Id"
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

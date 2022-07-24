import React from "react";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  usrPassword: Yup.string()
    .matches(/^\S*$/, "Whitespace is not allowed")
    .matches(
      new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#!@$%^&*()+=]).{8,20}$"
      ),
      `Min 8 characters and at most max 20 characters,\n
      at least a digit,\n
      upper case alphabet,\n
      one lower case alphabet,\n
      and one special character which includes !@#$%&*()+=^`
    )
    .required("password is required"),
  usrNewPassword: Yup.string()
    .matches(/^\S*$/, "Whitespace is not allowed")
    .matches(
      new RegExp(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#!@$%^&*()+=]).{8,20}$"
      ),
      `Min 8 characters and at most max 20 characters,\n
      at least a digit,\n
      upper case alphabet,\n
      one lower case alphabet,\n
      and one special character which includes !@#$%&*()+=^`
    )
    .required("password is required"),
});

export interface IChangePassword {
  usrPassword: string;
  usrNewPassword: string;
}

const ChangePassword = (props: { toggleChangePassword: () => void }) => {
  const { toggleChangePassword } = props;
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ShowSeedphrasePayload>({
    resolver: yupResolver(schema),
  });

  const toggleShowPassword = () => {
    setShowPassword((prevVal) => !prevVal);
  };

  const onSubmit: SubmitHandler<IChangePassword> = (payload) => {
    toggleChangePassword();
  };

  return (
    <div style={{ margin: "1rem" }}>
      <form id="changePassword" onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel htmlFor="usrPassword">Existing password</InputLabel>
          <Controller
            name="usrPassword"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <OutlinedInput
                error={errors.password ? true : false}
                id="usrPassword"
                label="Existing password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <Button form="show.password" onClick={toggleShowPassword}>
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </Button>
                  </InputAdornment>
                }
                {...field}
              />
            )}
          />
          {errors.usrPassword ? (
            <FormHelperText error={true}>
              {errors.usrPassword.message}
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel htmlFor="usrNewPassword">New password</InputLabel>
          <Controller
            name="usrNewPassword"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <OutlinedInput
                error={errors.password ? true : false}
                id="usrNewPassword"
                label="New password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <Button form="show.password" onClick={toggleShowPassword}>
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </Button>
                  </InputAdornment>
                }
                {...field}
              />
            )}
          />
          {errors.usrNewPassword ? (
            <FormHelperText error={true}>
              {errors.usrNewPassword.message}
            </FormHelperText>
          ) : null}
        </FormControl>
        <Button type="submit" form="changePassword">
          submit
        </Button>
      </form>
    </div>
  );
};
export default ChangePassword;

import React from "react";
import Button from "@mui/material/Button";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { updateUsr } from "../../redux-saga/actions";
import { AppState } from "../../../store";
import Loader from "../loader/Loader";

const schema = Yup.object().shape({
  usrPassword: Yup.string()
    .matches(/^\S*$/, "Whitespace is not allowed")
    // .matches(
    //   new RegExp(
    //     "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#!@$%^&*()+=]).{8,20}$"
    //   ),
    //   `Min 8 characters and at most max 20 characters,\n
    //   at least a digit,\n
    //   upper case alphabet,\n
    //   one lower case alphabet,\n
    //   and one special character which includes !@#$%&*()+=^`
    // )
    .required("password is required"),
  usrNewPassword: Yup.string()
    .matches(/^\S*$/, "Whitespace is not allowed")
    // .matches(
    //   new RegExp(
    //     "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#!@$%^&*()+=]).{8,20}$"
    //   ),
    //   `Min 8 characters and at most max 20 characters,\n
    //   at least a digit,\n
    //   upper case alphabet,\n
    //   one lower case alphabet,\n
    //   and one special character which includes !@#$%&*()+=^`
    // )
    .required("password is required"),
});

export interface IChangePassword {
  usrPassword: string;
  usrNewPassword: string;
}

const ChangePassword = (props: { toggleChangePassword: () => void }) => {
  const { toggleChangePassword } = props;
  const [showUsrPassword, setShowUsrPassword] = React.useState<boolean>(false);
  const [showUsrNewPassword, setShowUsrNewPassword] =
    React.useState<boolean>(false);

  const dispatch = useDispatch();
  const handleChangePassword = (payload: any) => dispatch(updateUsr(payload));
  const { pending } = useSelector((state: AppState) => state.app);

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangePassword>({
    resolver: yupResolver(schema),
  });

  const toggleShowUsrPassword = () => {
    setShowUsrPassword((prevVal) => !prevVal);
  };

  const toggleShowUsrNewPassword = () => {
    setShowUsrNewPassword((prevVal) => !prevVal);
  };

  const onSubmit: SubmitHandler<IChangePassword> = (payload) => {
    // toggleChangePassword();
    // console.log(payload);
    handleChangePassword(payload);
  };

  return (
    <div style={{ margin: "1rem" }}>
      <Loader open={pending} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          color="primary"
          aria-label="back"
          onClick={toggleChangePassword}
        >
          <ChevronLeftIcon />
        </IconButton>
        <Button type="submit" form="changePassword">
          submit
        </Button>
      </div>
      <form id="changePassword" onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel htmlFor="usrPassword">Existing password</InputLabel>
          <Controller
            name="usrPassword"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <OutlinedInput
                error={errors.usrPassword ? true : false}
                id="usrPassword"
                label="Existing password"
                type={showUsrPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <Button
                      form="show.password"
                      onClick={toggleShowUsrPassword}
                    >
                      {showUsrPassword ? (
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
                error={errors.usrNewPassword ? true : false}
                id="usrNewPassword"
                label="New password"
                type={showUsrNewPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <Button
                      form="show.password"
                      onClick={toggleShowUsrNewPassword}
                    >
                      {showUsrNewPassword ? (
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
      </form>
    </div>
  );
};
export default ChangePassword;

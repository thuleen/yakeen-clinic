import React from "react";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("name is required"),
});

export interface IChangePassword {
  usrPassword: string;
  usrNewPassword: string;
}

const EditName = (props: { toggleNameEdit: () => void }) => {
  const { toggleNameEdit } = props;

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ShowSeedphrasePayload>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IChangePassword> = (payload) => {
    toggleNameEdit();
  };

  return (
    <div style={{ margin: "1rem" }}>
      <form id="editName" onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth margin="normal" variant="outlined">
          <Controller
            name="name"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <TextField
                placeholder="Your full name (optional)"
                InputLabelProps={{
                  shrink: true,
                }}
                id="name"
                label="Name"
                {...field}
              />
            )}
          />
          {errors.name ? (
            <FormHelperText error={true}>{errors.name.message}</FormHelperText>
          ) : null}
        </FormControl>
        <Button type="submit" form="editName">
          submit
        </Button>
      </form>
    </div>
  );
};
export default EditName;

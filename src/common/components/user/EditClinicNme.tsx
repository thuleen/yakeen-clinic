import React from "react";
import Button from "@mui/material/Button";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import IconButton from "@mui/material/IconButton";
import { saveClinicNme } from "../../redux-saga/actions";
import { AppState } from "../../../store";
import Loader from "../loader/Loader";

const schema = Yup.object().shape({
  name: Yup.string().required("name is required"),
});

export interface IChangeName {
  name: string;
}

const EditClinicNme = (props: { toggleClinicNmeEdit: () => void }) => {
  const { toggleClinicNmeEdit } = props;
  const dispatch = useDispatch();
  const handleChangeName = (payload: any) => dispatch(saveClinicNme(payload));
  const { clinic, pending } = useSelector((state: AppState) => state.app);

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangeName>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: clinic.name ? clinic.name : "",
    },
  });

  const onSubmit: SubmitHandler<IChangeName> = (payload) => {
    handleChangeName({ ...payload });
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
          onClick={toggleClinicNmeEdit}
        >
          <ChevronLeftIcon />
        </IconButton>
        <Button type="submit" form="editClinicName">
          submit
        </Button>
      </div>
      <form id="editClinicName" onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth margin="normal" variant="outlined">
          <Controller
            name="name"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <TextField
                placeholder="Clinic name"
                InputLabelProps={{
                  shrink: true,
                }}
                id="name"
                label="Clinic name"
                {...field}
              />
            )}
          />
          {errors.name ? (
            <FormHelperText error={true}>{errors.name.message}</FormHelperText>
          ) : null}
        </FormControl>
      </form>
    </div>
  );
};
export default EditClinicNme;

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
import { updateUsr } from "../../redux-saga/actions";
import { AppState } from "../../../store";
import Loader from "../loader/Loader";

const schema = Yup.object().shape({
  address: Yup.string().required("name is required"),
});

export interface IChangeAddress {
  address: string;
}

const EditClinicAddr = (props: { toggleClinicAddrEdit: () => void }) => {
  const { toggleClinicAddrEdit } = props;
  const dispatch = useDispatch();
  const handleChangeName = (payload: any) => dispatch(updateUsr(payload));
  const { clinic, pending } = useSelector((state: AppState) => state.app);

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangeName>({
    resolver: yupResolver(schema),
    defaultValues: {
      address: clinic.address ? clinic.address : "",
    },
  });

  const onSubmit: SubmitHandler<IChangeAddress> = (payload) => {
    console.log(payload);
    // handleChangeName({ ...payload });
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
          onClick={toggleClinicAddrEdit}
        >
          <ChevronLeftIcon />
        </IconButton>
        <Button type="submit" form="editClinicAddr">
          submit
        </Button>
      </div>
      <form id="editClinicAddr" onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth margin="normal" variant="outlined">
          <Controller
            name="address"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <TextField
                multiline
                rows={3}
                maxRows={5}
                placeholder="Clinic address"
                InputLabelProps={{
                  shrink: true,
                }}
                id="address"
                label="Clinic address"
                {...field}
              />
            )}
          />
          {errors.name ? (
            <FormHelperText error={true}>
              {errors.address.message}
            </FormHelperText>
          ) : null}
        </FormControl>
      </form>
    </div>
  );
};
export default EditClinicAddr;

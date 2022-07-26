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
import { saveClinicPostcd } from "../../redux-saga/actions";
import { AppState } from "../../../store";
import Loader from "../loader/Loader";

const schema = Yup.object().shape({
  postcode: Yup.string().required("postcode is required"),
});

export interface IChangePostcode {
  postcode: string;
}

const EditClinicPostcd = (props: { toggleClinicPostcdEdit: () => void }) => {
  const { toggleClinicPostcdEdit } = props;
  const dispatch = useDispatch();
  const handleChangePostcd = (payload: any) =>
    dispatch(saveClinicPostcd(payload));
  const { clinic, pending } = useSelector((state: AppState) => state.app);

  const {
    reset,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangePostcode>({
    resolver: yupResolver(schema),
    defaultValues: {
      postcode: clinic.postcode ? clinic.postcode : "",
    },
  });

  const onSubmit: SubmitHandler<IChangePostcode> = (payload) => {
    handleChangePostcd({ ...payload });
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
          onClick={toggleClinicPostcdEdit}
        >
          <ChevronLeftIcon />
        </IconButton>
        <Button type="submit" form="editClinicPostcode">
          submit
        </Button>
      </div>
      <form id="editClinicPostcode" onSubmit={handleSubmit(onSubmit)}>
        <FormControl fullWidth margin="normal" variant="outlined">
          <Controller
            name="postcode"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <TextField
                placeholder="Postcode"
                InputLabelProps={{
                  shrink: true,
                }}
                id="postcode"
                label="Postcode"
                {...field}
              />
            )}
          />
          {errors.postcode ? (
            <FormHelperText error={true}>
              {errors.postcode.message}
            </FormHelperText>
          ) : null}
        </FormControl>
      </form>
    </div>
  );
};
export default EditClinicPostcd;

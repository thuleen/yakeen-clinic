import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import MenuItem from "@mui/material/MenuItem";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Typography from "@mui/material/Typography";
import styles from "./styles";
import { createPatient } from "../redux-saga/actions";
import { DengueState } from "../../redux-saga/store";
import { DengueSample } from "../redux-saga/payload-type";

type FormValues = {
  name: string;
  mobileNo: string;
  socialId: string;
  idType: string;
};

type FormProps = {
  formId: string;
};

const schema = Yup.object().shape({
  name: Yup.string().required(),
});

const Patient = (props: FormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const [idType, setIdType] = useState<string>("nric");
  const { activeSample } = useSelector((state: DengueState) => state.dengue);
  const { tagNo } = activeSample;
  const dispatch = useDispatch();
  const createNew = (payload: any) => dispatch(createPatient(payload));

  const handleIdTypeChange = (event: SelectChangeEvent) => {
    setIdType(event.target.value as string);
  };

  const onSubmit = handleSubmit((data: any) => {
    // console.log({ ...data, idType });
    createNew({ ...data, idType, tagNo: tagNo });
  });

  return (
    <div style={styles.formContainer}>
      <form id={props.formId} onSubmit={onSubmit}>
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel htmlFor="name">Patient name</InputLabel>
          <Controller
            name="name"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <OutlinedInput id="name" label="Patient name" {...field} />
            )}
          />
          {errors.name ? (
            <FormHelperText error={true}>{errors.name?.message}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel htmlFor="mobileNo">Mobile number</InputLabel>
          <Controller
            name="mobileNo"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <OutlinedInput
                inputProps={{ type: "number", inputMode: "numeric" }}
                id="mobileNo"
                label="Mobile number"
                {...field}
              />
            )}
          />
          {errors.mobileNo ? (
            <FormHelperText error={true}>
              {errors.mobileNo?.message}
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl fullWidth margin="normal" variant="standard">
          <Controller
            name="socialId"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <OutlinedInput
                id="socialId"
                label="Id"
                {...field}
                startAdornment={
                  <InputAdornment position="start">
                    <Select
                      id="id-select"
                      value={idType}
                      onChange={handleIdTypeChange}
                    >
                      <MenuItem
                        style={{ border: "0pt solid white" }}
                        value="nric"
                      >
                        NRIC
                      </MenuItem>
                      <MenuItem value="passport">Passport</MenuItem>
                    </Select>
                  </InputAdornment>
                }
              />
            )}
          />
        </FormControl>
      </form>
      <Alert icon={false}>
        HINT: Write the tag number on the test kit packaging/box.
      </Alert>
    </div>
  );
};

export default Patient;

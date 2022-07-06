import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// import ReactSelectMaterialUi from "react-select-material-ui";
// import Select from "react-select";
// import ValueType from "react-select";
// import Option from "react-select";
import { useForm, Controller } from "react-hook-form";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Typography from "@mui/material/Typography";
import styles from "./styles";

type FormValues = {
  patientName: string;
  mobileNo: string;
  socialId: string;
};

type FormProps = {
  formId: string;
  tagNo: string;
};

const schema = Yup.object().shape({
  patientName: Yup.string().required(),
  mobileNo: Yup.string().matches(/^[0-9]{12}$/, "Must be a valid Seafarer Id"),
  // seafarerId: Yup.string().matches(
  //   /^[0-9]{12}$/,
  //   "Must be a valid Seafarer Id"
  // ),
});

const Patient = (props: FormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };

  const [idType, setIdType] = useState<string>("nric");

  const handleIdTypeChange = (event: SelectChangeEvent) => {
    setIdType(event.target.value as string);
  };

  const onSubmit = handleSubmit((data: any) => {
    console.log("submit");
  });
  return (
    <div style={styles.formContainer}>
      <form id={props.formId} onSubmit={onSubmit}>
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel htmlFor="seafarerId">Patient name</InputLabel>
          <Controller
            name="patientName"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <OutlinedInput id="patientName" label="Patient name" {...field} />
            )}
          />
          {errors.patientName ? (
            <FormHelperText error={true}>
              {errors.patientName?.message}
            </FormHelperText>
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
    </div>
  );
};

export default Patient;

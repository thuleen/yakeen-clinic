import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import ValueType from "react-select";
import Option from "react-select";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Typography from "@mui/material/Typography";
import styles from "./styles";
import Testkit from "./Testkit";

type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: "positive", label: "Positive" },
  { value: "negative", label: "Negative" },
  { value: "invalid", label: "Invalid" },
];

type FormValues = {
  notes: string;
  result: string;
};

type FormProps = {
  formId: string;
  tagNo: string;
};

const schema = Yup.object().shape({
  patientName: Yup.string().required(),
  // seafarerId: Yup.string().matches(
  //   /^[0-9]{12}$/,
  //   "Must be a valid Seafarer Id"
  // ),
});

const TestResult = (props: FormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  const [selectedOption, setSelectedOption] = useState<OptionType>(options[0]);

  const toggleG = () => {
    console.log("toggle G!");
  };

  const handleChange = (selectedOption: OptionType) => {};

  const onSubmit = handleSubmit((data: any) => {
    console.log("submit");
  });

  return (
    <div style={styles.formContainer}>
      <form id={props.formId} onSubmit={onSubmit}>
        <Testkit />
      </form>
    </div>
  );
};

export default TestResult;

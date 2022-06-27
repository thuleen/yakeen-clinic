import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Typography from "@mui/material/Typography";
import styles from "./styles";

type FormValues = {
  notes: string;
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

  const onSubmit = handleSubmit((data: any) => {
    console.log("submit");
  });

  return (
    <div style={styles.formContainer}>
      <form id={props.formId} onSubmit={onSubmit}>
        <InputLabel htmlFor="result">Result ({props.tagNo})</InputLabel>
        <FormControl
          fullWidth
          margin="normal"
          variant="outlined"
          style={{ zIndex: 5 }}
        >
          <Controller
            name="result"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={[
                  { value: "negative", label: "Negative" },
                  { value: "positive", label: "Positive" },
                  { value: "invalid", label: "Invalid" },
                ]}
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth margin="normal" variant="outlined">
          <InputLabel htmlFor="notes">Notes</InputLabel>
          <Controller
            name="notes"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <OutlinedInput id="notes" label="Notes" {...field} />
            )}
          />
          {errors.notes ? (
            <FormHelperText error={true}>
              {errors.notes?.message}
            </FormHelperText>
          ) : null}
        </FormControl>
      </form>
    </div>
  );
};

export default TestResult;

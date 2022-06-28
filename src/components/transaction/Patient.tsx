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

const Patient = (props: FormProps) => {
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
      </form>
      <Typography variant="caption">
        Additional fields (passport, etc) can be added but not more than 2 - to
        maintainm good UX!
      </Typography>
    </div>
  );
};

export default Patient;

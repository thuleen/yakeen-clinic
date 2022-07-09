import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import styles from "./styles";
import { nextStep } from "../redux-saga/actions";

type TagNoProps = {
  formId: string;
  tagNo: string;
};

const TagNo = (props: TagNoProps) => {
  const { tagNo, formId } = props;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const next = () => dispatch(nextStep());

  const onSubmit = () => {
    next();
  };

  return (
    <div style={styles.container}>
      <div style={styles.tagNo}>
        <Typography style={styles.tagNoText}>{props.tagNo}</Typography>
        <Typography variant="body1" color="primary">
          Write the number to tag the test kit.
        </Typography>
      </div>
      <div style={{ height: "250px" }} />
      <form id={formId} onSubmit={handleSubmit(onSubmit)}>
        <input hidden onChange={() => {}} value={tagNo} name="tagNo" />
      </form>
    </div>
  );
};

export default TagNo;

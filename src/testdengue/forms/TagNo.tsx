import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import styles from "./styles";
import { nextStep } from "../redux-saga/actions";

type TagNoProps = {
  fornId: string;
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

  const onSubmit = (data) => {
    next();
  };

  return (
    <div style={styles.container}>
      <div style={styles.randomNo}>
        <Typography style={styles.randomNoText}>{props.tagNo}</Typography>
        <Typography variant="body1" color="primary">
          Write the number to tag the test kit.
        </Typography>
        <form id={formId} onSubmit={handleSubmit(onSubmit)}>
          <input hidden onChange={() => {}} value={tagNo} name="tagNo" />
        </form>
      </div>
    </div>
  );
};

export default TagNo;

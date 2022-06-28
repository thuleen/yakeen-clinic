import Typography from "@mui/material/Typography";
import styles from "./styles";

type TagNoProps = {
  tagNo: string;
};

const Summary = (props: TagNoProps) => {
  return (
    <div style={styles.container}>
       Test result summary ({props.tagNo}) before submission, etc...
    </div>
  );
};

export default Summary;

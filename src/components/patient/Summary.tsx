import Typography from "@mui/material/Typography";
import styles from "./styles";

type TagNoProps = {
  tagNo: string;
};

const Summary = (props: TagNoProps) => {
  return (
    <div style={styles.container}>
      Sumarry test ({props.tagNo}) before submission, ertc...
    </div>
  );
};

export default Summary;

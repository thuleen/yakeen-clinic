import Typography from "@mui/material/Typography";
import styles from "./styles";

type TagNoProps = {
  tagNo: string;
};

const TagNo = (props: TagNoProps) => {
  return (
    <div style={styles.container}>
      <div style={styles.randomNo}>
        <Typography style={styles.randomNoText}>{props.tagNo}</Typography>
        <Typography variant="body1" color="primary">
          Write the number to tag the test kit.
        </Typography>
      </div>
    </div>
  );
};

export default TagNo;

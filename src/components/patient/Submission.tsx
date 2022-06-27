import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./styles";

type TagNoProps = {
  tagNo: string;
};

const Submission = (props: TagNoProps) => {
  return (
    <div style={styles.container}>
      <div style={{ textAlign: "center" }}>
        <Button variant="contained">Submit</Button>
      </div>
    </div>
  );
};

export default Submission;
